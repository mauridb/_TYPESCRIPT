// string
let myName: string = 'Maurizio';
// myName = 28;

//number
let myAge: number = 25; // int or float are the same
// let myAge = 'Mauri';

//boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 25;
// myRealAge = '25';

// array
let hobbies: any[] = ['play chess', 'coding'];
hobbies = [100]; // before we have only an array of string but with : any[] we can have multiple type in array list
// hobbies = 100; // this is not an array so error
console.log(typeof hobbies);

// tuples
let address: [string, number] = ['superstreet', 89] // the combination must be the same

// enum
enum Color {
    Gray, // 0
    Green = 100, // 1
    Blue = 2 // 2
}
let myColor: Color = Color.Blue;
console.log(myColor);

// any NB: try to figure out which type assign to variable, only at the end use 'any'
let car: any = 'bmw';
console.log(car);
car = { brand: 'bmw', series: 3}
console.log(car);

function returnMyName(): string{ // always refer to the return value
    return myName;
}
console.log(returnMyName());

// void NB: the function should not return anything
function sayHello(): void {
    console.log('hello');
}

// function types 
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
// console.log(multiply(2, 'mauri')); // NB: int * string return a not a number, NOT AN ERROR
console.log(multiply(2, 46));

//function type
let myMultiply: (a: number, b: number) => number; // use to redefine hold types.. NB: is not a function, is a function type
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(356, 765));

// objects
let userData: {name: string, age: number} = {
    name: "mauri",
    age: 25
};
// userData = {
//     a: 'hello',
//     b: 24
// };

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3, 5],
    
    output: function (all: boolean): number[]{
        return this.data;
    }
};
// complex = {};

// type alias

type Complex = {data: number[], output: (all: boolean) => number[]}

let complex2: Complex  = {
    data: [100, 3, 5],
    
    output: function (all: boolean): number[]{
        return this.data;
    }
};

// union types
let myRealRealAge: string | number = 27;
// myRealRealAge = true;
myRealRealAge = "27";

// check types
let finalValue = 21;
if (typeof finalValue == "number") {
    console.log('finalvalue is a number');    
}

// never
function neverReturns():never {
    throw new Error('an Error!!!');
    
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: number | null = null;
canThisBeAny = 12;


