# sturdy-waddle

learning Typescript

## Overview

Typescript adds:

- Types
- Next-gen JavaScript features(complied down for older browsers)
- Non-javaScript features like Interfaces or Generics
- Meta-programming features like Decorators
- Rich configuration options
- modern tooling that helps in non-typescript project

### Typescript Types

#### Core Types

- number
- string
- boolean (true/false)

```ts
function greet(name: string, age: number, isLoggedIn: boolean) {
  if (isLoggedIn) {
    return `Hello ${name}, you are ${age} years old`;
  } else {
    return "Pls Log in to access your dashboard";
  }
}
```

##### Type inference

This is when typescript determines the type of a variable by the value(s) initialized to it.

```ts
const age = 5; // typescript assigns the age variable to a number
const name = "Tolu"; // typescript assigns the name variable to a string
const isAdmin = true; // typescript assigns the isAdmin variable to a boolean
const greet = (name: string) => `Hello ${name}`; // typescript assigns the greet function to a string because it returns prop which is also a string
```

If the variable was not initialized to any value and was not assigned a type also, it set the variable type to `any` which means it can accept any of the core types if later used.

```ts
let age; // typescript assigns the age variable to type `**any**`
let fullName: string; // typescript assigns the fullName variable to type `string` because it assigned the type at the declaration.
```

- object `{name: string}`

```ts
const person: {
  name: string;
  age: number;
} = {
  name: "Tolu",
  age: 21,
};

// but it's best to let typescript infer your type:

const animal = {
  specie: "Dog",
  breed: "German Shepherd",
};
```

- array `[1, 2, 3]`, the types can be _flexible_ or **straight** for an array

  - flexible

  ```ts
  let favouriteGames: string[];
  const person = {
    name: "Tolu",
    age: 21,
    hobbies: ["Gaming", "Watching movies"],
  };
  // favouriteGames and person.hobbies are inferred type: array of strings, i.e the array can only contain string values

  let studentScores: number[];
  // studentScores is inferred type: array of number, i.e the array can only contain number values
  ```

  - straight

  ```ts
  let list: any[];
  // list array can contain strings, numbers, ...(all core types)
  ```

- tuple (**_fixed length and fixed type array_**)

  ```ts
  let role: [number, string];
  // this let the array type of role to be a length of 2 where the first element is a number and the second is a string
  ```

- enum `enum {NEW, OLD}`

  ```ts
  enum Role {
    ADMIN,
    USER,
  }
  // accessed like:
  const person = {
    name: "Tolu",
    age: 21,
    hobbies: ["Gaming", "Watching movies"],
    role: Role.ADMIN,
  };
  // where the type of role is Role with is an enum type
  ```

- any `*`

#### Union Types

Represented with the `|`

```ts
const variable: number | string;
```

#### Type Aliases

Define your custom type using the `type` keyword.

```ts
type MyType = number | string;
```

### Typescript Functions

```ts
const add = (n1: number, n2: number): number => {
  return n1 + n2;
};
```

> if it's not necessary, let typescript infer the type.

if the function does not return any value or have a return statement, the type inferred on the function would be type `void`

```ts
const printNumber = (num: number) => {
  console.log("Result", num);
};
```

#### Function Type

```ts
let customFunction: Function;
```

A function type is a type that describe a function and its parameter(s), it's created with `() => type`

```ts
const add = (n1: number, n2: number): number => {
  return n1 + n2;
};
let customFunction: (a: number, b: number) => number;
customFunction = add;

// hence, the add function must be of the same type to customFunction, i.e receives two parameters which are both numbers
```

> a parameter can also be a function type

```ts
function webDevTolu(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

webDevTolu(8, 6, (addedResult) => {
  console.log(addedResult);
});
```
