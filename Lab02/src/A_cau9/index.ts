// 9. Write a Promise that reads an array after 1 second and filters even numbers.
const readArray = (): Promise<number[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        }, 1000);
    });
};

readArray().then((array) => {
    const evenNumbers = array.filter(num => num % 2 === 0);
    console.log(evenNumbers); 
});