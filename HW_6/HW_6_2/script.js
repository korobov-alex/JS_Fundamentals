document.body.firstElementChild.style.backgroundColor = "lightgreen";
document.getElementById("myDiv").firstElementChild.style.fontWeight = "bold"
document.getElementById("myDiv").firstElementChild.nextElementSibling.style.color = "red"
document.getElementById("myDiv").lastElementChild.previousElementSibling.style.textDecoration = "underline"
document.getElementById("myDiv").lastElementChild.style.fontStyle = "italic"
document.body.lastElementChild.previousElementSibling.style.display = "none";

let text = document.getElementById("myList");
let string = Array.from(text.getElementsByTagName("li"));
console.log(string)
let resultString = string.map(function(item) {
  return item.innerText;
}).join("");
text.innerText = resultString;
