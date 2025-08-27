//11. Convert Exercise 1 into async/await.
// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
async function helloAsync(): Promise<void> {
    const message = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    })

    console.log(message);
};

helloAsync()

// 2. Write a function that returns a Promise resolving with the number 10 after 1 second.
async function getPromise(): Promise<void> {
    const message = await new Promise<number>((resolve) => {
        setTimeout(() => resolve(10), 1000);
    })

    console.log(message);
}
getPromise()

//3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
async function rejectPromise(): Promise<void> {
    try {
        const message = await new Promise<string>((resolve, reject) => {
            setTimeout(() => reject(new Error("Something went wrong")), 1000);
        })
        console.log(message);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}
rejectPromise()

// 4. Use .then() and .catch() to handle a Promise that returns a random number.
async function randomNumPromise(): Promise<number> {
    try {
        const randnum = await new Promise<number>((resolve, reject) => {
            const randnum = Math.random();

            if (randnum < 0.2)
                return reject(new Error(`The number is too small:  ${randnum}`));
            else
                return resolve(randnum);
        })
        return randnum;
    } catch (error) {
        throw new Error('Unknown error');
    }
}

randomNumPromise().then(console.log)
    .catch(er => {
        if (er instanceof Error) {
            console.error(er.message);
        }
    });


// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task
// done" after time ms.
async function simulateTask(time: number): Promise<string> {
    const message = await new Promise<string>((resolve) => {
        setTimeout(() => {
            return resolve("Task done")
        }, time);
    }
    )
    return message;
}
simulateTask(1500).then(console.log);

// 6. Use Promise.all() to run 3 simulated Promise in parallel and print the result.
async function runAllTasks() {
    const task1 = simulateTask(1000);
    const task2 = simulateTask(2000);
    const task3 = simulateTask(1500);
    const results = await Promise.all([task1, task2, task3]);
    console.log(results);
}
runAllTasks();

//7. Use Promise.race() to return whichever Promise resolves first.
async function raceTasks() {
    const promiseA = new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('Promise A resolved');
        }, 3000);
    });
    const promiseB = new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('Promise B resolved');
        }, 1000);
    });
    const promiseC = new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('Promise C resolved');
        }, 2000);
    });
    const result = await Promise.race([promiseA, promiseB, promiseC]);
    console.log(result);
}
raceTasks();

//8. Create a Promise chain: square the number 2, then double it, then add 5.
async function promiseChain() {
    const square = (num: number): Promise<number> => {  
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num * num);
            }, 1000);
        });
    }
    const double = (num: number): Promise<number> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num * 2);
            }, 1000);
        });
    }
    const addFive = (num: number): Promise<number> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num + 5);
            }, 1000);
        });
    }
    const squared = await square(2);
    const doubled = await double(squared);
    const result = await addFive(doubled);
    console.log(result);
}
promiseChain();

// 9. Write a Promise that reads an array after 1 second and filters even numbers.
async function readAndFilterArray() {
    const readArray = (): Promise<number[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            }, 1000);
        });
    }
    const array = await readArray();
    const evenNumbers = array.filter(num => num % 2 === 0);
    console.log(evenNumbers);
}
readAndFilterArray();

// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).
async function finallyPromise(): Promise<void> {
    try {
        const message = await new Promise<string>((resolve, reject) => {
            const success = Math.random() > 0.5;
            setTimeout(() => {
                if (success) {
                    resolve("Promise resolved successfully!");
                } else {
                    reject("Promise rejected!");
                }
            }, 1000);
        })
        console.log(message);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    } finally {
        console.log("Done");
    }
}
finallyPromise();

//12. Write an async function that calls simulateTask(2000) and logs the result.
async function callSimulateTask() {
    const result = await simulateTask(2000);
    console.log(`cau 12: ${result}`);
}
callSimulateTask();

//13. Handle errors using try/catch with async/await.
async function handleError() {
    try {
        const result = await new Promise<string>((resolve, reject) => {
            const success = Math.random() > 0.5;
            setTimeout(() => {
                if (success) {
                    resolve(`cau 13: Task completed successfully!`);
                } else {
                    reject(new Error("Task failed!"));
                }
            }, 1000);
        });
        console.log(result);
    } catch (error) {
            console.error("Error caught");
    }
}
handleError();

//14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
async function multiplyByThree(num: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`cau 14: ${num * 3}`);
        }, 1000);
    });
}
multiplyByThree(5).then(console.log);

//15. Call multiple async functions sequentially using await.
async function callSequentially() {
    const result1 = await multiplyByThree(2);
    console.log(result1);
    const result2 = await multiplyByThree(4);
    console.log(result2);
    const result3 = await multiplyByThree(6);
    console.log(result3);
}
callSequentially();

//16. Call multiple async functions in parallel using Promise.all().
async function callInParallel() {
    const promise1 = multiplyByThree(3);
    const promise2 = multiplyByThree(6);
    const promise3 = multiplyByThree(9);
    const results = await Promise.all([promise1, promise2, promise3]);
    console.log('cau 16:', results);
}
callInParallel();

// 17. Use for await...of to iterate over an array of Promises.
async function forAwaitOfExample() {
    const promises = [multiplyByThree(1), multiplyByThree(2), multiplyByThree(3)];
    for await (const result of promises) {
        console.log(result);
    }
}
forAwaitOfExample();

//18. Write an async function fetchUser(id) that simulates an API call (resolves a user
// object after 1 second).
interface User {
    id: number;
    name: string;
    email: string;
}
async function fetchUser(id: number): Promise<User> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                name: `User${id}`,
                email: `user${id}@example.com`
            });
        }, 1000);
    });
}
fetchUser(1).then(user => console.log('cau 18:', user));

// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each
// ID.
async function fetchUsers(ids: number[]): Promise<User[]> {
    const userPromises = ids.map(id => fetchUser(id));
    return Promise.all(userPromises);
}
fetchUsers([1, 2, 3]).then(users => console.log('cau 19:', users));

// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
async function fetchUserWithTimeout(id: number, timeout: number = 2000): Promise<User> {
    const fetchPromise = fetchUser(id);
    const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => {
            reject(new Error('Request timed out'));
        }, timeout);
    });
    return Promise.race([fetchPromise, timeoutPromise]);
}
fetchUserWithTimeout(1).then(user => console.log('cau 20:', user))
    .catch(error => console.error('cau 20:', error.message));