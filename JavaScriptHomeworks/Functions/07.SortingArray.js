function printSorted(args){
    var array = args[1].split(' ').map(Number);

    return sortArray(array).reverse().join(' ');


    function sortArray(numbersToSort) {
        var i,
        j,
        removed,
        position,
        smallestNum = Number.MAX_VALUE,
        len = numbersToSort.length;

      for (i = 0; i < len; i += 1) {
        for (j = i; j < len; j += 1) {
            if (numbersToSort[j] < smallestNum) {
                smallestNum = numbersToSort[j];
                position = j;
            }
        }
        numbersToSort.splice(position, 1);
        numbersToSort.unshift(smallestNum);
        smallestNum = Number.MAX_VALUE;
      }
       return numbersToSort;
    }

}


// Description

// Write a method that returns the maximal element in a portion of array of integers starting at given index. Using it write another method that sorts an array in ascending / descending order. Write a program that sorts a given array.
// Input

//     On the first line you will receive the number N - the size of the array
//     On the second line you will receive N numbers separated by spaces - the array

// Output

//     Print the sorted array
//         Elements must be separated by spaces

// Constraints

//     1 <= N <= 1024
//     Time limit: 0.2s
//     Memory limit: 16MB

// Sample tests
// Input 	Output
// 6
// 3 4 1 5 2 6 	1 2 3 4 5 6
// 10
// 36 10 1 34 28 38 31 27 30 20 	1 10 20 27 28 30 31 34 36 38