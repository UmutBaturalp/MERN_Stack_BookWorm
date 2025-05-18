// Export NetworkUrl
export * from './NetworkUrl';

// Export main service utilities
export {
  saveToken,
  getToken,
  removeToken,
  isAuthenticated,
  getAuthHeaders,
  apiGet,
  apiPost,
  apiDelete,
} from './main';

// Export API services
export * from './api';

// Direct exports for convenience
import {authAPI} from './api';
import {booksAPI} from './api';

// Auth API shortcuts
export const login = authAPI.login;
export const register = authAPI.register;
export const logout = authAPI.logout;

// Books API shortcuts
export const getAllBooks = booksAPI.getAllBooks;
export const getUserBooks = booksAPI.getUserBooks;
export const createBook = booksAPI.createBook;
export const deleteBook = booksAPI.deleteBook;
