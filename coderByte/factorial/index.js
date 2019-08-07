/**
 * @return {number}
 */
function FirstFactorial(num) {

    if (num === 0 || num === 1) {
        return 1;
    }
    else {
        return num * FirstFactorial(num - 1);
    }
}

FirstFactorial(10);


/**
 * @return {number}
 */
function FirstFactorial(num) {

    let factorial = 1;
    for (let i = 1; i <= num; i++) {

        factorial = factorial * i;
    }
    return factorial;
}

FirstFactorial(4);
