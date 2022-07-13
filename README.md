# react-use-storage

The react-use-storage package makes it easy to store data from API services with localStorage.


[![npm downloads](https://img.shields.io/npm/dt/@aytacmalkoc/react-use-storage)](https://www.npmjs.com/package/@aytacmalkoc/react-use-storage)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/aytacmalkoc/react-use-storage/blob/main/LICENSE)


## Installation

```bash
yarn add @aytacmallkoc/react-use-storage
```
or

```bash
npm install @aytacmalkoc/react-use-storage
```

## Usage

```js
import { useStorage } from '@aytacmalkoc/react-use-storage';

const [posts, setPosts] = useState([]);
const [storage, setStorage] = useStorage('posts');

useEffect(() => {
    if (storage) {
        setPosts(storage);
    } else {
        // fetch data from server
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setStorage(data);
            });
    }
}, []);
```

## Parameters

| **Parameter** | **Type** | **Required** | **Description**                          |
|---------------|----------|--------------|------------------------------------------|
| key           | string   | yes          | Key name to use in localStorage          |
| encrypt       | boolean  | no           | Encrypt data for security. Default false |


## Encryption

react-use-storage does not encrypt data by default. The second parameter must be true to encrypt the data.

[crypto-js](https://www.npmjs.com/package/crypto-js) package and [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) algorithm are used when encrypting data.


## Build & Publish

```bash
yarn build && yarn publish
```
or
```bash
npm run build && npm publish
```

### License
MIT license, Copyright (c) Aytac Malkoc. For more information see [LICENSE](https://github.com/aytacmalkoc/react-use-storage/blob/main/LICENSE).
