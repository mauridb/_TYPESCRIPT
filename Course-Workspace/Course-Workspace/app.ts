const PI = 3.14;

function calculateCircumference(diameter: number){
    return diameter * PI;
}

function calculateRectangle(width: number, length: number): number {
    return width * length;
}

console.log(calculateCircumference(50));
console.log(calculateRectangle(20, 40));
