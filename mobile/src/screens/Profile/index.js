import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Alert,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from './styles';
import COLORS from '../../config/colors';
import {logoutUser} from '../../redux/actions/authActions';
import {booksAPI} from '../../service/api';
import {useFocusEffect} from '@react-navigation/native';

// Import components
import {
  ProfileHeader,
  RecommendationItem,
  EmptyRecommendations,
} from '../../components';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const [userBooks, setUserBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  console.log('----+++ user ', user);
  // Debug user data when component mounts or user changes
  useEffect(() => {
    console.log(
      'Profile screen - User from Redux:',
      JSON.stringify(user, null, 2),
    );
  }, [user]);

  const fetchUserBooks = async (refresh = false) => {
    try {
      if (refresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      const books = await booksAPI.getUserBooks();
      setUserBooks(books);
      console.log('User books loaded:', books.length);
    } catch (error) {
      console.error('Error fetching user books:', error);
      Alert.alert('Error', 'Failed to load your recommendations');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // İlk yükleme
  useEffect(() => {
    fetchUserBooks();
  }, []);

  // Ekran her odaklandığında kullanıcı kitaplarını yenile
  useFocusEffect(
    useCallback(() => {
      console.log('Profile screen focused, refreshing user books');
      fetchUserBooks(true);
      return () => {};
    }, []),
  );

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleRefresh = () => {
    fetchUserBooks(true);
  };

  const handleDeleteBook = async bookId => {
    try {
      await booksAPI.deleteBook(bookId);
      setUserBooks(prevBooks => prevBooks.filter(book => book._id !== bookId));
      Alert.alert('Success', 'Book recommendation deleted successfully');
    } catch (error) {
      console.error('Error deleting book:', error);
      Alert.alert('Error', 'Failed to delete recommendation');
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader user={user} onLogout={handleLogout} />

      <View style={styles.recommendationsContainer}>
        <View style={styles.recommendationsHeader}>
          <Text style={styles.recommendationsTitle}>Your Recommendations</Text>
          <Text style={styles.recommendationsCount}>
            {userBooks.length} books
          </Text>
        </View>

        {userBooks.length > 0 ? (
          <FlatList
            data={userBooks}
            renderItem={({item}) => (
              <RecommendationItem item={item} onDelete={handleDeleteBook} />
            )}
            keyExtractor={item => item._id}
            contentContainerStyle={styles.recommendationsList}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
          />
        ) : (
          <EmptyRecommendations navigation={navigation} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
