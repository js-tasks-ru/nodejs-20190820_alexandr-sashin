function sum(a, b) {
  var checkIsNumberType = function(value) {
    return typeof value === 'number';
  };
  if (!checkIsNumberType(a) && !checkIsNumberType(b)) throw new TypeError('both arguments are not numbers');
  if (!checkIsNumberType(a)) throw new TypeError('the first argument is not number');
  if (!checkIsNumberType(b)) throw new TypeError('the second argument is not number');
  return a + b;
}

module.exports = sum;
