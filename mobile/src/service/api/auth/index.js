import {API_URLS} from '../../NetworkUrl';
import {apiPost} from '../../main';
import {saveUserAuth, clearUserAuth} from '../../../utils/storageUtils';
import {ensureValidImageUrl} from '../../../utils/imageHelper';

/**
 * Register a new user
 * @param {string} username - User's username (min 3 characters)
 * @param {string} email - User's email address
 * @param {string} password - User's password (min 6 characters)
 * @returns {Promise<Object>} User data and token
 */
export const register = async (username, email, password) => {
  try {
    const userData = {username, email, password};
    const response = await apiPost(API_URLS.AUTH.REGISTER, userData, false);

    if (response.token && response.user) {
      // Ensure profile image is valid
      if (response.user.profileImage) {
        response.user.profileImage = ensureValidImageUrl(
          response.user.profileImage,
        );
      }

      // Save both token and user data to AsyncStorage
      await saveUserAuth(response.token, response.user);
    }

    return response;
  } catch (error) {
    // Don't log expected auth errors to console to avoid red error messages
    const isExpectedAuthError =
      error.message === 'email already exists' ||
      error.message === 'username already exists';

    if (!isExpectedAuthError) {
      console.error('Kayıt hatası:', error);
    }

    throw error;
  }
};

/**
 * Login a user
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise<Object>} User data and token
 */
export const login = async (email, password) => {
  try {
    const userData = {email, password};
    const response = await apiPost(API_URLS.AUTH.LOGIN, userData, false);

    // Debug response data
    console.log('Login response received:', {
      hasToken: !!response.token,
      user: response.user
        ? {
            id: response.user.id,
            username: response.user.username,
            profileImage: response.user.profileImage,
          }
        : null,
    });

    if (response.token && response.user) {
      // Ensure profile image is valid
      if (response.user.profileImage) {
        response.user.profileImage = ensureValidImageUrl(
          response.user.profileImage,
        );
      }

      // Save both token and user data to AsyncStorage
      await saveUserAuth(response.token, response.user);
    }

    return response;
  } catch (error) {
    // Don't log expected auth errors to console
    if (
      error.message !== 'User not found' &&
      error.message !== 'Invalid credentials'
    ) {
      console.error('Giriş hatası:', error);
    }
    throw error;
  }
};

/**
 * Logout the current user
 * @returns {Promise<boolean>} Success status
 */
export const logout = async () => {
  try {
    return await clearUserAuth();
  } catch (error) {
    console.error('Çıkış hatası:', error);
    throw error;
  }
};
