// 6. Use Promise.all() to run 3 simulated Promise in parallel and print the result.
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000);
});
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 2000);
});
const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 1500);
});
Promise.all([promise1, promise2, promise3]).then((results) => {
    console.log(results);
});
