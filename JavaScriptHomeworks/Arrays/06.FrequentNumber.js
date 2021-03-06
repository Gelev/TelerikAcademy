function findFrequentNumber(args) {
    var i,
        j, 
        len,
        mostFrequentNum,
        currentNumber,
        count = 1,
        maxCount = 1,
        arrOfNums = args[0].split('\n').map(Number);
        arrOfNums.shift();
    
    for (i = 0, len = arrOfNums.length; i < len; i += 1) {
        currentNumber = arrOfNums[i];
        for (j = i + 1; j < len; j += 1) {
            if (currentNumber === arrOfNums[j]) {
              count += 1;
              if (count > maxCount) {
                maxCount = count;
                mostFrequentNum = currentNumber;
              }
            } 
        }
        count = 1; 
    }
    return mostFrequentNum + ' (' + maxCount + ' times)';
}

// Description

// Write a program that finds the most frequent number in an array of N elements.
// Input

//     On the first line you will receive the number N
//     On the next N lines the numbers of the array will be given

// Output

//     Print the most frequent number and how many time it is repeated
//         Output should be REPEATING_NUMBER (REPEATED_TIMES times)

// Constraints

//     1 <= N <= 1024
//     0 <= each number in the array <= 10000
//     There will be only one most frequent number
//     Time limit: 0.1s
//     Memory limit: 16MB

// Sample tests
// Sample test 1
// Input

// ['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']

// Output

// 4 (5 times)
