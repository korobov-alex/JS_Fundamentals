function upperCase(text){
  let chars = /^[A-Z]/;
  if(chars.test(text)){
    return "String's starts with uppercase character"
  }
  return "String's not starts with uppercase character"
}

console.log(upperCase("Res"))
