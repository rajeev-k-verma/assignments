// make a counter that counts from 0 to 10 and logs the current count to the console every second
let counter = 0;
setInterval(() => {
  if (counter <= 10) 
    console.log(counter++);
}, 1000);
console.log('Counter started')

