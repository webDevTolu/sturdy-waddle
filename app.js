"use strict";
let userInput;
userInput = 5;
userInput = "Tolu";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError("An error occurred", 500);
console.log(result);
