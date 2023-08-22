import CryptoJS from 'crypto-js';

export function encryptValueToCode(data, key = '') {
  if (key === '') {
    key = process.env.REACT_APP_CRYPTO_SECRET_KEY;
  }

  const myKey = process.env.REACT_APP_CRYPTO_SECRET_KEY;
  const encrypted = CryptoJS.AES.encrypt(data, myKey);

  return encrypted.toString();
}

export function getRandomString(length) {
  let randomChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charsLength = randomChars.length;

  const randomBytes = CryptoJS.lib.WordArray.random(length);
  let result = new Array(length);

  for (let i = 0; i < length; i++) {
    const byteValue = randomBytes.words[i % 16] & 0xff;
    result[i] = randomChars[byteValue % charsLength];
  }

  return result.join('');
}