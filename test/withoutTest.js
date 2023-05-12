const assert = require('chai').assert;
const index = require('../index');

describe("#without", () => {
  it('returns ["1", "2"] for array of ["1", "2", "3"] and unwanted element of [1, 2, "3"] ', () => {
    assert.deepEqual(index.without(["1", "2", "3"],[1, 2, "3"]),["1", "2"]);
  });
  it("returns [2, 3] for array of [1, 2, 3] and unwantyed element of [1])", () => {
    assert.deepEqual(index.without([1, 2, 3], [1]), [2, 3]);
  });  
});

