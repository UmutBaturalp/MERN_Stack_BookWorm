import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from './styles';
import Icons from '../../assets/Icons';
import {logoutUser} from '../../redux/actions/authActions';


// Mock data for user's recommendations
const USER_RECOMMENDATIONS = [
  {
    id: '1',
    title: 'The Hunger Games',
    rating: 4,
    description: 'A dystopian tale of survival, rebellion, and sacrifice.',
    date: '3/9/2025',
    image: Icons.book,
  },
  {
    id: '2',
    title: 'The Catcher in the Rye',
    rating: 3,
    description:
      'A classic coming-of-age novel about teenage alienation and re...',
    date: '3/9/2025',
    image: Icons.book,
  },
  {
    id: '3',
    title: 'Sapiens',
    rating: 5,
    description:
      'A thought-provoking exploration of human history and our speci...',
    date: '3/9/2025',
    image: Icons.book,
  },
];

const RecommendationItem = ({item}) => {
  return (
    <View style={styles.recommendationItem}>
      <Image source={item.image} style={styles.bookThumbnail} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <View style={styles.ratingContainer}>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Text
                key={index}
                style={
                  index < item.rating ? styles.starFilled : styles.starEmpty
                }>
                ★
              </Text>
            ))}
        </View>
        <Text style={styles.bookDescription}>{item.description}</Text>
        <Text style={styles.bookDate}>{item.date}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton}>
        <Image source={Icons.add} style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

const Profile = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.userInfoContainer}>
          <Image source={Icons.profile} style={styles.profileImage} />
          <View>
            <Text style={styles.userName}>{user?.name || 'John Doe'}</Text>
            <Text style={styles.userEmail}>
              {user?.email || 'john@gmail.com'}
            </Text>
            <Text style={styles.memberSince}>Member since 3/9/2025</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recommendationsContainer}>
        <View style={styles.recommendationsHeader}>
          <Text style={styles.recommendationsTitle}>Your Recommendations</Text>
          <Text style={styles.recommendationsCount}>
            {USER_RECOMMENDATIONS.length} books
          </Text>
        </View>

        <FlatList
          data={USER_RECOMMENDATIONS}
          renderItem={({item}) => <RecommendationItem item={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.recommendationsList}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
