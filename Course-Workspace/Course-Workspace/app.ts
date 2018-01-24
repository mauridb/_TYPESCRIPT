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




