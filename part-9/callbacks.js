//  function getData(data, getNextData){
    
//     console.log("Fetching data...");
    
//     setTimeout(() => {
//         console.log("Data received:", data);
//         getNextData();
//     }, 2000);
//  }


 //nested callbacks
// this is an example of nested callbacks where each callback waits for the previous one to complete
//this also arises the problem of callback hell, where the code becomes difficult to read and maintain
//to avoid callback hell, we can use promises or async/await


//  getData("manish", () => {
//     getData("loves", () => {
//         getData("you - 3000", () => {
//             console.log("All data received!");
//         })
//     })
// });


// Async/Await version
function getDataAsync(data) {
    return new Promise((resolve) => {
        console.log("Fetching data...");
        setTimeout(() => {
            console.log("Data received:", data);
            resolve();
        }, 2000);
    });
}

async function fetchAllData() {
    await getDataAsync("manish");
    await getDataAsync("loves");
    await getDataAsync("you - 3000");
    console.log("All data received!");
}

fetchAllData();
