const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} != ${arr2}`);
  }
};
const letterPositions = function(sentence) {
  const results = {};
  for (const position in sentence) {
    const letter = sentence[position];
    if (letter === ' ') {
      continue;
    }
    if (!results[letter]) {
      results[letter] = [];
    }
    results[letter].push(Number(position));
  }
  return results;
};
const word = "lighthouse in the house";
console.log(letterPositions(word));
assertArraysEqual(letterPositions("hello").e, [1]);
