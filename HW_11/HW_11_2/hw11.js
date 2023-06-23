function calcArrProduct(arr){
    return new Promise(function(res, rej){
        let result = 1;
        for(let i = 0; i < arr.length; i++){
            if(typeof arr[i] !== "number"){
                rej("Error! Incorrect array!")
                return;
            }
            result *= arr[i];
        }
        res(result);
    });
}

calcArrProduct([3, 4, 5])  
    .then(result => console.log(result))
    .catch(error => console.log(error));

calcArrProduct([5, "user2", 7, 12])  
    .then(result => console.log(result))
    .catch(error => console.log(error));