// imports
import { env } from '$env/dynamic/private';
import CryptoJS from 'crypto-js';

// secret
const secret = env.SECRET || 'undefined';

// encrypt
export const encrypt = (plaintext: string): string => {
	try {
		const result = CryptoJS.AES.encrypt(plaintext, secret).toString();
		return result;
	} catch (err) {
		return plaintext;
	}
};

// decrypt
export const decrypt = (ciphertext: string | undefined): string | null => {
	if (!ciphertext) return null;
	try {
		const bytes = CryptoJS.AES.decrypt(ciphertext, secret);
		const result = bytes.toString(CryptoJS.enc.Utf8);
		return result;
	} catch (err) {
		return null;
	}
};
