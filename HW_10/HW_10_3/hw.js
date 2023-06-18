function mul(...numbers) {
    return numbers.reduce(function(acc, cur) {
        if(Number.isInteger(cur)) acc += cur;
        return acc
    }, 0)
 }
 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0