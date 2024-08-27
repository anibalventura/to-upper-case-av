const assert = require('assert');
const { upperCase } = require('../index');

describe('upperCase', () => {
  it('should convert text to uppercase', () => {
    const result = upperCase('package');
    assert.strictEqual(result, 'PACKAGE');
  });
});
