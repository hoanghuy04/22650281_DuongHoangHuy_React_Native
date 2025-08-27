//7. Use Promise.race() to return whichever Promise resolves first.
const promiseA = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise A resolved');
    }, 3000);
});
const promiseB = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise B resolved');
    }, 1000);
});
const promiseC = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise C resolved');
    }, 2000);
});
Promise.race([promiseA, promiseB, promiseC]).then((message) => {
    console.log(message);
});