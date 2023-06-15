function loginCheck(login){
  let allowedSymbols = /^[A-Za-z][A-Za-z0-9.]{1,9}$/
  let foundedNumbers, verificationResult;
  if(allowedSymbols.test(login)){
    verificationResult = true
  }else {
    verificationResult = false
  }
  foundedNumbers = login.match(/\d+(\.\d+)?/g)
  console.log("Numbrest that are present in the login: " + foundedNumbers + "\n" + "Is this a good login: " + verificationResult)
  
}

loginCheck("ee1.1ret3")
loginCheck("ee1*1ret3")
