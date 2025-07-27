//what is asynchronus javascript?
//asynchronous javascript is a way to handle operations that take time to complete without blocking the main thread.
//it allows the program to continue executing while waiting for a response from an operation like a network request or a timer.
//asynchronous javascript is achieved using callbacks, promises, and async/await.
//javascript is single threaded
//javascript is synchronous 
//javascript is non-blocking
//javascript is event driven

function greet(){
    console.log("this fn is executed after 3 seconds");
    
}

setTimeout(() => {
    greet();
}, 3000);

console.log("welcome to part 8 of the advanced JavaScript series!");

for (let index = 0; index < 10; index++) {
  console.log(index);
    
}

