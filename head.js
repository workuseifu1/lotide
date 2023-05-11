const head = function (array) {
  let firstArray = "";
  if (array.length === 0) {
    return "undefined";
  } else {
  for (let i = 0; i < array.length; i++) {
    firstArray = array[0];
  }
  return firstArray;
}
};
module.exports = head;
