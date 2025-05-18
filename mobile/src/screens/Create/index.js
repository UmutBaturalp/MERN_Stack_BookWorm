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
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import COLORS from '../../config/colors';
import Icons from '../../assets/Icons';

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);

  const handleRating = value => {
    setRating(value);
  };

  const handleSubmit = () => {
    // Here you would connect to Redux to post the recommendation
    console.log({title, description, rating, image});
  };

  const selectImage = () => {
    // In a real app, this would open image picker
    setImage(Icons.book);
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
                  value={description}
                  onChangeText={setDescription}
                />
              </View>
            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Post Recommendation</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Create;
