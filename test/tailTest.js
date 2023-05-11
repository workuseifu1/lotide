const assert = require('chai').assert;
const index = require('../index');

describe("#tail", () => {
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs'].length", () => {
    assert.deepEqual(index.tail(['Hello', 'Lighthouse', 'Labs']).length,2);
  });
}); 