const CURRENT_YEAR = 2023;
let maxAge = -Infinity;
let oldest = {};
const findTheOldest = function (people) {
    people.forEach(person => {
        if (!Object.prototype.hasOwnProperty.call(person, 'yearOfDeath')) {
            person.yearOfDeath = CURRENT_YEAR;
        }
        if (person.yearOfDeath - person.yearOfBirth > maxAge) {
            maxAge = person.yearOfDeath - person.yearOfBirth;
            oldest = person;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
