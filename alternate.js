'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {

    // Checking to make sure that the file content is not 
    //  less than the specified length
    if (undefined !== s && s.length) {

        let result = "";

        // Looping through the words on each line and comparing each character 
        //  with the next character following it
        for (let cha = -1; cha < s.length; cha++) {
            if (s[cha] === s[cha + 1]) {
                result += s.slice(s[cha], 1);
            }

        }

        // Initializing and counting the number of deletions made per line
        let numberOfDeletions = [];
        numberOfDeletions += result.length;

        result = "";

        return numberOfDeletions;

    } else {

        return "The line count is more than the actual lines in the file";

    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = alternatingCharacters(s);

        ws.write(result + "\n");
    }

    ws.end();
}
