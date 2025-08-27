//8. Create a Promise chain: square the number 2, then double it, then add 5.
const square = (num: number): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num);
        }, 1000);
    });
};
const double = (num: number): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 1000);
    });
};
const addFive = (num: number): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num + 5);
        }, 1000);
    });
};
square(2)
    .then((squared) => double(squared))
    .then((doubled) => addFive(doubled))
    .then((result) => {
        console.log(result); 
    });
    