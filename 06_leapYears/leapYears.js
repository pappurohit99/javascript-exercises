const leapYears = function(n) {
    if (typeof n !== "number") {
        return "ERROR";
    }

    return (n % 400 ===0) || (n % 4 === 0 && n % 100 !== 0);
};

// Do not edit below this line
module.exports = leapYears;
