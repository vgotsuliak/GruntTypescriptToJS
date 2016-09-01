var Student = (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
})();
var student = new Student('SomeStudent', 17);
console.log(student);
