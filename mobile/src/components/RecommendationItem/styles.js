import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../config/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  recommendationItem: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: windowWidth * 0.03,
    marginBottom: windowHeight * 0.015,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  bookThumbnail: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    borderRadius: 4,
    marginRight: windowWidth * 0.03,
    backgroundColor: '#E1E1E1',
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: windowHeight * 0.005,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: windowHeight * 0.005,
  },
  starFilled: {
    color: '#FFD700',
    fontSize: windowWidth * 0.035,
    marginRight: 1,
  },
  starEmpty: {
    color: '#D3D3D3',
    fontSize: windowWidth * 0.035,
    marginRight: 1,
  },
  bookDescription: {
    fontSize: windowWidth * 0.03,
    color: COLORS.textSecondary,
    marginBottom: windowHeight * 0.005,
  },
  bookDate: {
    fontSize: windowWidth * 0.025,
    color: COLORS.textSecondary,
  },
  deleteButton: {
    padding: windowWidth * 0.01,
  },
  deleteIcon: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
    tintColor: COLORS.textSecondary,
    transform: [{rotate: '45deg'}],
  },
});

export default styles;
