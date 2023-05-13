const assert = require('chai').assert;
const index = require('../index');

describe("#findKeyByValue", () => {
  it("returns 'sciFi'  as a key of 'The Expanse' which is a value in a given object'", () => {
    assert.strictEqual(index.findKeyByValue(({
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    }), "The Expanse"), "sciFi");
  });
  it("returns 'comedy'  as a key of 'Brooklyn Nine-Nine' which is a value in a given object'", () => {
    assert.strictEqual(index.findKeyByValue(({
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    }), "Super-man"), undefined);
  });
});
