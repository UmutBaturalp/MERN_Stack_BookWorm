import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../config/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  profileHeader: {
    backgroundColor: COLORS.white,
    padding: windowWidth * 0.04,
    marginBottom: windowHeight * 0.02,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: windowHeight * 0.02,
  },
  profileImageContainer: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    borderRadius: (windowWidth * 0.15) / 2,
    backgroundColor: '#E1E1E1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: windowWidth * 0.04,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: (windowWidth * 0.15) / 2,
  },
  userName: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: windowHeight * 0.005,
  },
  userEmail: {
    fontSize: windowWidth * 0.035,
    color: COLORS.textSecondary,
    marginBottom: windowHeight * 0.005,
  },
  memberSince: {
    fontSize: windowWidth * 0.03,
    color: COLORS.textSecondary,
  },
  logoutButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: windowHeight * 0.015,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: COLORS.white,
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
  },
});

export default styles;
