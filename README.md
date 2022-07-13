# 📖 react-use-storage

The react-use-storage package makes it easy to store data from API services with localStorage.

[![npm downloads](https://img.shields.io/npm/dt/@aytacmalkoc/react-use-storage)](https://www.npmjs.com/package/@aytacmalkoc/react-use-storage)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/aytacmalkoc/react-use-storage/blob/main/LICENSE)

# Table of contents

- [📖 react-use-storage](#-react-use-storage)
  - [🙇‍♂️ Motivation](#-motivation)
  - [🔗 Installation](#-installation)
  - [👉 Usage](#-usage)
  - [Parameters](#parameters)
  - [🔑 Encryption](#-encryption)
  - [Formatting](#formatting)
    - [📝 Lint](#-lint)
    - [👀 Watch changes](#-watch-changes)
    - [✒️ Format Document](#-format-document)
  - [🚀 Build & Publish](#-build--publish)
    - [Build](#build)
    - [Publish](#publish)
  - [💁 License](#-license)

## 🙇‍♂️ Motivation
I had the problem that this package solves while developing my personal web page. I wanted to list my personal repository on my web page using Github REST API service. I wanted to write a function using the localStorage property to be able to do it without any authenticate and rate limits. When I saw that I could use this function in more than one project, I created it as a small package and published it.

## 🔗 Installation

```bash
yarn add @aytacmallkoc/react-use-storage
```
or

```bash
npm install @aytacmalkoc/react-use-storage
```

## 👉 Usage

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


## 🔑 Encryption

react-use-storage does not encrypt data by default. The second parameter must be true to encrypt the data.

[crypto-js](https://www.npmjs.com/package/crypto-js) package and [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) algorithm are used when encrypting data.


## Formatting

### 📝 Lint

```bash
yarn lint
```

### 👀 Watch changes

```bash
yarn prettier-watch
```

### ✒️ Format Document

```bash
yarn prettier-format
```
---

## 🚀 Build & Publish


### Build

```bash
yarn build
```
### Publish
```bash
yarn publish
```

## 💁 License
MIT license, Copyright (c) Aytac Malkoc. For more information see [LICENSE](https://github.com/aytacmalkoc/react-use-storage/blob/main/LICENSE).
