const assertEqual = function(actual, expected) {
  
  if (actual.toString() === expected.toString()) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};
const tail = function(array) {
  let result = array.slice(1);
  return result;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
const results = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(results.length, 2);
assertEqual(results[0], "Lighthouse");
assertEqual(results[1], "Labs");