//1. Type Aliases
// Type Aliases allow defining types with a custom name.
// type aliases can be used primitive , object and array as well.

// string
type CarName = string;

const carName: CarName = "Mariti";
console.log("1", carName);

// number
type PurchaseCar = number;
const purchaseCar: PurchaseCar = 2022;
console.log("2", purchaseCar);

//object
type CarType = {
    carName: CarName
}

const car: CarType = {
    carName: "Omni"
}
console.log("3", car);

// Interfaces
// Interfaces are similar to type aliases, except it only apply to object types.

interface Student {
   name: string,
   id: number
}

const stuedent: Student = {
    name: "Moni",
    id: 1012
}
console.log("4", stuedent);

// TypeScript Union Types
// Union types are used when a value can be more than a single type.
let description: string | number = `My Roll No is ${101}`;
let description1: string | number = 10;
console.log("5", description1, "6", typeof(description1));
console.log("7", description, "8", typeof(description));

// TypeScript Functions

// The type of the value returned by the function can be explicitly defined , which is here number
function getMonthCount(): number {
    return new Date().getMonth();
  }
console.log("9",getMonthCount());

// Void Return Type
// The type void can be used to indicate a function doesn't return any value

function HelloWorld(): void {
 console.log("JS")
}
HelloWorld();

// multiply
function multiplication(num1: number, num2: number){
    return num1 * num2;
}
console.log("Multiple", multiplication(10, 5));

// Optional Parameters
// Here ? operator marks as optional
function add (num1: number, num2: number, num3?: number){
    return num1 + num2 + (num3 || 0);
}
console.log("Adding", add(10, 5));

// Default Parameters
// the default value goes after the type annotation.
function pow(value: number, power: number = 3) {
    return value ** power;
  }
  
console.log(pow(2));

// Named Parameters ??? Doubt??

// Rest Parameters
function addingRest(a: number, b: number, ...rest: number[]){
    return a + b + rest.reduce((num1, num2) => num1 + num2, 0);
}

console.log("10", addingRest(10,20,5,5,2));

// TypeScript Casting
// Casting is the process of overriding a type.

// Casting with as
let name1: unknown = "AJ";
console.log("length", (name1 as string).length, "Type", typeof(name1));

// Casting with <> 
// both are same , <> and as
let cast: any = 100;
console.log("13", <number> cast, "type check", typeof(cast));
