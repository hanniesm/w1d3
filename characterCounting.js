function countLetters(string) {
    var outObject = {}

    for (var char in string) {
        if (string[char] !== ' ') {
            outObject[string[char]] = 0;
        }
    }

    for (var char in string) {
        if (string[char] !== ' '){
        outObject[string[char]] += 1;
        }
    }

    console.log(outObject);
}

// countLetters('lighthouse in the house');

var string = process.argv[2];

countLetters(string);