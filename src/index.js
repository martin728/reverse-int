module.exports = function reverse(n) {
    let numbers = n.toString().split("");
    let res = "";
    for (let i = numbers.length - 1; i >= 0; i--) {
        res += numbers[i] == '-' ? '' : numbers[i];
    }
    return res;
}