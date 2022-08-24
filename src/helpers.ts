import * as CryptoJS from 'crypto-js';
import { IOptions } from './interfaces';

const encryptJson = (value: any, key: string) => {
    const jsonString = JSON.stringify(value);
    const encrypted = CryptoJS.AES.encrypt(jsonString, key).toString();

    return encrypted;
}

const decryptJson = (value: any, key: string) => {
    const decrypted = CryptoJS.AES.decrypt(value, key).toString(
        CryptoJS.enc.Utf8
    );

    return JSON.parse(decrypted);
}

const isExpired = (data: any) => {
    const json = JSON.parse(data);

    if (json.hasOwnProperty('expiresAt')) {
        const currentDate = new Date();

        if (currentDate >= json.expiresAt) {
            return true;
        }

        return false;
    }

    return new Error('The JSON data does not have the value expiresAt.');
}

const createJson = (value: any, key: string, options: IOptions) => {
    const json = {
        ...value,
        ...(options.expiresAt) && { expiresAt: options.expiresAt }
    }

    return options.encrypt ? encryptJson(json, key) : JSON.stringify(json);
};

const parseJson = (value: any, key: string, options: IOptions) => {
    const json = options.encrypt ? decryptJson(value, key) : JSON.parse(value);

    if (isExpired(value)) {
        return null;
    }

    // remove expiresAt value from json data.
    if (json.hasOwnProperty('expiresAt')) {
        delete json.expiresAt;
    }

    return json;
}

export {
    createJson,
    parseJson
}