// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
import {writeFile, readFile} from 'node:fs';
writeFile('file.txt', 'Adding content to file', err => {
    if(err) throw err;
    //print the file after writing to it
    readFile('file.txt', 'utf-8', (err, data) => {
        if(err) throw err;
        console.log(data);
        console.log('File read!');
    });
    console.log('Reading file after writing to it');
})