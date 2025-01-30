const sumAll = function(a, b) {
    if (!Number.isInteger(a) || 
        !Number.isInteger(b) ||
        a < 0 ||
        b < 0) {return "ERROR"} 
    if (a > b) {[b, a] = [a, b]}
    let sum = 0;
    while (a <= b) {
        sum += a;
        a++;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
