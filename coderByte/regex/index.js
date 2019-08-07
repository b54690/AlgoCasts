function get_numbers(input) {
    return input.match(/[0-9]+/g);
}

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
    //  g makes sure that all expressions are checked
    // i (insensitive) ensure we look at all chars regardless of case
}

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split("").sort().join("");
}
