//async-await function in js
//async-await is a way to write asynchronous code that looks like synchronous code.
//it makes it easier to read and understand, especially when dealing with multiple asynchronous operations.
//it also makes it easier to handle errors and exceptions.
//async-await is a combination of two keywords: async and await.
// async function getData(data) {
//     console.log("Fetching data...");

//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data received:", data);
//             // reject("an error occurred while processing data");
//             resolve(); // Uncomment this line to resolve instead of reject
            
//         }, 2000);
//     });
// }

// getData("Sample Data")
//     .then(() => {
//         console.log("Data processing complete.");
//     })
//     .catch((error) => { 
//         console.error("Error fetching data:", error);
//     });


    // Example 1: Basic async/await usage

// async function fetchNumber() {
//     console.log("Fetching number...");
//     // Simulating an asynchronous operation
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Number fetched.");
//             resolve(18);
//         }, 2000);
//     });
// }

//     async function showNumber() {
//         const num = await fetchNumber();
//         console.log("Fetched number:", num);
//     }
//     showNumber();

    // Example 2: Async/await with error handling
    // async function fetchWithError() {
    //     throw new Error("Something went wrong!");
    // }

    // async function handleError() {
    //     try {
    //         await fetchWithError();
    //     } catch (err) {
    //         console.error("Caught error:", err.message);
    //     }
    // }
    // handleError();

    // Example 3: Sequential async operations
    // async function fetchStep(step) {
    //     return new Promise(resolve => setTimeout(() => resolve(`Step ${step} done`), 1000));
    // }

    // async function runSteps() {
    //     const result1 = await fetchStep(1);
    //     console.log(result1);
    //     const result2 = await fetchStep(2);
    //     console.log(result2);
    //     const result3 = await fetchStep(3);
    //     console.log(result3);
    // }
    // runSteps();

    // // Example 4: Parallel async operations with Promise.all
    // async function fetchParallel(id) {
    //     return new Promise(resolve => setTimeout(() => resolve(`Result ${id}`), 500 + id * 200));
    // }

    // async function runParallel() {
    //     const results = await Promise.all([
    //         fetchParallel(1),
    //         fetchParallel(2),
    //         fetchParallel(3)
    //     ]);
    //     console.log("Parallel results:", results);
    // }
    // runParallel();