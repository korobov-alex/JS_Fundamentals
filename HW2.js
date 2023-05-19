1;
function trueOrFalse(a, b, c) {
  if (a < b < c) {
    return true;
  } else {
    return false;
  }
}

2;
let x = 1;
let y = 2;

let res1 = x + "" + y;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = (x < y) + "" + y;
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y;
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = Math.sqrt(x - y);
console.log(res4); // NaN
console.log(typeof res4); // ""number""

3;
let isAdult = +prompt("How old are you?");
if (isAdult >= 18) {
  alert("You're adult!");
} else {
  alert("You're minor");
}

4;
function maxAndReplace(arr) {
  const maxValue = [Math.max(...arr)];
  return arr.filter((num) => num !== maxValue[0]);
}

console.log(maxAndReplace([4, 5, 2, 1, 5, 3, 5, 2, 5]));

5;
function triangleSqrt() {
  let firstSide = +prompt("Please input the value of the first side");
  let secondSide = +prompt("Please input the value of the second side");
  let thirdSide = +prompt("Please input the value of the third side");
  if (
    isNaN(firstSide) ||
    isNaN(secondSide) ||
    isNaN(thirdSide) ||
    firstSide + secondSide <= thirdSide ||
    secondSide + thirdSide <= firstSide ||
    thirdSide + firstSide <= secondSide
  ) {
    alert("Wrong data! Please, check it one more time");
  } else if (
    firstSide ** 2 + secondSide ** 2 === thirdSide ** 2 ||
    secondSide ** 2 + thirdSide ** 2 === firstSide ** 2 ||
    thirdSide ** 2 + firstSide ** 2 === secondSide ** 2
  ) {
    let hypotenuse = Math.max(firstSide, secondSide, thirdSide);
    let legs = [firstSide, secondSide, thirdSide].filter(
      (num) => num !== hypotenuse
    );
    let square = (legs[0] * legs[1]) / 2;
    console.log(
      `This is a right triangle! Its square is: ${square.toFixed(3)}`
    );
  } else {
    let halfPerimeter = (firstSide + secondSide + thirdSide) / 2;
    console.log(
      Math.sqrt(
        halfPerimeter *
          (halfPerimeter - firstSide) *
          (halfPerimeter - secondSide) *
          (halfPerimeter - thirdSide)
      ).toFixed(3)
    );
  }
}

triangleSqrt();

6;
function culc(a, b, op) {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default:
      return a + b;
  }
}
console.log(culc(1, 2, 2));

7;
function findUnique(arr) {
  const sorted = arr.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] == sorted[i + 1]) {
      return false;
    } else {
      return true;
    }
  }
}

//Або можна через Set, що, наче як, має працювати швидше ( O(n) якщо через Сет ----> O(n log n) якщо через сорт )
function findUniqueSet(arr) {
  const uniqueSet = new Set(arr);
  return arr.length === uniqueSet.size;
}

console.log(findUnique([1, 2, 3, 5, 11, 1]));
console.log(findUniqueSet([1, 2, 3, 5, 11, 1]));

8;
function create(name) {
  return function (checker) {
    return name === checker;
  };
}

const tom = create("pass_for_Tom");
console.log(tom("pass_for_Tom"));
console.log(tom("pass_for_tom"));
