function findMaxIncreasingSequence(args) {
    var arrayGiven = args[0].split('\n').map(Number),
        i,
        counter = 1,
        maxCounter = 0;

        for (i = 1; i < arrayGiven.length; i += 1) {
            if (arrayGiven[i] < arrayGiven[i + 1]) {
                counter += 1;
                if (counter > maxCounter) {
                    maxCounter = counter;
                }
            }
            else{
                counter = 1;
            }
        }
        return maxCounter;

}

// Write a program that finds the length of the maximal increasing sequence in an array of N integers.
// Input

//     On the first line you will receive the number N
//     On the next N lines the numbers of the array will be given

// Output

//     Print the length of the maximal increasing sequence

// Constraints

//     1 <= N <= 1024
//     Time limit: 0.1s
//     Memory limit: 16MB

// Sample tests
// Sample test 1
// Input

// ['8', '7', '3', '2', '3', '4', '2', '2', '4']

// Output

// 3
