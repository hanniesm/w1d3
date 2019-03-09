function characterIndex(string) {
    var outObject = {}

    for (var char in string) {
        if (string[char] !== ' ') {
            outObject[string[char]] = [];
        }
    }

    for (var char in string) {
        if (string[char] !== ' '){
        outObject[string[char]].push(char);
        }
    }

    console.log(outObject);
}

characterIndex('lighthouse in the house');

