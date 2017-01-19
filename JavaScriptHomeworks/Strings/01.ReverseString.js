function reverseString(args) {
    var i,
        arrayToReverse = args[0],
        len = arrayToReverse.length;
     
    var reversedArray = [];
    for(i = 0; i < len; i += 1) {
        reversedArray[i] = arrayToReverse[len - i - 1];
    }
    return reversedArray.join('');
}



/* Alrenative function

function reverseString(args) {
    var arr = args[0];
    return arr.split('').reverse().join('');
}

*/

// Description

// Write a JavaScript function that reverses a string.
// Input

//     The input will consist of an array containing one string

// Output

//     The output should be consisted of one line - the reversed string

// Constraints

//     Time limit: 0.2s
//     Memory limit: 16MB
