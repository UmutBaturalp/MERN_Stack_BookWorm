import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {styles} from './styles';
import Icons from '../../assets/Icons';
import COLORS from '../../config/colors';
import {loginUser} from '../../redux/actions/authActions';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      setIsLoading(true);
      await dispatch(loginUser(email, password));
      // Success is handled by Redux - navigation will happen automatically
    } catch (error) {
      // Handle specific error messages with user-friendly alerts
      let errorTitle = 'Login Error';
      let errorMessage =
        error.message || 'Login failed. Please check your credentials.';

      // Map known error messages to more user-friendly ones
      if (error.message === 'User not found') {
        errorMessage =
          'No account found with this email address. Please check your email or sign up.';
      } else if (error.message === 'Invalid credentials') {
        errorMessage = 'Incorrect password. Please try again.';
      }

      Alert.alert(errorTitle, errorMessage, [{text: 'OK'}], {cancelable: true});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.illustrationContainer}>
            <Image
              source={Icons.book}
              style={styles.illustration}
              resizeMode="contain"
            />
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
                {
                  //icon
                }
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor={COLORS.placeholderText}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                {
                  //icon
                }
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor={COLORS.placeholderText}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}>
                  {
                    //icon
                  }
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.loginButton, isLoading && {opacity: 0.7}]}
              onPress={handleLogin}
              disabled={isLoading}>
              <Text style={styles.loginButtonText}>
                {isLoading ? 'Processing...' : 'Login'}
              </Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation?.navigate('SignUp')}>
                <Text style={styles.signupLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
