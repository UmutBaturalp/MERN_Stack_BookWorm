import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icons from '../../assets/Icons';

const EmptyRecommendations = ({navigation}) => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        source={Icons.book}
        style={styles.emptyStateImage}
        resizeMode="contain"
      />
      <Text style={styles.emptyTitle}>No Recommendations Yet</Text>
      <Text style={styles.emptyText}>
        You haven't shared any book recommendations yet. Start sharing your
        favorite reads with the community!
      </Text>
      <TouchableOpacity
        style={styles.emptyActionButton}
        onPress={() => navigation.navigate('Create')}>
        <Text style={styles.emptyActionButtonText}>Add Your First Book</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyRecommendations;
