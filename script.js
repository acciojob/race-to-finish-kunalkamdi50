// window.promises = [];
// Define an array of five promises, each of which resolves with a random time between 1 and 5 seconds
// Create an array of five promises that each resolve with a random time between 1 and 5 seconds
const promises = Array.from({length: 5}, () => 
  new Promise(resolve => setTimeout(() => {
    const result = Math.floor(Math.random() * 5) + 1;
    resolve(result);
  }, Math.floor(Math.random() * 5000) + 1000))
);

// Use Promise.any to wait for the first promise to resolve, and then print its result to the div of id output
Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `The first promise to resolve returned: ${result}`;
  })
  .catch(error => {
    console.log(error); // This block will only execute if all of the promises reject.
  });


// Do not change the code above this
// add your promises to the array `promises`
