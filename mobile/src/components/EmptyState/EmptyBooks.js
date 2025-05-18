import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icons from '../../assets/Icons';

const EmptyBooks = ({onRefresh}) => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        source={Icons.book}
        style={styles.emptyStateImage}
        resizeMode="contain"
      />
      <Text style={styles.emptyTitle}>No Books Found</Text>
      <Text style={styles.emptyText}>
        It looks like there are no book recommendations yet. Be the first to
        share your favorite read!
      </Text>
      <TouchableOpacity style={styles.emptyRefreshButton} onPress={onRefresh}>
        <Text style={styles.emptyRefreshButtonText}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyBooks;
