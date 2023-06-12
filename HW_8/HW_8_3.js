function placeChange(string){
  return string.replace(/(\w+)\s+(\w+)/, "$2, $1");
}

console.log(placeChange("Hello World"))
