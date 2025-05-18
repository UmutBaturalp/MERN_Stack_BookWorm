import AsyncStorage from '@react-native-async-storage/async-storage';

// Storage anahtarları
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'bookworm_auth_token',
  USER_DATA: 'bookworm_user_data',
  APP_SETTINGS: 'bookworm_app_settings',
};

// AsyncStorage'a veri kaydet
export const storeData = async (key, value) => {
  try {
    const jsonValue = typeof value === 'string' ? value : JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (error) {
    console.error(`Veri kaydetme hatası (${key}):`, error);
    return false;
  }
};

// AsyncStorage'dan veri al
export const getData = async (key, parseJson = true) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value === null) return null;
    return parseJson ? JSON.parse(value) : value;
  } catch (error) {
    console.error(`Veri alma hatası (${key}):`, error);
    return null;
  }
};

// AsyncStorage'dan veri sil
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Veri silme hatası (${key}):`, error);
    return false;
  }
};

// Tüm uygulama verilerini temizle
export const clearAppData = async () => {
  try {
    const keys = Object.values(STORAGE_KEYS);
    await AsyncStorage.multiRemove(keys);
    return true;
  } catch (error) {
    console.error('Tüm verileri temizleme hatası:', error);
    return false;
  }
};

// Kimlik doğrulama (auth) işlemleri
export const saveAuthToken = (token) => storeData(STORAGE_KEYS.AUTH_TOKEN, token);
export const getAuthToken = () => getData(STORAGE_KEYS.AUTH_TOKEN, false);
export const removeAuthToken = () => removeData(STORAGE_KEYS.AUTH_TOKEN);

// Kullanıcı verileri işlemleri
export const saveUserData = (userData) => storeData(STORAGE_KEYS.USER_DATA, userData);
export const getUserData = () => getData(STORAGE_KEYS.USER_DATA);
export const removeUserData = () => removeData(STORAGE_KEYS.USER_DATA);

// Birleşik giriş/çıkış işlemleri
export const saveUserAuth = async (token, userData) => {
  const tokenSaved = await saveAuthToken(token);
  const userDataSaved = await saveUserData(userData);
  return tokenSaved && userDataSaved;
};

export const clearUserAuth = async () => {
  const tokenRemoved = await removeAuthToken();
  const userDataRemoved = await removeUserData();
  return tokenRemoved && userDataRemoved;
};
