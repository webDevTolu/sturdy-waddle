const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const printNumber = (num: number): void => {
  console.log("Result", num);
};

printNumber(add(2, 12));

let customFunction: (a: number, b: number) => number;
customFunction = add;
console.log(customFunction(8, 8));

function webDevTolu(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

webDevTolu(8, 6, (addedResult) => {
  console.log(addedResult);
});
