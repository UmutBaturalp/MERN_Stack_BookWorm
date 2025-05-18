import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  signupStart,
  signupSuccess,
  signupFailure,
} from '../slices/authSlice';

// Mock function for login - Replace with actual API calls
export const loginUser = (email, password) => async dispatch => {
  try {
    dispatch(loginStart());

    // Simulate API call
    // In a real app, this would be a fetch or axios call to your backend
    setTimeout(() => {
      // Mock successful login
      const user = {
        id: '1',
        name: 'John Doe',
        email: email,
      };

      dispatch(loginSuccess(user));
    }, 1000);
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

// Mock function for signup - Replace with actual API calls
export const signupUser = (fullName, email, password) => async dispatch => {
  try {
    dispatch(signupStart());

    // Simulate API call
    // In a real app, this would be a fetch or axios call to your backend
    setTimeout(() => {
      // Mock successful signup
      const user = {
        id: '1',
        name: fullName,
        email: email,
      };

      dispatch(signupSuccess(user));
    }, 1000);
  } catch (error) {
    dispatch(signupFailure(error.message));
  }
};

export const logoutUser = () => dispatch => {
  dispatch(logout());
};
