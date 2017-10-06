/* eslint-disable */
const assert = require('assert');
const defineConst = require('../');

describe('defineConst', function() {

  it('test defineConst(obj, name, value)', function(done) {
    const a = {};
    defineConst(a, 'prm1', 123);
    a.prm1 = 1234;
    assert.equal(a.prm1, 123);
    assert.equal(a.propertyIsEnumerable('prm1'), true);
    done();
  });

  it('test defineConst(obj, name, value, false)', function(done) {
    const a = {};
    defineConst(a, 'prm1', 123, false);
    a.prm1 = 1234;
    assert.equal(a.prm1, 123);
    assert.equal(a.propertyIsEnumerable('prm1'), false);
    done();
  });

  it('test defineConst(obj, obj)', function(done) {
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
    done();
  });

  it('test defineConst(obj, obj, false)', function(done) {
    const a = {};
    defineConst(a, {
      prm1: 123,
      prm2: 'abc'
    }, false);
    a.prm1 = 1234;
    a.prm2 = 'aaa';
    assert.equal(a.prm1, 123);
    assert.equal(a.propertyIsEnumerable('prm1'), false);
    assert.equal(a.prm2, 'abc');
    assert.equal(a.propertyIsEnumerable('prm2'), false);
    done();
  });

});