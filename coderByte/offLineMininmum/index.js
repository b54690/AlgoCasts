/**
 * @return {string}
 */
function OffLineMinimum(strArr) {
    let numbers = [];
    let outputs = [];

    //** if a number is found store in numbers **//

    for (let i =0; i < strArr.length; i++) {
        if (strArr[i] !== "E") {
            numbers.push(parseInt(strArr[i]));
        }

        // if an E is encountered remove the smallest number
        // from nums and store it in the outputs array

        //Math.min retrieves the smallest number from the numbers array
        //The splice() removes one element from indexOf smallest number in the numbers array

        else {
            let smallest = Math.min.apply(null, numbers);
            numbers.splice(numbers.indexOf(smallest), 1);
            outputs.push(smallest);
        }
    }

    return outputs.toLocaleString();
}

OffLineMinimum(["1","2","E","4","E","3","E"]);



/**
 * @return {string}
 */
function OffLineMinimum(strArr) {
    const numbers = get_numbers(strArr.toString());
    const eLetters = get_e(strArr.toString());

    return numbers.slice(0, eLetters.length).toLocaleString();
}

function get_numbers(input) {
    return input.match(/[0-9]+/g);
}

function get_e(input) {
    return input.match(/[E]+/g);
}

OffLineMinimum(["1","2","E","4","E","3","E"]);
