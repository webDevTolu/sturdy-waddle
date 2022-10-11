"use strict";
const add = (n1, n2) => {
    return n1 + n2;
};
const printNumber = (num) => {
    console.log("Result", num);
};
printNumber(add(2, 12));
let customFunction;
customFunction = add;
console.log(customFunction(8, 8));
function webDevTolu(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
webDevTolu(8, 6, (addedResult) => {
    console.log(addedResult);
});
