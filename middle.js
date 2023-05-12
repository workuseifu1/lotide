const middle = function (arr) {
  const result = [];
  const index = arr.length / 2;
  if (index > 1 && arr.length % 2 === 0) {
    result.push(arr[index - 1]);
    result.push(arr[index]);
  } else if (index > 1 && arr.length % 2 !== 0) {
    result.push(arr[Math.floor(index)]);
  }
  return result;
};
module.exports = middle;
