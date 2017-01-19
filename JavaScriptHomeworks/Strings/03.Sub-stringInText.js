function findSubstring(args) {
    var subString = args[0].toLowerCase(),
        sentence = args[1].toLowerCase(),
        i,
        len = sentence.length,
        index,
        counter = 0;
        
        for(i = 0; i < len; i += 1) {
            index = sentence.indexOf(subString, i);
            if (index === -1) {
                break;
            }
            counter += 1;
            i = index;
        }
        return counter;
}

// Description

// Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
// Input

//     The input will consist of an array containing one string

// Output

//     The output should be consisted of one line - the number of matches

// Constraints

//     Time limit: 0.2s
//     Memory limit: 16MB

// Sample tests
// Input

// [
//     'in',
//     'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
// ]

// Output

// 9

// Explanation

// We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.