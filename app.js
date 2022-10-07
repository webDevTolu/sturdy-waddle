var add = function (n1, n2) {
    return n1 + n2;
};
var printNumber = function (num) {
    console.log("Result", num);
};
printNumber(add(2, 12));
var customFunction;
customFunction = add;
console.log(customFunction(8, 8));
function webDevTolu(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
webDevTolu(8, 6, function (addedResult) {
    console.log(addedResult);
});
