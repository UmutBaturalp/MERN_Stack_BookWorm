// Import Platform at the top
import {Platform} from 'react-native';

// Cihaz tipine göre temel URL'i belirle
export const BASE_URL = Platform.select({
  android: 'http://10.0.2.2:3000', // Android emülatör için
  ios: 'http://localhost:3000', // iOS için
});

// Auth Endpoints
export const AUTH_ENDPOINTS = {
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
};

// Books Endpoints
export const BOOKS_ENDPOINTS = {
  GET_ALL: '/api/books',
  CREATE: '/api/books',
  DELETE: '/api/books', // Will be appended with book ID
  GET_USER_BOOKS: '/api/books/user',
};

// API URL'leri
export const API_URLS = {
  AUTH: {
    LOGIN: `${BASE_URL}/api/auth/login`,
    REGISTER: `${BASE_URL}/api/auth/register`,
  },
  BOOKS: {
    GET_ALL: `${BASE_URL}/api/books`,
    CREATE: `${BASE_URL}/api/books`,
    DELETE: bookId => `${BASE_URL}/api/books/${bookId}`,
    GET_USER_BOOKS: `${BASE_URL}/api/books/user`,
  },
};
