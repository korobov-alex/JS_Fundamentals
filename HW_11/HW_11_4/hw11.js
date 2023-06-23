//Promises part

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

function promisesDelay(){

    chain = Promise.resolve();

    for(let i = 0; i <= 10; i++){
        const randomTimeDelay = Math.floor(Math.random() * 5000);

        chain = chain
        .then(() => delay(i, randomTimeDelay))
        .then(console.log)
    }
}


promisesDelay();



//async\await part

const delay2 = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function asyncDelay(){
    for(let i = 0; i <= 10; i++){
        const randomTimeDelay = Math.floor(Math.random() * 5000);
        const result = await delay2(i, randomTimeDelay);
        console.log(result)
    }
}

asyncDelay();