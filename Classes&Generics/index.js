// TypeScript Classes
// TypeScript adds types and visibility modifiers to javascript classes.
var game = {};
var result = game.x = 100;
console.log(result);
var myCar = {
    make: 'Yehama',
    model: 'Bukati',
    year: 2023
};
console.log("car: ", myCar);
//Record:
// Record is a shortcut to defining an object type with a specific key type and value type
var nameEmpId = {
    'Ajoy': 11,
    'Babul': 21
};
console.log("4", nameEmpId);
// TypeScript Classes:
// TypeScript adds types and visibility modifiers to JavaScript classes
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var student = new Student();
student.name = "AJ";
console.log("5", student);
// Members: Visibility:
// There are three main visibility modifiers in TypeScript.
//public - (default) allows access to the class member from anywhere
//private - only allows access to the class member from within the class
//protected - allows access to the class member from itself and any classes that inherit it,
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Faruk");
console.log(person.getName(), "6");
//console.log("private", Person.name); // it's not accesable outside class as well.
// Readonly
//  the readonly keyword can prevent class members from being changed.
var PersonObj = /** @class */ (function () {
    function PersonObj(name) {
        this.name = name;
    }
    PersonObj.prototype.getName = function () {
        return this.name;
    };
    return PersonObj;
}());
var personObj = new PersonObj("Rajesh");
console.log(personObj.getName());
