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
