const assert = require('chai').assert;
const index = require('../index');

describe("#letterPositions", () => {
  it("returns [1] for for the position of 'e' in 'hello'", () => {
    assert.deepEqual(index.letterPositions(("hello")).e, [1]);
  });
});

