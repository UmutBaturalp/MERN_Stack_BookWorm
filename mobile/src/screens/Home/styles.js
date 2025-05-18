import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import COLORS from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingVertical: windowHeight * 0.02,
    paddingHorizontal: windowWidth * 0.04,
    alignItems: 'center',
  },
  appName: {
    fontSize: windowWidth * 0.07,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: windowHeight * 0.005,
  },
  tagline: {
    fontSize: windowWidth * 0.04,
    color: COLORS.textSecondary,
  },
  listContainer: {
    paddingHorizontal: windowWidth * 0.04,
    paddingBottom: windowHeight * 0.1,
  },
  bookCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: windowWidth * 0.04,
    marginVertical: windowHeight * 0.01,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: windowHeight * 0.01,
  },
  userAvatar: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
    borderRadius: (windowWidth * 0.08) / 2,
    marginRight: windowWidth * 0.02,
  },
  userName: {
    fontSize: windowWidth * 0.04,
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
  bookImage: {
    width: '100%',
    height: windowHeight * 0.2,
    borderRadius: 8,
    marginBottom: windowHeight * 0.01,
  },
  bookTitle: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: windowHeight * 0.005,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: windowHeight * 0.01,
  },
  starFilled: {
    color: '#FFD700',
    fontSize: windowWidth * 0.05,
    marginRight: 2,
  },
  starEmpty: {
    color: '#D3D3D3',
    fontSize: windowWidth * 0.05,
    marginRight: 2,
  },
  bookDescription: {
    fontSize: windowWidth * 0.035,
    color: COLORS.textSecondary,
    marginBottom: windowHeight * 0.01,
  },
  bookDate: {
    fontSize: windowWidth * 0.03,
    color: COLORS.textSecondary,
    alignSelf: 'flex-end',
  },
});
