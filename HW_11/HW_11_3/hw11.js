new Promise(function (resolve, reject) {
    function askForNumber() {
      var number = prompt("Input the number");
      if (isNaN(number)) {
        reject("This is not a number");
      } else {
        resolve(Number(number));
      }
    }
    askForNumber();
  })
    .catch(function (error) {
      console.error(error);
      return new Promise(function (resolve, reject) {
        function askForNumber() {
          var number = prompt("Input the number");
          if (isNaN(number)) {
            askForNumber();
          } else {
            resolve(Number(number));
          }
        }
        askForNumber();
      });
    })
    .then(function (result) {
      console.log("Your number is:", result);
    });