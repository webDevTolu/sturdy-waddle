let userInput: unknown;

userInput = 5;
userInput = "Tolu";

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
const result = generateError("An error occurred", 500);
console.log(result);

// this is a comment
