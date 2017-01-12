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

