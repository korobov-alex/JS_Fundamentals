1. 
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <script>
    alert("Oleksandr")
  </script>
</body>
</html>


2. 
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <script src="script.js"></script>
</body>
</html>

script.js
console.log("Korobov")


3.
let first = 5
let second = 10
console.log(first, second)
first = second
console.log(first, second)

4.
let string = "Oleksandr"
let number = 28
let boolean = true
let myUndefined
let myNull = null

5.
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <script src="script.js"></script>
</body>
</html>

script.js
let result = confirm("Are you adult?")
console.log(result)

6.
let name = "Oleksandr" //String
let surname = "Korobov" //String
let groupNumber = 1019 //Number
let yearOfBirth = 1995 //Number
let married = false //Boolean

console.log(typeof groupNumber, typeof yearOfBirth, typeof married, typeof name, typeof surname)

let myUndefined
let myNull = null
console.log(typeof myUndefined, typeof myNull)

7. 
let name = prompt("What is your name?")
let email = prompt("What is your email?")
let password = prompt("What is your password?")
alert(`Dear ${name}, your email is ${email} and your password is ${password}`)

8.
const MINUTES_IN_HOUR = 60
const HOURS = 24
const DAYS_IN_MONTH = 30

let secondsInHour = MINUTES_IN_HOUR * 60
let secondsInDay = secondsInHour * HOURS
let secondsInMonth = secondsInDay * DAYS_IN_MONTH
alert(`There are ${secondsInHour} seconds in hour, ${secondsInDay} seconds in day and ${secondsInMonth} seconds in month`)

9.
/*
_________   _________  
|        |             |
|  1  2  |           25|
|        |    1 купе   |
|  3  4  |           26|
|________|             |
_________              |
|         |            |
|  5  6   |          27|
|         |   2 купе   |
|  7  8   |          28|
|_________|            |
 _________             |
|         |            |
|  9  10  |          29|
|         |   3 купе   |
|  11  12 |          30|
|_________|            |
 _________             |
|         |            |
|  13  14 |          31|
|         |   4 купе   |
|  15  16 |          32|
|_________|            |
 _________             |
|         |            |
|  17  18 |          33|
|         |   5 купе   |
|  19  20 |          34|
|_________|            |
 _________             |
|         |            |
|  21  22 |          35|
|         |   6 купе   |
|  23  24 |          36|
|_________| _________  |
*/

function getCoupeNumber() {
  let seatNumber = prompt("What is your seat number?");
  if (isNaN(Number(seatNumber)) || seatNumber < 0 || seatNumber % 1 !== 0) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (seatNumber > 36 || seatNumber == 0) {
    return "Таких мест в вагоне не существует";
  }else if(seatNumber > 24 && seatNumber % 2 == 0){
    alert(`Your compartment at the side wall and it's on the top`);
  }else if (seatNumber > 24 && seatNumber % 2 !== 0){
    alert(`Your compartment at the side wall and it's on the bottom`);
  }else if (seatNumber % 2 == 0){
    alert(`Your compartment number is ${Math.ceil(seatNumber/4)} and it's on the top`);
  }else{
    alert(`Your compartment number is ${Math.ceil(seatNumber/4)} and it's on the bottom`);
  }
}

getCoupeNumber();
