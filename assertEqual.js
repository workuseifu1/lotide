const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    return console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, "1");
assertEqual(2.0, 2);
assertEqual(0,false);