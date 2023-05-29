1;
class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  circleLength() {
    return 2 * Math.PI * this.radius;
  }

  static circleLengthForSpecificRadius(radius) {
    return 2 * Math.PI * radius;
  }

  objectCreation() {
    let obj = {
      x: this.x,
      y: this.y,
      radius: this.radius,
    };
    return obj;
  }
  circleCopying() {
    return new Circle(this.x, this.y, this.radius);
  }

  static circleCreation(x, y, radius) {
    return new Circle(x, y, radius);
  }

  isPointIsInTheCircle(pointX, pointY) {
    let hypotenuse =
      (pointX - this.x) * (pointX - this.x) +
      (pointY - this.y) * (pointY - this.y);
    if (hypotenuse < this.radius ** 2) {
      return true;
    }
    return false;
  }

  objectToString(obj) {
    let string = JSON.stringify(obj);
    return string;
  }
}
let c1 = new Circle(2, 4, 6);
let newObj = c1.objectCreation();
console.log(typeof c1.objectToString(newObj));
let c3 = new Circle(6, 8, 6);
let c2 = Circle.circleCreation(4, 5, 6);
console.log(c1.isPointIsInTheCircle(0, 0));
console.log(c3.isPointIsInTheCircle(0, 0));

//------------------------------------------------------------------------------------------------------------------------------

2;
function propsCount(obj) {
  return (amountOfProps = Object.keys(obj).length);
}

let human = { a: 1, b: 2, c: 3, d: 4 };

console.log(propsCount(human));

//------------------------------------------------------------------------------------------------------------------------------

3;
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullname() {
    console.log(this.name + " " + this.surname);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullname(middleName) {
    return this.name + " " + this.surname + " " + middleName;
  }

  showCourse() {
    const date = new Date();
    let currentYear = date.getFullYear();
    return currentYear - this.year;
  }
}

const std = new Student("Oleksandr", "Korobov", 2016);
console.log(std.showFullname("Volodymyrovych"));
console.log("Current course: " + std.showCourse());

//------------------------------------------------------------------------------------------------------------------------------

4;
A;
class Marker {
  constructor(color, amountOfDye) {
    this.color = color;
    this.amountOfDye = amountOfDye;
  }

  print(text) {
    let resultArr = "";
    let arrText = text.split("");
    for (let i = 0; i < arrText.length; i++) {
      if (this.amountOfDye <= 0) {
        break;
      } else {
        if (arrText[i] !== " ") {
          resultArr += arrText[i];
          this.amountOfDye -= 0.5;
        } else {
          resultArr += arrText[i];
        }
      }
    }

    if (this.amountOfDye <= 0) {
      console.log(`%c${resultArr}`, `color: ${this.color}`);
    } else {
      console.log(`%c${arrText.join("")}`, `color: ${this.color}`);
    }
  }
}

let mrk = new Marker("red", 4);
mrk.print("Hello world");

//B
class betterMarker extends Marker {
  constructor(color, amountOfDye) {
    super(color, amountOfDye);
  }

  fulfill() {
    this.amountOfDye = 100;
  }
}

let mark = new betterMarker("red", 3);

console.log("Was: " + mark.amountOfDye);
mark.print("Hello world");
console.log("After print: " + mark.amountOfDye);
mark.fulfill();
console.log("After fulfilling: " + mark.amountOfDye);
mark.print("Hello world");
console.log("Leftover: " + mark.amountOfDye);

//------------------------------------------------------------------------------------------------------------------------------

5;
class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    Worker.allInstances.push(this);
  }

  static allInstances = [];

  showSalary() {
    return this.dayRate * this.workingDays;
  }

  #experience = 1.2;

  getExp() {
    return this.#experience;
  }

  setExp(newExp) {
    this.#experience = newExp;
  }

  showSalaryWithExperience() {
    return this.dayRate * this.workingDays * this.#experience;
  }
}

let wrk1 = new Worker("Oleksandr Korobov", 20, 22);
let wrk2 = new Worker("Dmytro Kolosenko", 15, 20);
let wrk3 = new Worker("Mykyta Tugarin", 10, 25);
let wrk4 = new Worker("Andriy Pokhodun", 18, 21);
let wrk5 = new Worker("Larisa Poludubkina", 15, 15);

console.log(wrk1.fullName);
wrk1.showSalary();
console.log("Experience: " + wrk1.getExp());
wrk1.showSalaryWithExperience();
wrk1.setExp(1.5);
wrk2.setExp(1.2);
wrk3.setExp(1.3);
wrk4.setExp(1.4);
wrk5.setExp(1.5);
console.log("New expirience: " + wrk1.getExp());
wrk1.showSalaryWithExperience();

//sorting 1st part, sorting (by the exp asc)
let regularSortObj = [];

for (let i = 0; i < Worker.allInstances.length; i++) {
  let instance = Worker.allInstances[i];
  regularSortObj.push({
    worker_FullName: instance.fullName,
    worker_exp: instance.getExp(),
    salary_value: instance.showSalary(),
  });
}

function compareByExp(a, b) {
  if (a.worker_exp < b.worker_exp) {
    return -1;
  }
  if (a.worker_exp > b.worker_exp) {
    return 1;
  }
  return 0;
}

let regularSortResult = regularSortObj.sort(compareByExp);
for (let i = 0; i < regularSortObj.length; i++) {
  console.log(
    `${regularSortResult[i].worker_FullName} salary ${regularSortResult[i].salary_value} exp is ${regularSortResult[i].worker_exp}`
  );
}

//sorting 2nd part, sorting (by the salary desc)
function compareBySalary(a, b) {
  if (a.salary_value < b.salary_value) {
    return 1;
  }
  if (a.salary_value > b.salary_value) {
    return -1;
  }
  return 0;
}

let dynamicSortResult = regularSortObj.sort(compareBySalary);
for (let i = 0; i < regularSortObj.length; i++) {
  console.log(
    `${dynamicSortResult[i].worker_FullName} : ${dynamicSortResult[i].salary_value}`
  );
}
