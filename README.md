# node-reiwa

[![npm version](https://badge.fury.io/js/node-reiwa.svg)](https://badge.fury.io/js/node-reiwa)

今年は令和何年ですか？

What year of Reiwa is this?

## install

```
% npm install node-reiwa
```

## example

```js
const reiwa = require('node-reiwa')
console.log(reiwa(new Date('2019-05-01')))
// 1

console.log(reiwa(new Date('2019-04-01')))
// null
```
