const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed:  ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
  }
};
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
/**
 * The middle function should return an array with only the middle element(s) of the provided array.
 *  This means that the length of the returned elements could vary.
 * @param {*} arr
 * @returns
 */
const middle = function(arr) {
  const result = [];
  const index = arr.length / 2;
  if (index > 1 && arr.length % 2 === 0) {
    result.push(arr[index - 1], arr[index]);
  } else if (index > 1 && arr.length % 2 !== 0) {
    result.push(arr[Math.floor(index)]);
  }
  return result;
};
assertArraysEqual(middle([1, 2, 3, 4, 5,6]), [3, 4]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);