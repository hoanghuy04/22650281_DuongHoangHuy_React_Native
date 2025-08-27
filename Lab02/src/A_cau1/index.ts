// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello Async");
  }, 2000);
});

promise.then(message => console.log(message));