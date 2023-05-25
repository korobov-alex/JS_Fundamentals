1;
function sumSliceArray(arr, first, second) {
  try {
    if (typeof first !== "number" || typeof second !== "number") {
      throw new TypeError("Wrong data type! Arguments should be only numbers.");
    } else if (first > arr.length || second > arr.length) {
      throw new RangeError(
        "Numbers from arguments are bigger then array legth"
      );
    } else {
      console.log(arr[first] + arr[second]);
    }
  } catch (error) {
    console.log(error.stack);
  }
}

sumSliceArray([1, 2, 3, 4, 5], "aq", 3);

2;
function checkAge() {
  try {
    let data = {};
    let arr = ["name", "age", "status"];
    for (let i = 0; i < 3; i++) {
      data[arr[i]] = prompt(`What is your ${arr[i]}?`);
    }
    if (data.name === "" || data.age === "" || data.status === "") {
      throw new Error("The field is empty! Please enter the data");
    } else if (isNaN(data.age)) {
      throw new TypeError("Age must be a number");
    } else if (data.age < 18 || data.age > 70) {
      throw new RangeError("Numbers from arguments are bigger than expected");
    } else if (
      data.status !== "admin" &&
      data.status !== "moderator" &&
      data.status !== "user"
    ) {
      throw new EvalError("Incorrect status!");
    } else {
      alert(`You have an access to film. Have a good day!`);
    }
  } catch (error) {
    console.log(error.stack);
  }
}

checkAge();

3;
function calcRectangleArea(width, height) {
  try {
    if (typeof width !== "number" || typeof height !== "number") {
      throw new TypeError("Wrong data type! Arguments should be only numbers.");
    } else {
      console.log(width * height);
    }
  } catch (error) {
    console.log(error.stack);
  }
}

calcRectangleArea(2, "a");

4;
class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
    this.message = message;
  }
}
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function showMonthName(month) {
  try {
    if (month > 12 || month < 1) {
      throw new MonthException("Incorrect month number");
    } else if (typeof month !== "number") {
      throw new MonthException("Incorrect provided data type");
    } else {
      console.log(months[month - 1]);
    }
  } catch (error) {
    console.log(error.stack);
  }
}

showMonthName(3);

5;
function showUser(id) {
    try {
        if (id < 0) {
            throw new RangeError(`Error: ID must not be negative: ${id}`);
        } else {
            return { "id": id };
        }
    } catch (error) {
        console.log(error.stack);
    }
}

function showUsers(ids) {
    let validIds = [];
    try {
        ids.forEach((element) => {
            let checkedIds = showUser(element);
            if(element > 0){
                validIds.push(checkedIds);
            }
        });
        return validIds;
    } catch (error) {
        console.log(error.stack);
    }
}

console.log(showUserId([7, -12, 44, 22]));
