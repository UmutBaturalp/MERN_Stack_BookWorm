import {createSlice} from '@reduxjs/toolkit';
import {getFallbackAvatar} from '../../utils/imageHelper';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  lastUpdated: null,
};

// Helper function to ensure user has a profile image
const ensureUserHasProfileImage = userData => {
  if (!userData) return null;

  const user = {...userData};

  if (!user.profileImage) {
    console.log('Adding default profile image as none was provided');
    // Use the user's name as the seed for the avatar
    user.profileImage = getFallbackAvatar(user.name || user.username);
  }

  return user;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: state => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = ensureUserHasProfileImage(action.payload);
      state.lastUpdated = Date.now();

      console.log('Redux state updated with user:', JSON.stringify(state.user));
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.user = null;
      state.lastUpdated = Date.now();
    },
    signupStart: state => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = ensureUserHasProfileImage(action.payload);
      state.lastUpdated = Date.now();

      console.log(
        'Redux state updated with user after signup:',
        JSON.stringify(state.user),
      );
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserProfile: (state, action) => {
      if (state.user) {
        state.user = ensureUserHasProfileImage({
          ...state.user,
          ...action.payload,
        });
        state.lastUpdated = Date.now();

        console.log(
          'User profile updated in Redux:',
          JSON.stringify(state.user),
        );
      }
    },
    // Method to handle refreshing user data from storage
    refreshUserData: (state, action) => {
      if (action.payload) {
        state.user = ensureUserHasProfileImage(action.payload);
        state.isAuthenticated = true;
        state.lastUpdated = Date.now();

        console.log(
          'User data refreshed from storage:',
          JSON.stringify(state.user),
        );
      }
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  signupStart,
  signupSuccess,
  signupFailure,
  updateUserProfile,
  refreshUserData,
} = authSlice.actions;

export default authSlice.reducer;
