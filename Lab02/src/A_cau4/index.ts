// 4. Use .then() and .catch() to handle a Promise that returns a random number.
function randomNumPromise(): Promise<number> {
    return new Promise((resolve, reject) => {
        const randnum = Math.random();

        if(randnum < 0.2)
            return reject(new Error(`The number is too small:  ${randnum}`));
        else 
            return resolve(randnum);
    })
}

randomNumPromise()
    .then(console.log)
    .catch(er => console.error(er.message))