// let and const
console.log('LET & CONST');

let variable = "test";
console.log(variable);
variable = "another value";
console.log(variable);

const maxLevels = 100;          // to create immutable data structures
console.log(maxLevels);
// maxLevels = 30; // won't work

// block scope
function reset(){
    // console.log(variable);
    let variable = null;
    console.log(variable);
}
reset()
console.log(variable);

// arrow functions
console.log('ARROW FUNCTIONS');
const addNumbers = function(number1: number, number2: number): number{
    return number1 + number2;
}
console.log(addNumbers(10,54));

// Example arraw function
const multiplyFunction = (num1: number, num2: number) => num1 * num2; 
console.log(multiplyFunction(34, 54));

const great = () => {
    console.log('hello world');
}
great();

// another arraw function
const greetFriend = message => console.log(message);
greetFriend('hi man i am learning typescript');

// default params
console.log('DEFAULT PARAMS');
const countdown = (start: number = 10, end: number = start -5): void => {
    while (start > end) {
        --start;
        console.log(start);
    }
    console.log('Done!', start);
    
}
countdown();

// rest and spread
console.log('REST & SPREAD');
const numbers: number[] = [1, 45, 65, 23, -6];
console.log(Math.max(...numbers)); // using spread operator '...'
console.log(Math.max(12, 34, 99));

function makeArray(...args: number[]) {
    return args;
}
console.log(makeArray(1, 23, 45));

// destructuring arrays
console.log('DESTRUCTURING');
const myHobbies = ['chess', 'cooking'];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1]; 
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);


// destructuring objects
const userData = {username: 'mauridb', age: 25};
const {username: myName, age: myAge} = userData;
console.log(myName, myAge);

// template literals
const userName = 'mauridb'
const greeting = `this is header!
i am ${userName},
really cool!!!
`;
console.log(greeting);
