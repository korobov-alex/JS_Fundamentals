let arrayOfAtt = [];
let allData = document.getElementsByClassName("circle");
console.log(allData);

for (let i = 0; i < allData.length; i++) {
  arrayOfAtt.push(allData[i].getAttribute("data-anim"));
}

console.log(arrayOfAtt);

for (let j = 0; j < arrayOfAtt.length; j++) {
  allData[j].classList.add(arrayOfAtt[j]);
}
