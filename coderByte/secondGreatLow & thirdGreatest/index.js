// Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers,
// respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98.
// The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!

/**
 * @return {string}
 */
function SecondGreatLow(arr) {

    const sortArr = arr.sort((a,b) => {
        return a - b;
    });

    if (sortArr.length < 2) {
        return sortArr[0] + " " + sortArr[0];
    } else {
        return sortArr[1] + " " + sortArr[sortArr.length - 2];
    }
}

function ThirdGreatest(strArr) {

    return strArr.sort((a,b) => {
        return b.length - a.length
    })[2]
}
