import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import COLORS from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: windowHeight * 0.05,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: windowHeight * 0.04,
    marginBottom: windowHeight * 0.02,
  },
  logo: {
    width: windowWidth * 0.15,
    height: windowHeight * 0.05,
    marginBottom: windowHeight * 0.01,
  },
  appName: {
    fontSize: windowHeight * 0.035,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: windowHeight * 0.005,
  },
  tagline: {
    fontSize: windowHeight * 0.018,
    color: COLORS.textSecondary,
    marginBottom: windowHeight * 0.02,
  },
  formContainer: {
    paddingHorizontal: windowWidth * 0.07,
    backgroundColor: COLORS.white,
    marginHorizontal: windowWidth * 0.05,
    borderRadius: 15,
    paddingVertical: windowHeight * 0.03,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputGroup: {
    marginBottom: windowHeight * 0.02,
  },
  label: {
    fontSize: windowHeight * 0.02,
    fontWeight: '500',
    marginBottom: windowHeight * 0.01,
    color: COLORS.textDark,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    height: windowHeight * 0.06,
    paddingHorizontal: windowWidth * 0.03,
    backgroundColor: COLORS.inputBackground,
  },
  inputIcon: {
    marginRight: windowWidth * 0.02,
    color: COLORS.primary,
  },
  input: {
    flex: 1,
    height: '100%',
    color: COLORS.textPrimary,
    fontSize: windowHeight * 0.018,
  },
  eyeIcon: {
    padding: windowWidth * 0.01,
  },
  signUpButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    height: windowHeight * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight * 0.03,
  },
  signUpButtonText: {
    color: COLORS.white,
    fontSize: windowHeight * 0.02,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight * 0.025,
  },
  loginText: {
    color: COLORS.textSecondary,
    fontSize: windowHeight * 0.016,
  },
  loginLink: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: windowHeight * 0.016,
    marginLeft: windowWidth * 0.01,
  },
});
