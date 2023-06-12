function checkEmail(email) {
  let emailRegExp = /(\w+)\@gmail\.com/;
  if (emailRegExp.test(email)) {
    return "ok";
  }
  return "not ok";
}

console.log(checkEmail("alex12124@gmail.com"))
