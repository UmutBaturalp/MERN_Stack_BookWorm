import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../config/colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: windowWidth * 0.04,
    paddingVertical: windowWidth * 0.03,
  },
  appName: {
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  tagline: {
    fontSize: windowWidth * 0.035,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
});

export default styles;
