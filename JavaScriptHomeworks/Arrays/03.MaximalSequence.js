function findMaxSequence(args) {
    var givenArray = args[0].split('\n').map(Number),
        counter = 1,
        i,
        maxCounter = 0;

        for (i = 1; i < givenArray.length; i += 1) {
            if (givenArray[i] === givenArray[i + 1]) {
                counter += 1;
                if (counter > maxCounter) {
                    maxCounter = counter;
                }
            }
            else {
                counter = 1;
            }
        }
        return maxCounter;
}


// Maximal sequence
// Description

// Write a program that finds the length of the maximal sequence of equal elements in an array of N integers.
// Input

//     On the first line you will receive the number N
//     On the next N lines the numbers of the array will be given

// Output

//     Print the length of the maximal sequence

// Constraints

//     1 <= N <= 1024
//     Time limit: 0.1s
//     Memory limit: 16MB

// Sample tests
// Sample test 1
// Input

// ['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']

// Output

// 3
