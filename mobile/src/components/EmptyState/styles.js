import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../config/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.1,
    backgroundColor: COLORS.white,
    marginVertical: windowHeight * 0.02,
    borderRadius: 16,
    paddingVertical: windowHeight * 0.05,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emptyStateImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    marginBottom: windowHeight * 0.03,
    tintColor: COLORS.primary,
    opacity: 0.7,
  },
  emptyTitle: {
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: windowHeight * 0.01,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: windowWidth * 0.04,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: windowHeight * 0.03,
    lineHeight: windowHeight * 0.025,
  },
  emptyRefreshButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: windowHeight * 0.015,
    paddingHorizontal: windowWidth * 0.08,
    borderRadius: 8,
  },
  emptyRefreshButtonText: {
    color: COLORS.white,
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
  },
  emptyActionButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: windowHeight * 0.015,
    paddingHorizontal: windowWidth * 0.08,
    borderRadius: 8,
  },
  emptyActionButtonText: {
    color: COLORS.white,
    fontSize: windowWidth * 0.045,
    fontWeight: '600',
  },
});

export default styles;
