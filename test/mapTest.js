const assert = require('chai').assert;
const index = require('../index');

describe("#map", () => {
  it("returns [ 'g', 'c', 't', 'm', 't' ] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(index.map(["ground", "control", "to", "major", "tom"], word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });  
});

