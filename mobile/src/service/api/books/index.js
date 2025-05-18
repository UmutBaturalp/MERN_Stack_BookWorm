import {API_URLS} from '../../NetworkUrl';
import {apiGet, apiPost, apiDelete} from '../../main';

/**
 * Get all books with pagination
 * @param {number} page - Page number (default: 1)
 * @param {number} limit - Results per page (default: 10)
 * @returns {Promise<Object>} Books data with pagination info
 */
export const getAllBooks = async (page = 1, limit = 10) => {
  try {
    const url = `${API_URLS.BOOKS.GET_ALL}?page=${page}&limit=${limit}`;
    return await apiGet(url);
  } catch (error) {
    console.error('Kitapları getirme hatası:', error);
    throw error;
  }
};

/**
 * Get books created by the current user
 * @returns {Promise<Array>} Array of user's books
 */
export const getUserBooks = async () => {
  try {
    return await apiGet(API_URLS.BOOKS.GET_USER_BOOKS);
  } catch (error) {
    console.error('Kullanıcı kitaplarını getirme hatası:', error);
    throw error;
  }
};

/**
 * Create a new book recommendation
 * @param {string} title - Book title
 * @param {string} caption - Book review/caption
 * @param {string} image - Base64 encoded image
 * @param {number} rating - Book rating (1-5)
 * @returns {Promise<Object>} Created book data
 */
export const createBook = async (title, caption, image, rating) => {
  try {
    const bookData = {
      title,
      caption,
      image,
      rating,
    };

    return await apiPost(API_URLS.BOOKS.CREATE, bookData);
  } catch (error) {
    console.error('Kitap oluşturma hatası:', error);
    throw error;
  }
};

/**
 * Delete a book by ID
 * @param {string} bookId - ID of book to delete
 * @returns {Promise<Object>} Success message
 */
export const deleteBook = async bookId => {
  try {
    const url = API_URLS.BOOKS.DELETE(bookId);
    return await apiDelete(url);
  } catch (error) {
    console.error(`${bookId} ID'li kitabı silme hatası:`, error);
    throw error;
  }
};
