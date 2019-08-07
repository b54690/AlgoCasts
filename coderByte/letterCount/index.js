// Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters.
// For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's.
// If there are no words with repeating letters return -1. Words will be separated by spaces.

/**
 * @return {number}
 */
function LetterCountI(str) {
    const word = str.split(' ');
    let count = 1;
    let maxCount = 0;
    let newArr = [];

    for (let i =0; i < word.length; i++) {
        const chars = word[i].split("").sort();

        for (let j =0; j < chars.length; j++) {
            if (chars[j] === chars[j+1]) {
                count++
            } else if (count > maxCount) {
                maxCount = count;
                count = 1;
            }
        }
        newArr.push([word[i], maxCount]);
        maxCount = 0;
    }
    newArr.sort(function(a,b) {
        return b[1] - a[1];
    });

    if (newArr[0][1] === 1) {
        return -1;
    } else {
        return newArr[0][0];
    }
}
