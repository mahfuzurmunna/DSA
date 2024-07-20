function validateEmail(email) {
  if (email.includes("@" && ".")) {
    return true;
  }

  return false;
}

console.log(validateEmail("johngmail.com"));

function validateEmailReges(email) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  return emailRegex.test(email);
}

console.log(validateEmail("johngmail.com"));
