// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
import {writeFile, readFile} from 'node:fs';
readFile('file.txt', 'utf-8', (err, data) => {
    if(err)throw err;
    let cleanData = data.replace(/\s+/g, ' ');
    writeFile('file.txt', cleanData, err => {
        if(err) throw err;
        console.log('Removed extra spaces and wrote to file!');
        readFile('file.txt', 'utf-8', (err, data) => {
            if(err) throw err;
            console.log(data);
        })
    });
})