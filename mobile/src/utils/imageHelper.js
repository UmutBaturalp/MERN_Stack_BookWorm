import {BASE_URL} from '../service/NetworkUrl';

/**
 * Görüntü URL'lerini işleyen yardımcı fonksiyonlar
 */

/**
 * URL'nin Image bileşeni için geçerli olmasını sağlar
 */
export const ensureValidImageUrl = url => {
  // URL yoksa varsayılan avatar döndür
  if (!url) {
    return getFallbackAvatar();
  }

  // URL bir string değilse olduğu gibi döndür
  if (typeof url !== 'string') {
    return url;
  }

  // DiceBear avatar URL'i ise doğrudan PNG formatını kullan
  if (url.includes('dicebear.com')) {
    const username = url.split('seed=')[1]?.split('&')[0] || 'default';
    return `https://api.dicebear.com/7.x/bottts/png?seed=${username}&size=200`;
  }

  // Tam URL ise olduğu gibi döndür
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // Göreceli URL ise backend URL'i ile birleştir
  if (url.startsWith('/')) {
    return `${BASE_URL}${url}`;
  }

  // Base64 veri URL'i ise olduğu gibi döndür
  if (url.startsWith('data:')) {
    return url;
  }

  // Diğer durumlarda orijinal URL'i döndür
  return url;
};

/**
 * Kullanıcı adına göre varsayılan avatar oluşturur
 */
export const getFallbackAvatar = username => {
  const seed = username || 'default';
  return `https://api.dicebear.com/7.x/bottts/png?seed=${encodeURIComponent(
    seed,
  )}&size=200`;
};

/**
 * Resmi belirtilen genişlik ve yüksekliğe göre yeniden boyutlandırır
 */
export const getResizedImageUrl = (url, width, height) => {
  // String dışındaki URL'ler için olduğu gibi döndür
  if (typeof url !== 'string') {
    return url;
  }

  // DiceBear avatarları için size parametresini ekle
  if (url.includes('dicebear.com')) {
    const username = url.split('seed=')[1]?.split('&')[0] || 'default';
    return `https://api.dicebear.com/7.x/bottts/png?seed=${username}&size=${width}`;
  }

  // Base64 için değişiklik yapmadan döndür
  if (url.startsWith('data:')) {
    return url;
  }

  // Diğer URL'ler için olduğu gibi döndür
  return url;
};
