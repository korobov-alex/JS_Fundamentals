var arr = [];

for (let i = 0; i <= 2; i++) {
   arr[i] = (function(num){
       return function () {
      console.log(num);
   }
   })(i);
}

arr[0](); // 0
arr[arr.length - 1](); // 2