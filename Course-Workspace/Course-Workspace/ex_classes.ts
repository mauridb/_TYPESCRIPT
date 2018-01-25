// Exercise 1 - How was your TypeScript Class?
class Car{
    public name: string;
    public acceleration: number = 0;
    
    constructor(name: string){
        this.name = name;
    }
    
    honk = function(){
        console.log('Tooooot');
    }

    accelerate = function(speed: number){
        this.acceleration += speed;
    }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
abstract class BaseObj {
    public width: number;
    public length: number;

    abstract calcSize(width: number, length: number): void;
}

class Rectangle extends BaseObj{
    
    calcSize() {
        return this.length * this.width
    }
}
const rectangle = new Rectangle()
rectangle.width = 34;
rectangle.length = 33;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Profile {
    private _firstName: string = "";
    private enumerable: boolean = true;
    private configurable: boolean = true;

    get firstName(){
        return this._firstName;
    }
    
    set firstName(name: string){
        if (name.length > 3){
            this._firstName = name;
        }else{
            this._firstName = "";
        }
    }
}
const person = new Profile();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
