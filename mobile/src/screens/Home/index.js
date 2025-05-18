import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {styles} from './styles';
import COLORS from '../../config/colors';
import {booksAPI} from '../../service/api';
import {useFocusEffect} from '@react-navigation/native';

// Import components
import {Header, BookItem, EmptyBooks} from '../../components';

const Home = ({navigation, route}) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchBooks = async (pageNum = 1, refresh = false) => {
    try {
      if (refresh) {
        setRefreshing(true);
      } else if (pageNum === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const response = await booksAPI.getAllBooks(pageNum);

      if (pageNum === 1 || refresh) {
        setBooks(response.books);
      } else {
        setBooks(prevBooks => [...prevBooks, ...response.books]);
      }

      setHasMore(response.books.length > 0 && pageNum < response.totalPages);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
      setLoadingMore(false);
    }
  };

  // Create sayfasından refresh parametresi geldiyse kitapları yeniden yükle
  useEffect(() => {
    if (route.params?.refresh) {
      console.log('Refreshing home content after book creation');
      setPage(1);
      fetchBooks(1, true);
    }
  }, [route.params?.refresh, route.params?.timestamp]);

  // İlk yükleme
  useEffect(() => {
    fetchBooks();
  }, []);

  // Ekran her odaklandığında kitapları yenile
  useFocusEffect(
    useCallback(() => {
      console.log('Home screen focused, refreshing content');
      setPage(1);
      fetchBooks(1, true);
      return () => {};
    }, []),
  );

  const handleRefresh = () => {
    setPage(1);
    fetchBooks(1, true);
  };

  const handleLoadMore = () => {
    if (hasMore && !loadingMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchBooks(nextPage);
    }
  };

  const renderFooter = () => {
    if (!loadingMore) return null;
    return (
      <ActivityIndicator
        size="small"
        color={COLORS.primary}
        style={styles.loadingFooter}
      />
    );
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
      <Header
        title="BookWorm"
        subtitle="Discover great reads from the community"
      />

      {books.length > 0 ? (
        <FlatList
          data={books}
          renderItem={({item}) => <BookItem item={item} />}
          keyExtractor={item => item._id || item.id}
          contentContainerStyle={styles.listContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      ) : (
        <EmptyBooks onRefresh={handleRefresh} />
      )}
    </SafeAreaView>
  );
};

export default Home;
