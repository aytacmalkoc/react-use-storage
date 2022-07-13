import { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

const useStorage = (key: string, encrypt: boolean = false) => {
	const [value, setValue] = useState(() => {
		const json = localStorage.getItem(key);
		let jsonVal = encrypt ? CryptoJS.AES.decrypt(json, key).toString(CryptoJS.enc.Utf8) : json;

		return jsonVal ? JSON.parse(jsonVal) : null;
	});

	useEffect(() => {
		let jsonValue = encrypt ? CryptoJS.AES.encrypt(JSON.stringify(value), key).toString() : JSON.stringify(value);
		localStorage.setItem(key, jsonValue);
	}, [value]);

	return [value, setValue];
}

export { useStorage };