import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  signupStart,
  signupSuccess,
  signupFailure,
  updateUserProfile,
} from '../slices/authSlice';
import {authAPI} from '../../service/api';
import {saveUserData} from '../../utils/storageUtils';
import {ensureValidImageUrl} from '../../utils/imageHelper';

// Login user with API service
export const loginUser = (email, password) => async dispatch => {
  try {
    dispatch(loginStart());

    const response = await authAPI.login(email, password);

    // Transform response to match our Redux state format
    const user = {
      id: response.user.id,
      username: response.user.username,
      email: response.user.email,
      profileImage: ensureValidImageUrl(response.user.profileImage),
      createdAt: response.user.createdAt || formatDate(new Date()),
    };

    console.log('Login successful, updating Redux state with user data:', user);
    dispatch(loginSuccess(user));
    return user;
  } catch (error) {
    // Don't log expected auth errors to avoid red console errors
    const isExpectedAuthError =
      error.message === 'User not found' ||
      error.message === 'Invalid credentials' ||
      error.message === 'All fields are required';

    // Update Redux state with the error
    dispatch(loginFailure(error.message));
    throw error;
  }
};

// Register new user with API service
export const signupUser = (username, email, password) => async dispatch => {
  try {
    dispatch(signupStart());

    const response = await authAPI.register(username, email, password);

    // Transform response to match our Redux state format
    const user = {
      id: response.user.id,
      username: response.user.username,
      email: response.user.email,
      profileImage: ensureValidImageUrl(response.user.profileImage),
      createdAt: response.user.createdAt || formatDate(new Date()),
    };

    console.log(
      'Registration successful, updating Redux state with user data:',
      user,
    );
    dispatch(signupSuccess(user));
    return user;
  } catch (error) {
    // Don't log expected auth errors to avoid red console errors
    const isExpectedAuthError =
      error.message === 'email already exists' ||
      error.message === 'username already exists' ||
      error.message === 'All fields are required' ||
      error.message === 'Password must be at least 6 characters' ||
      error.message === 'Username must be at least 3 characters';

    // We still need to update the redux state
    dispatch(signupFailure(error.message));

    throw error;
  }
};

// Logout user
export const logoutUser = () => async dispatch => {
  try {
    console.log('Logging out user');
    await authAPI.logout();
    dispatch(logout());
    return true;
  } catch (error) {
    console.error('Logout error:', error);
    return false;
  }
};

// Update user profile
export const updateUserProfileData = userData => async dispatch => {
  try {
    // Here you would call an API to update the user profile
    // For now, we'll just update the local state
    console.log('Updating user profile data:', userData);

    // Make sure the profile image is valid
    if (userData.profileImage) {
      userData.profileImage = ensureValidImageUrl(userData.profileImage);
    }

    dispatch(updateUserProfile(userData));

    // Also update the user data in AsyncStorage
    await saveUserData({...userData});

    return true;
  } catch (error) {
    console.error('Update profile error:', error);
    return false;
  }
};

// Tarihi "MM/DD/YYYY" formatında döndüren yardımcı fonksiyon
const formatDate = date => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};
