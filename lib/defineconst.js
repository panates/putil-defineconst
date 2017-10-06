/* putil-defineconst
 ------------------------
 (c) 2017-present Panates
 This file may be freely distributed under the MIT license.
 For details and documentation:
 https://github.com/panates/putil-defineconst
 */

function defineConst(obj, name, value, enumerable) {
  if (typeof name === 'object') {
    enumerable = value;
    Object.getOwnPropertyNames(name).forEach(function(property) {
      Object.defineProperty(obj, property, {
        value: name[property],
        writable: false,
        configurable: false,
        enumerable: enumerable || enumerable === undefined
      });
    });
  } else
    Object.defineProperty(obj, name, {
      value: value,
      writable: false,
      configurable: false,
      enumerable: enumerable || enumerable === undefined
    });
}

module.exports = defineConst;
