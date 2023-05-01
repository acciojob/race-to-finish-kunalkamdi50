// window.promises = [];
// Define an array of five promises, each of which resolves with a random time between 1 and 5 seconds
// Create an array of five promises that each resolve with a random time between 1 and 5 seconds
// Define an array of five promises, each of which resolves with a random time between 1 and 5 seconds
const promises = [
  new Promise(resolve => setTimeout(() => resolve("Promise 1 resolved"), Math.floor(Math.random() * 5000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve("Promise 2 resolved"), Math.floor(Math.random() * 5000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve("Promise 3 resolved"), Math.floor(Math.random() * 5000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve("Promise 4 resolved"), Math.floor(Math.random() * 5000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve("Promise 5 resolved"), Math.floor(Math.random() * 5000 + 1000))
];

// Use Promise.any to wait for the first promise to resolve, and then print its result to the div of id output.
Promise.any(promises)
  .then(result) => {
     document.getElementById("output").innerText = result;
  })
  



// Do not change the code above this
// add your promises to the array `promises`
