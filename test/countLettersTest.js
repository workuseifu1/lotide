const assert = require('chai').assert;
const index = require('../index');

describe("#countLetters", () => {
  it("returns 4 for the count of letter  'h' in a sentence 'lighthouse in the house'", () => {
    assert.strictEqual(index.countLetters('lighthouse in the house').h, 4);
  });
});

