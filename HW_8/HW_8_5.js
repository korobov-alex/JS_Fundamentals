function emailChecker(email) {
  let allowedType = /^[A-Za-z0-9]+([_][A-Za-z0-9]+)*([-][A-Za-z0-9]+)?@gmail\.com/;
  if (allowedType.test(email)) {
    return "Email is correct!";
  }
  return "Email is not correct!";
}

console.log(emailChecker("alex@gmail.com"));
