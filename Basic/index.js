//1. What is TypeScript?
// JavaScript is a dynamically or loosely type language. but 
// TypeScript is a syntactic superset of JavaScript which add static typing.
// TypeScript add syntax on top of JavaScript , It allow developers to add types.
//2. Why Should I used TypeScript???
// JavaScript is a loosely type language. It can be defficult to understand what types of data we are passing.
// So TypeScript allows specifying the types of data being passed.
// TypeScript is providing an error at the time of run time.
//3.  TypeScript Simple Types??
// TypeScript provides some simple types(primitives)
// There are three main primitives in JS and TS
// 1. boolean - true and false value.
// 2. number - number and floating point values.
// 3. string - text values.
//4. Type assignment??
// There are two main ways Typescript assigns a type:
// 1. Explicit    2. Implicit
// Explicit Type --> We are assign a type. example: let name: string = "Aj";
// Implicit Type --> will guess the type based on assign values. example: let age = 20;
var firstName = "Aj";
console.log("1", firstName);
//5. Any ??
// any is a type that disables type checking and effectively allows all types to be used.
var value = true;
console.log("2", value);
//6. unknown???
// unknown is a similar to any, but safer alternative to any.
var num = 1;
num = "AJeet";
console.log("3", num);
//7. TS Array??
var arr = [];
arr.push("Moni");
//arr.push(72); // Error. Argument of type 'number' is not assignable to parameter of type 'string'.
console.log("4", arr);
//8. Readonly ??
// readonly keyword can prevent arrays from being changed.
var names = ["Rahul"];
//names.push("Jaki"); // Property 'push' does not exist on type 'readonly string[]'
//9. Inference??
// TypeScript can infer the type of an array if it has values.
var number1 = [21, 43, 76];
number1.push(78);
//number1.push("John"); // getting error Argument of type 'string' is not assignable to parameter of type .
console.log("5", number1);
//10. TypeScript Tuples??
// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
var tuples;
tuples = [true, "Aj", 87];
console.log("6", tuples);
var tuples1;
// initialized incorrectly that throws error.
//tuples1 = [true, "Aj", 87];
//console.log("6", tuples1);
//11. Readonly Tuple ??
// Tuples only have strongly defined types for the initial values:
var readonlyTuple = [5, true, 'The Real Coder'];
// throws error as it is readonly.
//readonlyTuple.push('Coding');
//12. Destructuring Tuples??
// tuples are arrays we can also destructure.
var point = [5.2, 1.3];
var a = point[0], b = point[1];
console.log("7", a, b);
// TypeScript Object Types???
var student = {
    name: "AJ",
    rollNo: 101,
    stream: "CSE"
};
console.log("8", student);
// Type Inference
var employee = {
    empId: 1011,
    fullName: "name"
};
//employee.empId = "22"; // Error:  Type 'string' is not assignable to type 'number'
employee.fullName = "Bikash";
console.log("9", employee);
// TypeScript Enums??
// enum is a special class that represents a group of constants.
var days;
(function (days) {
    days["sunday"] = "Sunday";
    days["monday"] = "Monday";
})(days || (days = {}));
console.log("10", days.sunday);
var numric;
(function (numric) {
    numric[numric["west"] = 1] = "west";
    numric[numric["east"] = 2] = "east";
    numric[numric["south"] = 3] = "south";
})(numric || (numric = {}));
console.log("11", numric.west);
//we can set the value of the first numeric enum and have it auto increment from that.
console.log("12", numric.south);
var obj = {
    name1: "Aj",
    rollNo: 101
};
var name1 = obj.name1;
name1 = "a";
console.log("12", name1);
var graph = [55.2, 41.3];
var x = graph[0], y = graph[1];
