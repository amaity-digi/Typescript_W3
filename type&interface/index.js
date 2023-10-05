//1. Type Aliases
// Type Aliases allow defining types with a custom name.
// type aliases can be used primitive , object and array as well.
var carName = "Mariti";
console.log("1", carName);
var purchaseCar = 2022;
console.log("2", purchaseCar);
var car = {
    carName: "Omni"
};
console.log("3", car);
var stuedent = {
    name: "Moni",
    id: 1012
};
console.log("4", stuedent);
// TypeScript Union Types
// Union types are used when a value can be more than a single type.
var description = "My Roll No is ".concat(101);
var description1 = 10;
console.log("5", description1, "6", typeof (description1));
console.log("7", description, "8", typeof (description));
// TypeScript Functions
// The type of the value returned by the function can be explicitly defined , which is here number
function getMonthCount() {
    return new Date().getMonth();
}
console.log("9", getMonthCount());
// Void Return Type
// The type void can be used to indicate a function doesn't return any value
function HelloWorld() {
    console.log("JS");
}
HelloWorld();
// multiply
function multiplication(num1, num2) {
    return num1 * num2;
}
console.log("Multiple", multiplication(10, 5));
// Optional Parameters
// Here ? operator marks as optional
function add(num1, num2, num3) {
    return num1 + num2 + (num3 || 0);
}
console.log("Adding", add(10, 5));
// Default Parameters
// the default value goes after the type annotation.
function pow(value, power) {
    if (power === void 0) { power = 3; }
    return Math.pow(value, power);
}
console.log(pow(2));
// Named Parameters ??? Doubt??
// Rest Parameters
function addingRest(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (num1, num2) { return num1 + num2; }, 0);
}
console.log("10", addingRest(10, 20, 5, 5, 2));
// TypeScript Casting
// Casting is the process of overriding a type.
// Casting with as
var name1 = "AJ";
console.log("length", name1.length, "Type", typeof (name1));
// Casting with <> 
// both are same , <> and as
var cast = 100;
console.log("13", cast, "type check", typeof (cast));
