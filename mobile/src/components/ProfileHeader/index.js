import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icons from '../../assets/Icons';
import {ensureValidImageUrl, getFallbackAvatar} from '../../utils/imageHelper';

const ProfileHeader = ({user, onLogout}) => {
  const [imageLoadError, setImageLoadError] = useState(false);

  // For debugging
  useEffect(() => {
    console.log('ProfileHeader - User data:', {
      username: user?.username,
      email: user?.email,
      profileImage: user?.profileImage,
      createdAt: user?.createdAt,
      imageType: typeof user?.profileImage,
    });
  }, [user]);

  const profileImageUrl = user?.profileImage
    ? ensureValidImageUrl(user.profileImage)
    : getFallbackAvatar(user?.username);

  console.log('Final profile image URL being used:', profileImageUrl);

  // Format membership date
  const formatMemberSince = () => {
    // Kullanıcıdan gelen createdAt değeri varsa kullan
    if (user?.createdAt) {
      return user.createdAt;
    }

    // Yoksa varsayılan bir değer göster
    return 'unknown';
  };

  const renderProfileImage = () => {
    if (imageLoadError) {
      // Resim yüklenemezse, fallback olarak Icons.profile kullan
      return (
        <Image
          source={Icons.profile}
          style={styles.profileImage}
          resizeMode="contain"
        />
      );
    }

    return (
      <Image
        source={{uri: profileImageUrl}}
        style={styles.profileImage}
        defaultSource={Icons.profile}
        resizeMode="cover"
        onError={e => {
          console.log('Error loading profile image:', e.nativeEvent.error);
          console.log('Failed URL:', profileImageUrl);
          setImageLoadError(true);
        }}
      />
    );
  };

  return (
    <View style={styles.profileHeader}>
      <View style={styles.userInfoContainer}>
        <View style={styles.profileImageContainer}>{renderProfileImage()}</View>
        <View>
          <Text style={styles.userName}>{user?.username || 'User'}</Text>
          <Text style={styles.userEmail}>{user?.email || ''}</Text>
          <Text style={styles.memberSince}>
            Member since {formatMemberSince()}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;
