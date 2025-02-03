const findTheOldest = function(people) {
    return people.sort((aPerson, bPerson) => {
        const aAge = (aPerson.yearOfDeath?aPerson.yearOfDeath:new Date().getFullYear()) - aPerson.yearOfBirth;
        const bAge = (bPerson.yearOfDeath?bPerson.yearOfDeath:new Date().getFullYear()) - bPerson.yearOfBirth;
        return bAge - aAge
    })[0]

};

// Do not edit below this line
module.exports = findTheOldest;
