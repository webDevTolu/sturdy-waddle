function add(num1: number, num2: number) {
  return num1 + num2;
}

const result = add(4, 5);
console.log({ result });

function greet(name: string) {
  return `Hello ${name}`;
}

console.log(greet("webDevTolu"));

let age;
let fullName: string;
