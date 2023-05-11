const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs'].length", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']).length,2);
  });
}); 