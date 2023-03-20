const palindromes = function (/** @type {string} */ text) {
    let processed = text.trim(); // remove whitespaces
    processed = processed.toLowerCase(); // convert to lower case
    processed = processed.replace(/[^a-zA-Z0-9]+/g, '');
    const reversed = processed.split('').reverse().join('');
    return processed === reversed;
};

palindromes('A car, a man, a maraca.');
// Do not edit below this line
module.exports = palindromes;
