
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
/**
 * without function should return a new array with only those elements from source that are not present in the itemsToRemove array.
 * @param {*} source
 * @param {*} itemsToRemove
 * @returns
 */
const without = function(source, itemsToRemove) {
  const result = [];
  for (let j = 0; j < source.length; j++) {
    if (!(itemsToRemove.includes(source[j]))) {
      result.push(source[j]);
    }
  }
  return result;
};
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);