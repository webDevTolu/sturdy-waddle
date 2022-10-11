"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
const person = {
    name: "Tolu",
    age: 21,
    hobbies: ["Gaming", "Watching movies"],
    role: Role.ADMIN,
};
person.role === Role.ADMIN
    ? console.log("Welcome Admin")
    : console.log("Welcome User");
console.log(person.name);
const animal = {
    specie: "Dog",
    breed: "German Shepherd",
};
console.log(animal.breed);
let favouriteGames;
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
