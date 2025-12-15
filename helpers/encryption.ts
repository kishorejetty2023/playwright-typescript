import crypto from 'crypto-js';

let key = process.env.ENCRYPTION_KEY || 'default_encryption_key_123';

if (!key) {
    //generate a base 64 bit key
    key = crypto.lib.WordArray.random(16).toString(crypto.enc.Hex);
    console.warn(`ENCRYPTION_KEY is not set. A random key is generated : ${key}`);
}
export const encrypt=(password: string): string => {
    const encrypted = crypto.AES.encrypt(password, key).toString();
    return encrypted;
};

export const decrypt=(encryptedPassword: string): string => {
    const decrypted = crypto.AES.decrypt(encryptedPassword, key).toString(crypto.enc.Utf8);
    return decrypted;
};
