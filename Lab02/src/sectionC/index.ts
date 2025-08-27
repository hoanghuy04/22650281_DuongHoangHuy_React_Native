// 21. Use fetch to get data from a public API (e.g.,
// https://jsonplaceholder.typicode.com/todos/1).
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log('cau 21:', data))
    .catch(error => console.error('Error fetching data:', error));

//22. Call the API multiple times and log the results.
async function fetchMultiple() {
    const ids = [1, 2, 3];
    const promises = ids.map(id =>
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.json())
    );
    const results = await Promise.all(promises);
    console.log('cau 22:', results);
}
fetchMultiple();

//23. Write an async function that fetches a list of todos and filters out those that are not
// completed.
async function fetchAndFilterTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    const completedTodos = todos.filter((todo: { completed: boolean }) => todo.completed);
    console.log('cau 23:', completedTodos);
}
fetchAndFilterTodos();

//24. Write an async function postData() that sends a POST request to a test API.
async function postData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        })
    });
    const data = await response.json();
    console.log('cau 24:', data);
}
postData();

//25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs
// when done.
async function downloadFile() {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            console.log('cau 25: File downloaded');
            resolve();
        }, 3000);
    });
}
downloadFile();

//26. Use async/await with setTimeout to simulate a 5-second wait.\
async function waitFiveSeconds() {
    await new Promise<void>((resolve) => {
        setTimeout(() => {
            console.log('cau 26: Waited 5 seconds');
            resolve();
        }, 5000);
    });
}
waitFiveSeconds();