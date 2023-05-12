const assert = require('chai').assert;
const index = require('../index');

describe("#countOnly", () => {
  it("returns [1] for for the position of 'e' in 'hello'", () => {
    assert.strictEqual(index.countOnly(([
      'Karl',
      'Salima',
      'Agouhanna',
      'Fang',
      'Kavith',
      'Jason',
      'Salima',
      'Fang',
      'Joe'
    ]),{ 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false })['Jason'], 1);
  });
});
