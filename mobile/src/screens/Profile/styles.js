import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import COLORS from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
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
  },
  profileImage: {
    width: windowWidth * 0.13,
    height: windowWidth * 0.13,
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
  recommendationsContainer: {
    flex: 1,
    paddingHorizontal: windowWidth * 0.04,
  },
  recommendationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: windowHeight * 0.02,
  },
  recommendationsTitle: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  recommendationsCount: {
    fontSize: windowWidth * 0.035,
    color: COLORS.textSecondary,
  },
  recommendationsList: {
    paddingBottom: windowHeight * 0.1,
  },
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
  // Empty state styles
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
