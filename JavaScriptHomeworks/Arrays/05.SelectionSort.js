function selectionSort(args) {
    var arrayGiven = args[0].split('\n').map(Number),
        i,
        j,
        position,
        smallestNum = Number.MAX_VALUE;

        for (i = 0; i < arrayGiven.length; i += 1) {
            for (j = i + 1; j < arrayGiven.length; j += 1) {
                if (arrayGiven[j] < smallestNum) {
                    smallestNum = arrayGiven[j];
                    position = j;
                }
            }
            arrayGiven.splice(position, 1);
            arrayGiven.unshift(smallestNum);
            smallestNum = Number.MAX_VALUE;
        }
        arrayGiven.shift();
        arrayGiven.reverse();
        return arrayGiven.join('\n');
}



// Description

// Sorting an array means to arrange its elements in increasing order. Write a program to sort an array. Use the Selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.
// Input

//     On the first line you will receive the number N
//     On the next N lines the numbers of the array will be given

// Output

//     Print the sorted array
//         Each number should be on a new line

// Constraints

//     1 <= N <= 1024
//     Time limit: 0.1s
//     Memory limit: 16MB

// Sample tests
// Sample test 1
// Input

// ['6', '3', '4', '1', '5', '2', '6']

// Output

// 1
// 2
// 3
// 4
// 5
// 6

// Sample test 2
// Input

// ['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']

// Output

// 1
// 10
// 20
// 27
// 28
// 30
// 31
// 34
// 36
// 38
