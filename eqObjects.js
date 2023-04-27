const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else 
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  
};
const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i of keys1) {    
    if(Array.isArray(object1[i]) && Array.isArray(object2[i])) {
      if(!eqArrays(object1[i],object2[i])) {
        return false;
      }
    } else if(object1[i] !== object2[i]) {
      return false;
    }
  }
  return true; 
  };

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false