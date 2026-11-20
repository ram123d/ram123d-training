'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
let sumpositive=0;
let sumnegative=0;
let sumzero=0;
const n=arr.length;
let avgpositive=0;
let avgzero=0;
let avgnegative=0;
arr.forEach(arr=>
{
    if(arr===0)
    {
        sumzero += 1;
    }
    else if(arr>0)
    {
        sumpositive +=1;
    }
    else
    {
        sumnegative +=1;
    }
});
 console.log((avgpositive=sumpositive/n).toFixed(6));
 console.log((avgnegative=sumnegative/n).toFixed(6));
 console.log((avgzero=sumzero/n).toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
