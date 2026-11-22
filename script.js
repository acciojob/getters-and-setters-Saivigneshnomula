
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Getter for age
    get age() {
        return this._age;
    }

    // Setter for age
    set age(age) {
        this._age = age;
    }
}

class Student extends Person {
    study() {
        console.log(this.name + " is studying");
    }
}

class Teacher extends Person {
    teach() {
        console.log(this.name + " is teaching");
    }
}

// Creating Person object
const person = new Person("John", 25);
console.log(person.name);

person.age = 30;
console.log(person.age);


const student = new Student("Alice", 22);
student.study();

const teacher = new Teacher("Bob", 40);
teacher.teach();
