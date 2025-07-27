//promises in js are used to handle asynchronous operations in a more manageable way than callbacks.
//they allow you to write cleaner code and avoid callback hell.

// const promise =  () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = "Data fetched successfully!";
//             resolve(data);
//         }, 2000);
//     });
// }   
// //now we can use the promise in our code like this:
// promise().then((data) => {
//     console.log(data);      

// }).catch((error) => {
//     console.error("Error:", error); 
//     });


    // Let's make another simple promise example!
    // Imagine you ask your friend for a toy. If your friend gives you the toy, you are happy. If not, you are sad.

    // const askFriendForToy = () => {
    //     return new Promise((resolve, reject) => {
    //         const hasToy = false; // Let's pretend your friend has the toy!
    //         if (hasToy) {
    //             resolve("Yay! I got the toy!");
    //         } else {
    //             reject("Oh no! No toy for me.");
    //         }
    //     });
    // };

    // askFriendForToy()
    //     .then((message) => {
    //         console.log(message); // This runs if you get the toy!
    //     })
    //     .catch((error) => {
    //         console.log(error); // This runs if you don't get the toy.
    //     });

    // So, a promise is like asking for something. If you get it, you are happy (.then). If not, you are sad (.catch).

    // Promises can also be chained together to handle multiple asynchronous operations in sequence.
    // Let's chain promises like stacking building blocks!
    // First, we ask for a block, then we paint it, then we put a sticker on it.

    const getBlock = () => {
        console.log("Step 1: Asking for a block...");
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Step 1: Got the block!");
                resolve("🧱 Block");
            }, 4000);
        });
    };

    const paintBlock = (block) => {
        console.log("Step 2: Painting the block...");
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Step 2: Block painted!");
                resolve(block + " 🎨 Painted");
            }, 4000);
        });
    };

    const putSticker = (paintedBlock) => {
        console.log("Step 3: Putting a sticker on the block...");
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Step 3: Sticker put!");
                resolve(paintedBlock + " ⭐ Sticker");
            }, 5000);
        });
    };

    // Chaining the promises!
    getBlock()
        .then((block) => {
            console.log("Debug: Received from getBlock:", block);
            return paintBlock(block);
        })
        .then((paintedBlock) => {
            console.log("Debug: Received from paintBlock:", paintedBlock);
            return putSticker(paintedBlock);
        })
        .then((finalBlock) => {
            console.log("Debug: Received from putSticker:", finalBlock);
            console.log("Finished:", finalBlock);
        });
