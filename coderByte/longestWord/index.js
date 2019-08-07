/**
 * @return {string}
 */
function LongestWord(sen) {
    let words = {};

    const splitWords = sen.split(' ');

    for (let word of splitWords) {
        if (!words[word]) {
            words[word] = word.length;
        }
    }

    return Object.keys(words).reduce((a,b) => {
        if (words[a] === words[b]) {
            return a;
        }
        else if (words[a] > words[b]) {
            return a;
        }
        else return b;
    })
}

LongestWord("I love dogs");
