// arrow function
var double = function (value) { return value * 2; };
console.log(double(4));
// arrow function with default param
var greet = function (name) {
    if (name === void 0) { name = 'massimo'; }
    return name;
};
console.log(greet());
console.log(greet('maurizio'));
// spread 
var nums = [-3, 5, 7, 2];
console.log(Math.min.apply(Math, nums));
// push in array
var newArray = [54, 20];
Array.prototype.push.apply(newArray, nums);
console.log(newArray);
// destructuring array
var testResults = [3.56, 34.45, 23.32];
var res1 = testResults[0], res2 = testResults[1], res3 = testResults[2];
console.log(res1, res2, res3);
// destructuring object
console.log('DESTRUCTURING OBJECT');
var developer = { firstname: 'maurizio', username: 'mauridb' };
var firstname = developer.firstname, username = developer.username;
console.log(firstname, username);
