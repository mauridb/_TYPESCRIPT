// arrow function
let double = (value: number) => value * 2;
console.log(double(4));

// arrow function with default param
let greet = (name: string = 'massimo') => name;
console.log(greet());
console.log(greet('maurizio'));

// spread 
let nums: number[] = [-3, 5, 7, 2]
console.log(Math.min(...nums));

// push in array
let newArray: number[] = [54, 20];
Array.prototype.push.apply(newArray, nums);
console.log(newArray);

// destructuring array
let testResults = [3.56, 34.45, 23.32];
let [res1, res2, res3] = testResults; 
console.log(res1, res2, res3);

// destructuring object
console.log('DESTRUCTURING OBJECT');
type Developer = {firstname: string, username: string};
let developer: Developer = {firstname: 'maurizio', username: 'mauridb'};
let {firstname, username} = developer
console.log(firstname, username);

