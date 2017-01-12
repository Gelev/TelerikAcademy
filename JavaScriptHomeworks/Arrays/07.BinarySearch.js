function binarySearch(arr) {
    var startIndex, endIndex, currIndex, currNum,
      numbers = arr[0].split('\n').map(Number);
      numbers.shift();
      searchedNum = numbers.pop();
      startIndex = 0;
      endIndex = numbers.length - 1;

    while(startIndex <= endIndex){
      currIndex = (startIndex + endIndex) / 2 | 0;
      currNum = numbers[currIndex];

      if (numbers[startIndex] > searchedNum || numbers[endIndex] < searchedNum) {
        return -1;
      } else if (currNum > searchedNum) {
        endIndex = currIndex - 1;
      } else if (currNum < searchedNum) {
        startIndex = currIndex + 1;
      } else if (currNum === searchedNum){
        return currIndex;
      }       
    }
}

// Description

// Write a program that finds the index of given element X in a sorted array of N integers by using the Binary search algorithm.
// Input

//     On the first line you will receive the number N
//     On the next N lines the numbers of the array will be given
//     On the last line you will receive the number X

// Output

//     Print the index where X is in the array
//         If there is more than one occurence print the first one
//         If there are no occurences print -1

// Constraints

//     1 <= N <= 1024
//     Time limit: 0.1s
//     Memory limit: 16MB

// Sample tests
// Sample test 1
// Input

// ['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']

// Output

// 6
