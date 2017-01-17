function checkIfLarger(args) {
    var numbers = args[1].split(' ').map(Number),
        i,
        counter = 0;

        for (i = 0; i < numbers.length; i += 1) {
            if (i !== 0 && i !== numbers.length) {
                if ((numbers[i] > numbers[i - 1]) && (numbers[i] > numbers[i + 1])) {
                    counter++;
                }
            }
        }
        return counter;
}

// Description

// Write a method that checks if the element at given position in given array of integers is larger than its two neighbours (when such exist). Write program that reads an array of numbers and prints how many of them are larger than their neighbours.
// Input

//     On the first line you will receive the number N - the size of the array
//     On the second line you will receive N numbers separated by spaces - the array

// Output

//     Print how many numbers in the array are larger than their neighbours

// Constraints

//     1 <= N <= 1024
//     Time limit: 0.2s
//     Memory limit: 16MB

// Sample tests
// Input 	Output
// 6
// -26 -25 -28 31 2 27 	2