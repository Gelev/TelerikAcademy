function extractContent(args) {
    var output = '';
    var avoid = /<.*?>/ig;

        for (var element of args){
            output += element.replace(avoid, '').trim();
        }
    return output;
}


// Description

// Write a function that extracts the content of a html page given as text. The function should return anything that is in a tag, without the tags.
// Input

//     The input will consist of an array of strings

// Output

//     The output should be consisted of one line - text inside tags

// Constraints

//     Time limit: 0.2s
//     Memory limit: 16MB

// Sample tests
// Input

// [
//     '<html>',
//     '  <head>',
//     '    <title>Sample site</title>',
//     '  </head>',
//     '  <body>',
//     '    <div>text',
//     '      <div>more text</div>',
//     '      and more...',
//     '    </div>',
//     '    in body',
//     '  </body>',
//     '</html>'
// ]

// Output

// Sample sitetextmore textand more...in body
