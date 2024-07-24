function isValidIPv4(str) {
  let ipArr = str.split(".");
  console.log(ipArr);
  if (ipArr.length !== 4) return false;

  const result = ipArr.every((number) => {
    num = parseInt(number);
    return num >= 0 && num <= 255 && number === num.toString();
  });
  return result;
}

let pv = "123.045.067.089";

console.log(isValidIPv4(pv));
