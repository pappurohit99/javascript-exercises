const removeFromArray = function(arr, ...args) {
    for (const arg of args) {
        const foundIndex = arr.findIndex(el => el === arg);
        if (foundIndex > -1) {
            arr.splice(foundIndex, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
