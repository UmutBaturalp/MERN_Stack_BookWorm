import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import COLORS from '../../config/colors';
import Icons from '../../assets/Icons';
import {booksAPI} from '../../service/api';
import {launchImageLibrary} from 'react-native-image-picker';
import {CommonActions} from '@react-navigation/native';

const Create = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRating = value => {
    setRating(value);
  };

  const refreshHomeAndNavigate = () => {
    // Ana sayfaya geri dön ve yenilenecek olan parametre ile birlikte
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Home',
            params: {
              refresh: true,
              timestamp: Date.now(),
            },
          },
        ],
      }),
    );
  };

  const handleSubmit = async () => {
    if (!title || !caption || !rating || !image) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      setIsLoading(true);
      await booksAPI.createBook(title, caption, imageBase64, rating);
      Alert.alert('Success', 'Book recommendation posted successfully', [
        {
          text: 'OK',
          onPress: () => {
            // Clear form data after successful submission
            setTitle('');
            setCaption('');
            setRating(0);
            setImage(null);
            setImageBase64('');

            // Yenileme ile ana sayfaya geri dön
            refreshHomeAndNavigate();
          },
        },
      ]);
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to post recommendation');
    } finally {
      setIsLoading(false);
    }
  };

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'BookWorm Photo Permission',
            message: 'BookWorm needs access to your photos to add book covers',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        // Android 13+ requires a different permission
        if (parseInt(Platform.Version, 10) >= 33) {
          const mediaGranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
            {
              title: 'BookWorm Photo Permission',
              message:
                'BookWorm needs access to your photos to add book covers',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );

          return (
            granted === PermissionsAndroid.RESULTS.GRANTED ||
            mediaGranted === PermissionsAndroid.RESULTS.GRANTED
          );
        }

        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      // iOS handles permissions through Info.plist
      return true;
    }
  };

  const selectImage = async () => {
    try {
      const hasPermission = await requestPermission();

      if (!hasPermission) {
        Alert.alert(
          'Permission Denied',
          'BookWorm needs permission to access your photos. Please enable it in your device settings.',
        );
        return;
      }

      const options = {
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 600,
        maxWidth: 600,
        quality: 0.5,
        cameraType: 'back',
      };

      const result = await launchImageLibrary(options);

      console.log('Image picker result:', result);

      if (result.didCancel) {
        console.log('User cancelled image picker');
        return;
      }

      if (result.errorCode) {
        console.log('ImagePicker Error: ', result.errorMessage);
        Alert.alert('Error', `Failed to select image: ${result.errorMessage}`);
        return;
      }

      if (result.assets && result.assets.length > 0) {
        const selectedAsset = result.assets[0];
        console.log('Selected asset:', selectedAsset);

        if (!selectedAsset.uri || !selectedAsset.base64) {
          Alert.alert(
            'Error',
            'Could not get image data. Please try another image.',
          );
          return;
        }

        // Get file extension from URI or default to jpeg
        const uriParts = selectedAsset.uri.split('.');
        const fileType = uriParts[uriParts.length - 1];

        // IMPORTANT: Always use 'image/jpeg' for jpg files (not 'image/jpg')
        // Cloudinary and most systems expect 'image/jpeg' as the standard MIME type
        let imageType = 'image/jpeg';
        if (
          fileType &&
          fileType.toLowerCase() !== 'jpg' &&
          fileType.toLowerCase() !== 'jpeg'
        ) {
          imageType = `image/${fileType.toLowerCase()}`;
        }

        // Create proper data URL with correct MIME type
        const imageDataUrl = `data:${imageType};base64,${selectedAsset.base64}`;

        // Add detailed diagnostic logging
        console.log('-------- IMAGE DIAGNOSTICS --------');
        console.log('Image URI:', selectedAsset.uri);
        console.log('File type detected:', fileType);
        console.log('MIME type used:', imageType);
        console.log('Image size (bytes):', selectedAsset.fileSize);
        console.log(
          'Image dimensions:',
          `${selectedAsset.width}x${selectedAsset.height}`,
        );
        console.log('Base64 string length:', selectedAsset.base64?.length || 0);
        console.log('Data URL format:', imageDataUrl.substring(0, 50) + '...');
        console.log('----------------------------------');

        setImage({uri: selectedAsset.uri});
        setImageBase64(imageDataUrl);
      } else {
        Alert.alert('Error', 'No image selected');
      }
    } catch (error) {
      console.error('Image selection error:', error);
      Alert.alert('Error', `Failed to select image: ${error.message}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidView}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Add Book Recommendation</Text>
            <Text style={styles.headerSubtitle}>
              Share your favorite reads with others
            </Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Book Title</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter book title"
                  placeholderTextColor={COLORS.placeholderText}
                  value={title}
                  onChangeText={setTitle}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Your Rating</Text>
              <View style={styles.ratingContainer}>
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleRating(index + 1)}>
                      <Text
                        style={
                          index < rating ? styles.starFilled : styles.starEmpty
                        }>
                        ★
                      </Text>
                    </TouchableOpacity>
                  ))}
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Book Image</Text>
              <TouchableOpacity
                style={styles.imagePickerContainer}
                onPress={selectImage}>
                {image ? (
                  <Image
                    source={image}
                    style={styles.selectedImage}
                    resizeMode="cover"
                  />
                ) : (
                  <View style={styles.imagePlaceholder}>
                    <Image
                      source={Icons.add}
                      style={styles.addIcon}
                      resizeMode="contain"
                    />
                    <Text style={styles.imagePlaceholderText}>
                      Tap to select image
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Caption</Text>
              <View style={styles.textAreaContainer}>
                <TextInput
                  style={styles.textArea}
                  placeholder="Write your review or thoughts about this book..."
                  placeholderTextColor={COLORS.placeholderText}
                  multiline
                  numberOfLines={4}
                  value={caption}
                  onChangeText={setCaption}
                />
              </View>
            </View>

            <TouchableOpacity
              style={[styles.submitButton, isLoading && {opacity: 0.7}]}
              onPress={handleSubmit}
              disabled={isLoading}>
              <Text style={styles.submitButtonText}>
                {isLoading ? 'Processing...' : 'Post Recommendation'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Create;
