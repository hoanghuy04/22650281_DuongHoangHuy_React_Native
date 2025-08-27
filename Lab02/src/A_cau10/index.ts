// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).
const p: Promise<string> = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }, 1000);
});
p.finally(() => {
    console.log("Done");
});