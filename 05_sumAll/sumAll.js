const sumAll = function (beg, end) {
    if (!(typeof beg === "number" && typeof end === "number")) {
        return "ERROR";
    }
    if (beg < 0 || end < 0) {
        return "ERROR";
    }

    const start = Math.min(beg, end);
    const finish = Math.max(beg, end);
    let sum = start;
    for (let idx = start + 1; idx <= finish; idx++) {
        sum += idx;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
