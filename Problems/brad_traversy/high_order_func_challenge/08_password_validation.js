function validatePassword(str) {
  let strArr = str.split("");
  if (
    !str.length >= 8 ||
    !strArr.some((char) => char >= "A" && char <= "Z") ||
    !strArr.some((char) => char >= "a" && char <= "z") ||
    !strArr.some((char) => char >= "0" && char <= "9")
  ) {
    return false;
  } else {
    return true;
  }
}

let str = "Abc12345";

console.log(validatePassword("HelloWorld2"));
