const countLetters = function (sentence) {
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
module.exports = countLetters;

