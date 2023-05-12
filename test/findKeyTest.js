const assert = require('chai').assert;
const index = require('../index');

describe("#findKey", () => {
  it("returns 'noma' for for the position of '2.stars' in object list of stars", () => {
    assert.deepEqual(index.findKey({
      'Blue Hill': { stars: 1 },
      'Akaleri':   { stars: 3 },
      'noma':      { stars: 2 },
      'elBulli':   { stars: 3 },
      'Ora':       { stars: 2 },
      'Akelarre':  { stars: 3 }
    }, x => x.stars === 2), "noma");
  });
});

