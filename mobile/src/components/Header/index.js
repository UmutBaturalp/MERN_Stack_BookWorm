import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Header = ({title, subtitle}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.appName}>{title || 'BookWorm'}</Text>
      {subtitle && (
        <Text style={styles.tagline}>
          {subtitle || 'Discover great reads from the community'}
        </Text>
      )}
    </View>
  );
};

export default Header;
