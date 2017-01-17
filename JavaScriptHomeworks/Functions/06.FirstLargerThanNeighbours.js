function printIndex(args) {

    var numbersArr = args[1].split(' ').map(Number);

    return findIndex(numbersArr);

  function findIndex(someArray) {
        var len = someArray.length,
            index = -1,
            i;
        for (i = 0; i < len - 1; i += 1) {
            if (someArray[i] > someArray[i - 1] && someArray[i] > someArray[i + 1]) {
                index = i;   
            } 
        }
        return index;
    }
}

// Description

// Write a method that returns the index of the first element in array that is larger than its neighbours, or -1, if there is no such element.
// Input

//     On the first line you will receive the number N - the size of the array
//     On the second line you will receive N numbers sepated by spaces - the array

// Output

//     Print the index of the first element that is larger than its neighbours or -1 if none are

// Constraints

//     1 <= N <= 1024
//     Time limit: 0.2s
//     Memory limit: 16MB

// Sample tests
// Input 	Output
// 6
// -26 -25 -28 31 2 27 	1