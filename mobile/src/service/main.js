import {
  saveAuthToken,
  getAuthToken,
  clearUserAuth,
} from '../utils/storageUtils';

// Token işlemleri
export const saveToken = saveAuthToken;
export const getToken = getAuthToken;
export const removeToken = async () => {
  return await clearUserAuth();
};

// Kullanıcı giriş yapmış mı kontrolü
export const isAuthenticated = async () => {
  const token = await getToken();
  return token !== null;
};

// Kimlik doğrulama bilgilerini içeren header'ları oluştur
export const getAuthHeaders = async () => {
  const token = await getToken();
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};

// GET isteği
export const apiGet = async url => {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Bir hata oluştu');
    }

    return data;
  } catch (error) {
    console.error(`GET isteği başarısız (${url}):`, error);
    throw error;
  }
};

// POST isteği
export const apiPost = async (url, body, includeAuth = true) => {
  try {
    let headers = {
      'Content-Type': 'application/json',
    };

    if (includeAuth) {
      headers = await getAuthHeaders();
    }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    // Response'ı text olarak al ve sonra JSON'a çevir
    const responseText = await response.text();
    let data;

    try {
      data = JSON.parse(responseText);
    } catch (error) {
      throw new Error(
        'Sunucu geçersiz JSON döndürdü: ' + responseText.substring(0, 100),
      );
    }

    if (!response.ok) {
      throw new Error(data.message || 'Bir hata oluştu');
    }

    return data;
  } catch (error) {
    // Beklenen kimlik doğrulama hatalarını loglama
    const isAuthEndpoint = url.includes('/api/auth/');
    const isExpectedAuthError =
      isAuthEndpoint &&
      (error.message === 'User not found' ||
        error.message === 'Invalid credentials' ||
        error.message === 'email already exists' ||
        error.message === 'username already exists' ||
        error.message === 'All fields are required' ||
        error.message === 'Password must be at least 6 characters' ||
        error.message === 'Username must be at least 3 characters');

    if (!isExpectedAuthError) {
      console.error(`POST isteği başarısız (${url}):`, error);
    }
    throw error;
  }
};

// DELETE isteği
export const apiDelete = async url => {
  try {
    const headers = await getAuthHeaders();
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Bir hata oluştu');
    }

    return data;
  } catch (error) {
    console.error(`DELETE isteği başarısız (${url}):`, error);
    throw error;
  }
};
