// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task
// done" after time ms.

function simulateTask(time: number): Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve("Task done")
        }, time);
    })
}

simulateTask(1500).then(console.log);