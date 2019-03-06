function countLetters(string) {
    var outObject = {}
    var uniqueChar = '';

    for (var char in string) {
        if (uniqueChar.indexOf(char) === -1 && string[char] !== ' ') {
            outObject[string[char]] = 0;
        }
    }

    for (var char in string) {
        if (string[char] !== ' '){
        outObject[string[char]] += 1;
        }
    }

    var instances = 0;

    console.log(outObject);
}

countLetters('lighthouse in the house');