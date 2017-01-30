function replaceTags(args) {
    var tag = new RegExp('<a href="(.*?)">(.*?)</a>', "g");

    var newTag = args[0].replace(tag, function (none, href, content) {

        return '[' + content + '](' + href + ')';
    });

    console.log(newTag);
}


// Replace tags
// Description

// Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a> with corresponding tags [TEXT](URL).
// Input

//     The input will consist of an array containing one string

// Output

//     The output should be consisted of one line

// Constraints

//     Time limit: 0.2s
//     Memory limit: 16MB

// Sample tests
// Input

// [ '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>' ]

// Output

// <p>Please visit [our site](http://academy.telerik.com) to choose a training course. Also visit [our forum](www.devbg.org) to discuss the courses.</p>
