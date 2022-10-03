enum Role {
  ADMIN,
  USER,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Tolu",
  age: 21,
  hobbies: ["Gaming", "Watching movies"],
  role: Role.ADMIN,
};

// const person = {
//   name: "Tolu",
//   age: 21,
//   hobbies: ["Gaming", "Watching movies"],
//   role: Role.ADMIN,
// };

person.role === Role.ADMIN
  ? console.log("Welcome Admin")
  : console.log("Welcome User");

console.log(person.name);

const animal = {
  specie: "Dog",
  breed: "German Shepherd",
};

console.log(animal.breed);

let favouriteGames: string[];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
