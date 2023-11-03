# jest-asset-transform
A Jest transformer which enables importing assets into Jest's jsdom.

## Description

This is a custom Jest transformer turning file imports into filenames.

**Note:** SVG handling is mainly inspired from [jest-transformer-svg](https://github.com/Em-Ant/jest-transformer-svg).

## Getting started

### Installation

Install with NPM or Yarn.

Run `npm install jest-asset-transform -D` or `yarn add jest-asset-transform -D` to install the library.

### Usage

Please add the transformation module into the Jest's transform config:

```json
{
  "transform": {
    "\\.[jt]sx?$": "babel-jest",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "jest-asset-transform"
  }
}
```

<p align="center">This project is licensed under the MIT license. See the <a href="./LICENSE"> LICENSE</a> file for more info.</p>