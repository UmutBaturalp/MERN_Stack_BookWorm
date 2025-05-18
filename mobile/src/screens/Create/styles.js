import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import COLORS from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  keyboardAvoidView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: windowHeight * 0.1,
  },
  headerContainer: {
    paddingVertical: windowHeight * 0.03,
    paddingHorizontal: windowWidth * 0.04,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: windowHeight * 0.01,
  },
  headerSubtitle: {
    fontSize: windowWidth * 0.035,
    color: COLORS.textSecondary,
  },
  formContainer: {
    paddingHorizontal: windowWidth * 0.04,
  },
  inputGroup: {
    marginBottom: windowHeight * 0.02,
  },
  label: {
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
    color: COLORS.textPrimary,
    marginBottom: windowHeight * 0.01,
  },
  inputContainer: {
    backgroundColor: COLORS.inputBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: windowWidth * 0.03,
  },
  input: {
    height: windowHeight * 0.055,
    color: COLORS.textDark,
    fontSize: windowWidth * 0.04,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starFilled: {
    color: '#FFD700',
    fontSize: windowWidth * 0.07,
    marginRight: windowWidth * 0.02,
  },
  starEmpty: {
    color: '#D3D3D3',
    fontSize: windowWidth * 0.07,
    marginRight: windowWidth * 0.02,
  },
  imagePickerContainer: {
    width: '100%',
    height: windowHeight * 0.2,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    tintColor: COLORS.textSecondary,
    marginBottom: windowHeight * 0.01,
  },
  imagePlaceholderText: {
    color: COLORS.textSecondary,
    fontSize: windowWidth * 0.035,
  },
  textAreaContainer: {
    backgroundColor: COLORS.inputBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: windowWidth * 0.03,
    paddingTop: windowHeight * 0.01,
  },
  textArea: {
    height: windowHeight * 0.12,
    color: COLORS.textDark,
    fontSize: windowWidth * 0.04,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingVertical: windowHeight * 0.018,
    alignItems: 'center',
    marginTop: windowHeight * 0.02,
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: windowWidth * 0.045,
    fontWeight: '600',
  },
});

export default styles;
