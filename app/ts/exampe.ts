class Student {

    name: string;
    age: number;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

var student = new Student('SomeStudent', 17);

console.log(student);