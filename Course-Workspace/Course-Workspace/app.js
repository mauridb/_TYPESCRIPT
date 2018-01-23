// let and const
console.log('LET & CONST');
var variable = "test";
console.log(variable);
variable = "another value";
console.log(variable);
var maxLevels = 100; // to create immutable data structures
console.log(maxLevels);
// maxLevels = 30; // won't work
// block scope
function reset() {
    // console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// arrow functions
console.log('ARROW FUNCTIONS');
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 54));
// Example arraw function
var multiplyFunction = function (num1, num2) { return num1 * num2; };
console.log(multiplyFunction(34, 54));
var great = function () {
    console.log('hello world');
};
great();
// another arraw function
var greetFriend = function (message) { return console.log(message); };
greetFriend('hi man i am learning typescript');
// default params
console.log('DEFAULT PARAMS');
var countdown = function (start, end) {
    if (start === void 0) { start = 10; }
    if (end === void 0) { end = start - 5; }
    while (start > end) {
        --start;
        console.log(start);
    }
    console.log('Done!', start);
};
countdown();
// rest and spread
console.log('REST & SPREAD');
var numbers = [1, 45, 65, 23, -6];
console.log(Math.max.apply(Math, numbers)); // using spread operator '...'
console.log(Math.max(12, 34, 99));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray('max', 1, 23, 45));
// destructuring arrays
console.log('DESTRUCTURING');
var myHobbies = ['chess', 'cooking'];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1]; 
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
// destructuring objects
var userData = { username: 'mauridb', age: 25 };
var myName = userData.username, myAge = userData.age;
console.log(myName, myAge);
// template literals
var userName = 'mauridb';
var greeting = "this is header!\ni am " + userName + "\n";
console.log(greeting);
