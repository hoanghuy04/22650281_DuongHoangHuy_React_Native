// 2. Write a function that returns a Promise resolving with the number 10 after 1 second.
function getPromise(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 1000);
    })
}

getPromise().then(message => console.log(message));