import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import Icons from '../../assets/Icons';

const RecommendationItem = ({item, onDelete}) => {
  const handleDelete = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this recommendation?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => onDelete(item._id),
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <View style={styles.recommendationItem}>
      <Image source={{uri: item.image}} style={styles.bookThumbnail} />
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
        <Text style={styles.bookDescription}>{item.caption}</Text>
        <Text style={styles.bookDate}>
          {new Date(item.createdAt).toLocaleDateString()}
        </Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Image source={Icons.add} style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default RecommendationItem;
