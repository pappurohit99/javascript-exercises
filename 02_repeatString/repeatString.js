const repeatString = function(text, n) {
    return n >= 0 ? new Array(n).fill(text).join('') : 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
