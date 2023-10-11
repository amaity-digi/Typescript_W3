// TypeScript Classes
// TypeScript adds types and visibility modifiers to javascript classes.

//1. Partial
// Partial changes all the properties in an object to be optional.
interface Goal{
    x:number
    y: string
}
let game: Partial<Goal> = {}
let result =  game.x = 100;
console.log(result)

// 2. TypeScript Keyof
// keyof is used to extract the key type from an object type.

// Required
// Required changes all the properties in an object to be required.
interface Car {
    make: string;
    model: string;
    year?: number;
  }

  let myCar: Required<Car> = {
    make: 'Yehama',
    model: 'Bukati',
    year: 2023 
  };

  console.log("car: ", myCar);
  

//Record:
// Record is a shortcut to defining an object type with a specific key type and value type

const nameEmpId: Record<string, number> = {
    'Ajoy': 11,
    'Babul': 21
  };
  console.log("4", nameEmpId);

// TypeScript Classes:
// TypeScript adds types and visibility modifiers to JavaScript classes
class Student {
    name: string;
  }

  const student = new Student();
  student.name = "AJ";
  console.log("5", student);

// Members: Visibility:

// There are three main visibility modifiers in TypeScript.
//public - (default) allows access to the class member from anywhere
//private - only allows access to the class member from within the class
//protected - allows access to the class member from itself and any classes that inherit it,

class Person {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }

  const person = new Person("Faruk");
console.log(person.getName(), "6");
//console.log("private", Person.name); // it's not accesable outside class as well.

// Readonly
//  the readonly keyword can prevent class members from being changed.

class PersonObj {
    private readonly name: string;
  
    public constructor(name: string) {
     
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const personObj = new PersonObj("Rajesh");
  console.log(personObj.getName());
