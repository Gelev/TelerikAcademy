function lexicographicallyCompare(args) {
    var words = args[0].split('\n'),
        word1 = words[0],
        word2 = words[1];

    if (word1 > word2) {
        return '>';
    } else if (word1 < word2) {
        return '<';
    } else {
        return '=';
    }
}


// Write a program that compares two char arrays lexicographically (letter by letter).
// Input

//     On the first line you will receive the first char array as a string
//     On the second line you will receive the second char array as a string

// Output

//     Print < if the first array is lexicographically smaller
//     Print > if the second array is lexicographically smaller
//     Print = if the arrays are equal

