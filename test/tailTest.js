const tail =require('../tail');
const assertEqual =require('../assertEqual');
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
const results = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(results.length, 2);
assertEqual(results[0], "Lighthouse");
assertEqual(results[1], "Labs");