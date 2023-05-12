const letterPositions = function (sentence) {
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
module.exports = letterPositions;

