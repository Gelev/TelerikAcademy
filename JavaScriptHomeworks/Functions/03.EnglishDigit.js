function lastDigitAsWord(args) {
    var lastDigit = args % 10;
    switch (lastDigit) {
    case 1: return 'one';
    case 2: return 'two';
    case 3: return 'three';
    case 4: return 'four';
    case 5: return 'five';
    case 6: return 'six';
    case 7: return 'seven';
    case 8: return 'eight';
    case 9: return 'nine';
    default: return 'zero';

    }   
}


// Description

// Write a method that returns the last digit of given integer as an English word. Write a program that reads a number and prints the result of the method.
// Input

//     On the first line you will receive a number

// Output

//     Print the last digit of the number as an English word

// Constraints

//     Time limit: 0.2s
//     Memory limit: 16MB

// Sample tests
// Input 	Output
// 42 	two