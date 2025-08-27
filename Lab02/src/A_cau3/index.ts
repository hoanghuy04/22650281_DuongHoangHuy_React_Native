//3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
function rejectPromise(): Promise<never> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            return reject(new Error("Something went wrong"))
        }, 1000);
    })
}

rejectPromise().catch(console.error);