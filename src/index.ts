import { useState, useEffect } from 'react';
import { createJson, parseJson } from './helpers';
import { IOptions } from './interfaces';

const useStorage = (key: string, options: IOptions) => {
  const [value, setValue] = useState(() => {
    const json = localStorage.getItem(key);

    return json ? parseJson(json, key, options) : null;
  });

  useEffect(() => {
    const json = createJson(value, key, options);

    localStorage.setItem(key, json);
  }, [value]);

  return [value, setValue];
};

export { useStorage };
