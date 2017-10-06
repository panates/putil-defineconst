# putil-defineconst

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![DevDependencies][devdependencies-image]][devdependencies-url]

Helper function for defining const properties easily

## Installation

`$ npm install putil-defineconst --save`


## Usage

`defineConst([target], name, value, [enumerable=true])`

- targe [`Object`] Target object
- name [`String`] Property name
- value [`*`] Property value
- enumerable ['Boolean'] Enumerable flag

```js
const defineConst = require('putil-defineconst');
const a = {};
defineConst(a, 'prm1', 123);
a.prm1 = 1234;
assert.equal(a.prm1, 123);
assert.equal(a.propertyIsEnumerable('prm1'), true);
```

`defineConst([target], properties, [enumerable=true])`

- targe [`Object`] Target object
- name [`Object`] Key/value pair object that includes properties to be defined
- enumerable ['Boolean'] Enumerable flag

```js
const a = {};
defineConst(a, {
  prm1: 123,
  prm2: 'abc'
});
a.prm1 = 1234;
a.prm2 = 'aaa';
assert.equal(a.prm1, 123);
assert.equal(a.propertyIsEnumerable('prm1'), true);
assert.equal(a.prm2, 'abc');
assert.equal(a.propertyIsEnumerable('prm2'), true);
```

## Node Compatibility

  - node `>= 4.0`;
  
### License
[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/putil-defineconst.svg
[npm-url]: https://npmjs.org/package/putil-defineconst
[travis-image]: https://img.shields.io/travis/panates/putil-defineconst/master.svg
[travis-url]: https://travis-ci.org/panates/putil-defineconst
[coveralls-image]: https://img.shields.io/coveralls/panates/putil-defineconst/master.svg
[coveralls-url]: https://coveralls.io/r/panates/putil-defineconst
[downloads-image]: https://img.shields.io/npm/dm/putil-defineconst.svg
[downloads-url]: https://npmjs.org/package/putil-defineconst
[gitter-image]: https://badges.gitter.im/panates/putil-defineconst.svg
[gitter-url]: https://gitter.im/panates/putil-defineconst?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[dependencies-image]: https://david-dm.org/panates/putil-defineconst/status.svg
[dependencies-url]:https://david-dm.org/panates/putil-defineconst
[devdependencies-image]: https://david-dm.org/panates/putil-defineconst/dev-status.svg
[devdependencies-url]:https://david-dm.org/panates/putil-defineconst?type=dev
[quality-image]: http://npm.packagequality.com/shield/putil-defineconst.png
[quality-url]: http://packagequality.com/#?package=putil-defineconst
