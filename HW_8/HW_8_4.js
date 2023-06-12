function cardNumber(number){
  let allowedNumbers = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/
  if (allowedNumbers.test(number)){
    return true
  }
  return false
}

console.log(cardNumber("0999-9999-9999-9999"))
