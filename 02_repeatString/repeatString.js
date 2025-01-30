const repeatString = function(word, counts) {
    if (counts < 0) {
        return "ERROR";
    }
    
    output = "";
    for (let i = 0; i < counts; i++) {
        output = output + word;
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
