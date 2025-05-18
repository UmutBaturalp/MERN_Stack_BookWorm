import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icons from '../../assets/Icons';


// Mock data for book recommendations
const MOCK_RECOMMENDATIONS = [
  {
    id: '1',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    rating: 4,
    description: 'A dystopian tale of survival, rebellion, and sacrifice.',
    date: '3/9/2025',
    image: Icons.book,
  },
  {
    id: '2',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    rating: 3,
    description:
      'A classic coming-of-age novel about teenage alienation and rebellion.',
    date: '3/9/2025',
    image: Icons.book,
  },
];

const BookItem = ({item}) => {
  return (
    <View style={styles.bookCard}>
      <View style={styles.userInfoContainer}>
        <Image source={Icons.profile} style={styles.userAvatar} />
        <Text style={styles.userName}>John Doe</Text>
      </View>

      <Image source={item.image} style={styles.bookImage} resizeMode="cover" />

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
  );
};

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>BookWorm</Text>
        <Text style={styles.tagline}>
          Discover great reads from the community
        </Text>
      </View>

      <FlatList
        data={MOCK_RECOMMENDATIONS}
        renderItem={({item}) => <BookItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

export default Home;
