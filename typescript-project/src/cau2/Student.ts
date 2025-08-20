import { Person } from "../cau1/Person";

class Student extends Person {
    grade: String;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade
    }

    displayAllInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

const stu = new Student("Huy", 20, "A")
stu.displayAllInfo()

