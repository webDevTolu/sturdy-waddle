var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
var person = {
    name: "Tolu",
    age: 21,
    hobbies: ["Gaming", "Watching movies"],
    role: Role.ADMIN
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
var animal = {
    specie: "Dog",
    breed: "German Shepherd"
};
console.log(animal.breed);
var favouriteGames;
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
