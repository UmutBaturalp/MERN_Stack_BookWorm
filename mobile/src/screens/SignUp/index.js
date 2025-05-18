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
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {styles} from './styles';
import Icons from '../../assets/Icons';
import COLORS from '../../config/colors';
import {signupUser} from '../../redux/actions/authActions';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    dispatch(signupUser(fullName, email, password));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.headerContainer}>
            <Image
              source={Icons.bookworm}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.appName}>BookWorm</Text>
            <Text style={styles.tagline}>Share your favorite reads</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <View style={styles.inputContainer}>
                {
                  //icon
                }
                <TextInput
                  style={styles.input}
                  placeholder="John Doe"
                  placeholderTextColor={COLORS.placeholderText}
                  value={fullName}
                  onChangeText={setFullName}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
                {
                  //icon
                }
                <TextInput
                  style={styles.input}
                  placeholder="johndoe@gmail.com"
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
                  placeholder="******"
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
              style={styles.signUpButton}
              onPress={handleSignUp}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation?.navigate('Login')}>
                <Text style={styles.loginLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
