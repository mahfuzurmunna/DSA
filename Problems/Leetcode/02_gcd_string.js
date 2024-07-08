//recursion
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  function gcd(a, b) {
    if (b.length === 0) return a;

    return gcd(b, a.slice(0, a.length % b.length));
  }

  return gcd(str1, str2);
};

//normal solution
function gcdOfStringsMath(str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  let a = str1.length;
  let b = str2.length;

  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return str1.substring(0, a);
}
