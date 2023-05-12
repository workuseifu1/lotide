const assert = require('chai').assert;
const index = require('../index');

describe("#countLetters", () => {
  it("returns 4 for for the letter of 'h' in 'lighthouse in the house'", () => {
    assert.strictEqual(index.countLetters('lighthouse in the house').h, 4);
  });
});

