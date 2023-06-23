function getPromise(string, delay){
    return new Promise(function(res, rej){
        setTimeout(function(){
            res(string);
        }, delay);
    });
}

getPromise("some text after 2 sec", 2000).then(function(data) {
    console.log(data);        
  });