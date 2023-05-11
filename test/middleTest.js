
const assert = require('chai').assert;
const index = require('../index');

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5,6]", () => {
    assert.deepEqual(index.middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(index.middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(index.middle([1, 2]), []);
  });
});