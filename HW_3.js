1;
function compact(arr) {
  const mySet = new Set(arr);
  let arr2 = Array.from(mySet);
  return arr2;
}

console.log(compact([5, 3, 4, 5, 6, 7, 3]));

2;
function createArray(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(createArray(20, 25));

3;
function repeatNumber(a, b) {
  if (a > b || a % 1 != 0 || b % 1 != 0) {
    return "Bad data, provide numbers one more time";
  } else {
    let counter = 1;
    for (let i = a; i <= b; i++) {
      while (counter < i) {
        console.log(i);
        counter++;
      }
      counter = 1;
    }
  }
}

repeatNumber(2, 9);

4;
function randArray(k) {
  let arr = [];
  let counter = 0;
  while (counter < k) {
    arr.push(Math.floor(Math.random() * (500 - 1 + 1)) + 1);
    counter++;
  }
  return arr;
}

console.log(randArray(5));

5;
function unBox(arr) {
  let newArr = [].concat(...arr);
  let numberArr = [];
  let stringArr = [];
  newArr.forEach((element) => {
    if (typeof element == "number") {
      numberArr.push(element);
    } else {
      stringArr.push(element);
    }
  });
  let overallArr = [numberArr, stringArr];
  return overallArr;
}

console.log(
  unBox([
    5,
    "Limit",
    12,
    "a",
    "3",
    99,
    2,
    [2, 4, 3, "33", "a", "text"],
    "strong",
    "broun",
  ])
);

6;
function greetings1() {
  var today = new Date();
  var time = today.getHours();
  if (time >= 5 && time < 11) {
    console.log("Good morning!");
  } else if (time >= 11 && time < 17) {
    console.log("Good day!");
  } else if (time >= 17 && time < 23) {
    console.log("Good evening!");
  } else {
    console.log("Good night!");
  }
}

function greetings2() {
  var today = new Date();
  var time = today.getHours();
  return time >= 5 && time < 11
    ? console.log("Good morning!")
    : time >= 11 && time < 17
    ? console.log("Good day!")
    : time >= 17 && time < 23
    ? console.log("Good evening!")
    : console.log("Good night!");
}

greetings1();
greetings2();
