function checkBrackets(args) {
    var i,
        arr = args[0],
        len = arr.length,
        openBracketsCount = 0,
        closingBracketsCount = 0;

    for (i = 0; i < len; i += 1) {
        if (arr[i] === '(') {
            openBracketsCount += 1;
        } else if (arr[i] === ')') {
            closingBracketsCount += 1;
        }
    }

    if (openBracketsCount === closingBracketsCount) {
        return 'Correct';
    } else {
        return 'Incorrect';
    }
}

// Description

// Write a JavaScript function to check if in a given expression the brackets are put correctly.
// Input

//     The input will consist of an array containing a string

// Output

//     The output should be consisted of one line
//         Correct or Incorrect

// Constraints

//     Time limit: 0.2s
//     Memory limit: 16MB

// Sample tests
// Sample Test 1
// Input

// [ '((a+b)/5-d)' ]

// Output

// Correct

// Sample Test 2
// Input

// [ ')(a+b))' ]

// Output

// Incorrect
