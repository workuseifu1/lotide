const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(sentence) {
  const results = {};
  for (const value in sentence) {
    const letter = sentence[value];
    if (letter === " ") {
      continue;
    }
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};
const word = "lighthouse in the house";
assertEqual(countLetters("hello").l, 2);
