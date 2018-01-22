// string
var myName = 'Maurizio';
// myName = 28;
//number
var myAge = 25; // int or float are the same
// let myAge = 'Mauri';
//boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 25;
// myRealAge = '25';
// array
var hobbies = ['play chess', 'coding'];
hobbies = [100]; // before we have only an array of string but with : any[] we can have multiple type in array list
// hobbies = 100; // this is not an array so error
console.log(typeof hobbies);
// tuples
var address = ['superstreet', 89]; // the combination must be the same
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any NB: try to figure out which type assign to variable, only at the end use 'any'
var car = 'bmw';
console.log(car);
car = { brand: 'bmw', series: 3 };
console.log(car);
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void NB: the function should not return anything
function sayHello() {
    console.log('hello');
}
// function types 
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'mauri')); // NB: int * string return a not a number, NOT AN ERROR
console.log(multiply(2, 46));
//function type
var myMultiply; // use to redefine hold types.. NB: is not a function, is a function type
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(356, 765));
// objects
var userData = {
    name: "mauri",
    age: 25
};
// userData = {
//     a: 'hello',
//     b: 24
// };
// complex object
var complex = {
    data: [100, 3, 5],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3, 5],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
// myRealRealAge = true;
myRealRealAge = "27";
// check types
var finalValue = 21;
if (typeof finalValue == "number") {
    console.log('finalvalue is a number');
}
// never
function neverReturns() {
    throw new Error('an Error!!!');
}
// nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
