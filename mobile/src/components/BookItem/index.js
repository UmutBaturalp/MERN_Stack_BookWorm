import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {ensureValidImageUrl} from '../../utils/imageHelper';
import Icons from '../../assets/Icons';

const BookItem = ({item}) => {
  const userAvatarUrl = ensureValidImageUrl(item.user?.profileImage);
  const fallbackAvatar =
    'https://api.dicebear.com/7.x/avataaars/svg?seed=default';

  return (
    <View style={styles.bookCard}>
      <View style={styles.userInfoContainer}>
        <Image
          source={{
            uri: userAvatarUrl || fallbackAvatar,
          }}
          style={styles.userAvatar}
          defaultSource={Icons.profile}
        />
        <Text style={styles.userName}>
          {item.user?.username || 'Unknown User'}
        </Text>
      </View>

      <Image
        source={{uri: item.image}}
        style={styles.bookImage}
        resizeMode="cover"
        defaultSource={Icons.book}
      />

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

      <Text style={styles.bookDescription}>{item.caption}</Text>
      <Text style={styles.bookDate}>
        {new Date(item.createdAt).toLocaleDateString()}
      </Text>
    </View>
  );
};

export default BookItem;
