import { useState, useEffect } from 'react';
import * as CryptoJS from 'crypto-js';

const useStorage = (key: string, encrypt: boolean = false) => {
	const [value, setValue] = useState(() => {
		const json = localStorage.getItem(key);

		if (json) {
			if (encrypt) {
				const encrypted = CryptoJS.AES.decrypt(json, key).toString(CryptoJS.enc.Utf8);
				return JSON.parse(encrypted);
			}
			return JSON.parse(json);
		}

		return null;
	});

	useEffect(() => {
		let jsonValue = encrypt ? CryptoJS.AES.encrypt(JSON.stringify(value), key).toString() : JSON.stringify(value);
		localStorage.setItem(key, jsonValue);
	}, [value]);

	return [value, setValue];
}

export { useStorage };