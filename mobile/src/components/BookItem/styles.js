import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../config/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  bookCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: windowWidth * 0.04,
    marginBottom: windowHeight * 0.02,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
    fontSize: windowWidth * 0.035,
    fontWeight: '600',
    color: COLORS.textDark,
  },
  bookImage: {
    width: '100%',
    height: windowWidth * 0.5,
    borderRadius: 8,
    marginBottom: windowHeight * 0.015,
  },
  bookTitle: {
    fontSize: windowWidth * 0.045,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: windowHeight * 0.01,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: windowHeight * 0.01,
  },
  starFilled: {
    color: '#FFD700',
    fontSize: windowWidth * 0.04,
    marginRight: 2,
  },
  starEmpty: {
    color: '#D3D3D3',
    fontSize: windowWidth * 0.04,
    marginRight: 2,
  },
  bookDescription: {
    fontSize: windowWidth * 0.035,
    color: COLORS.textSecondary,
    marginBottom: windowHeight * 0.01,
    lineHeight: windowHeight * 0.022,
  },
  bookDate: {
    fontSize: windowWidth * 0.03,
    color: COLORS.textTertiary,
  },
});

export default styles;
