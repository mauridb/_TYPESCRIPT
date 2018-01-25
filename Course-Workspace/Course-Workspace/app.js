var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 25;
        this.name = name;
        this.username = username;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        // this.setRole('Python developer lover!') // inside your class you can access
    };
    Person.prototype.setRole = function (role) {
        this.role = role;
    };
    return Person;
}());
// const person = new Person('maurizio', 'mauridb');
// console.log(person);
// console.log(person.printAge());
// console.log(person.setRole('Angular Developer')); // won't work because is outside the own class
// inheritance
var PythonDeveloper = /** @class */ (function (_super) {
    __extends(PythonDeveloper, _super);
    function PythonDeveloper(username) {
        var _this = _super.call(this, 'Maurizio', username) || this;
        _this.name = 'Maurizio';
        return _this;
    }
    return PythonDeveloper;
}(Person));
var mauridb = new PythonDeveloper('sherlock');
console.log(mauridb);
// getters and setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'ab';
console.log(plant.species);
plant.species = 'Green plant!!';
console.log(plant.species);
// static properties & methods          // static method no need to be instantiate as class
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    ;
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(34 * Helpers.PI);
console.log(Helpers.calcCircumference(34));
//abtract classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // error while abstracts logic not implemented
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('pythonProject');
console.log(newProject);
// private constructor
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('the only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('only one');
var right = OnlyOne.getInstance();
console.log(right.name);
// read only properties
