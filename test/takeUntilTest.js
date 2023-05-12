const assert = require('chai').assert;
const index = require('../index');

describe("#takeUntil", () => {
  it("returns '[ 1, 2, 5, 7, 2 ]' for '[1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0'", () => {
    assert.deepEqual(index.takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });
  it("returns [ 'I\'ve', 'been', 'to', 'Hollywood' ] for (['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood'],x => x === ',')", () => {
    assert.deepEqual(index.takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });  
});

