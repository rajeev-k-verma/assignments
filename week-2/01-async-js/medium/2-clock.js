// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// use inbuilt function to find starting time
let startTime = new Date();
let hours = startTime.getHours();
let minutes = startTime.getMinutes();
let seconds = startTime.getSeconds();
setInterval(() => {
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
    }
    if(minutes == 60){
        minutes = 0;
        hours++;
    }
    if(hours == 24){
        hours = 0;
    }
    console.log(`${hours} : ${minutes} : ${seconds}`);
    if(hours > 12)console.log(`${hours-12} : ${minutes} : ${seconds} PM`);
    else console.log(`${hours} : ${minutes} : ${seconds} AM`);
}, 1000);