module.exports = function reverse (n) {
    return (n>0) ? +JSON.stringify(n).split("").reverse().join("") : +JSON.stringify(Math.abs(n)).split("").reverse().join("");
}
