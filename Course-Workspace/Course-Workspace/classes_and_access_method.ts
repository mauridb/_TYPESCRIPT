class Person {
    // class body
    name: string;           // as a public properties
    private role: string;
    protected age: number = 25;

    constructor(name: string, public username: string){
        this.name = name;
        this.username = username;
    }

    printAge() {
        console.log(this.age);
        // this.setRole('Python developer lover!') // inside your class you can access
    }

    private setRole(role: string){
        this.role = role;
    }

}

// const person = new Person('maurizio', 'mauridb');
// console.log(person);
// console.log(person.printAge());
// console.log(person.setRole('Angular Developer')); // won't work because is outside the own class

// inheritance
class PythonDeveloper extends Person{
    name = 'Maurizio'

    constructor(username: string){
        super('Maurizio', username);
    }
}
const mauridb = new PythonDeveloper('sherlock');
console.log(mauridb);

// getters and setters
class Plant {
    private _species: string = "Default";

    get species(){
        return this._species;
    }

    set species(value: string){
        if (value.length > 3) {
            this._species = value;
        }else{
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'ab'
console.log(plant.species);
plant.species = 'Green plant!!'
console.log(plant.species);

// static properties & methods          // static method no need to be instantiate as class
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    };
}
console.log(34 * Helpers.PI);
console.log(Helpers.calcCircumference(34));

//abtract classes
abstract class Project{
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget(){
        return this.budget * 2;
    }
}

class ITProject extends Project{
    // error while abstracts logic not implemented
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject()
console.log(newProject);
newProject.changeName('pythonProject')
console.log(newProject);

// private constructor
class OnlyOne {
    private static instance: OnlyOne;
    public readonly name: string;

    private constructor(name: string){
        this.name = name;
    }

    static getInstance(){
        if (!OnlyOne.instance){
            OnlyOne.instance = new OnlyOne('the only one');
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne('only one');
let right = OnlyOne.getInstance();
console.log(right.name);
// it is readonly properties
// right.name = 'something else';
