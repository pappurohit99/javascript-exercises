const fibMap = [1, 1];

const fibonacci = function (number) {
    number = Number(number);
    if (number < 1) {
        return 'OOPS';
    }

    // if (number === 1 || number === 2) {
    //     return 1;
    // }
    // return fibonacci(number - 1) + fibonacci(number - 2);
    if (fibMap.length < number) {
        const fibVal = fibonacci(number - 1) + fibonacci(number - 2);
        fibMap[number - 1] = fibVal;
    }
    return fibMap[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
