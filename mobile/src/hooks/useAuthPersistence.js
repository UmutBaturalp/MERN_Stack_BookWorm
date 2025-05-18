import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {refreshUserData} from '../redux/slices/authSlice';
import {getAuthToken, getUserData} from '../utils/storageUtils';

/**
 * Custom hook to load authenticated user from AsyncStorage
 * and update Redux state on app initialization
 */
const useAuthPersistence = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUserFromStorage = async () => {
      try {
        setIsLoading(true);

        // Check if there's a valid auth token
        const token = await getAuthToken();

        if (!token) {
          console.log('No auth token found in storage');
          setIsLoading(false);
          return;
        }

        // Get user data from storage
        const userData = await getUserData();

        if (userData) {
          console.log('User data found in storage, refreshing Redux state');
          // Update Redux state with the user data from storage
          dispatch(refreshUserData(userData));
        } else {
          console.log('Auth token found but no user data in storage');
        }
      } catch (error) {
        console.error('Error loading auth data from storage:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserFromStorage();
  }, [dispatch]);

  return {isLoading};
};

export default useAuthPersistence;
