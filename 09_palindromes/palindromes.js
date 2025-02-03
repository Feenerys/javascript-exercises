const palindromes = function (input) {
    const cleanString = input.replaceAll(",","").replaceAll(" ", "").replaceAll("!","").replaceAll(".","");
    const arr = cleanString.split("").map((a) => a.toLowerCase());
    const reverseArr = [...arr].reverse();
    return arr.toString() === reverseArr.toString()
};

// Do not edit below this line
module.exports = palindromes;
