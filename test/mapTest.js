const assert = require('chai').assert;
const index = require('../index');

describe("#map", () => {
  it("returns [ 'g', 'c', 't', 'm', 't' ] for an array of['ground', 'control', 'to', 'major', 'tom'] and the condition of callback function is first letter of each elemets ", () => {
    assert.deepEqual(index.map(["ground", "control", "to", "major", "tom"], word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });  
});

