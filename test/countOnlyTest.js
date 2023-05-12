const assert = require('chai').assert;
const index = require('../index');

describe("#countOnly", () => {
  it("returns 1 for the count of 'Jason' in an array of name list ", () => {
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
