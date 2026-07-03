// basic object example

const student = {
    fullname : "Krishna Yadav",
    marks: 94.4,
    printMarks: function (){
        console.log("marks = ", this.marks); //student.marks//
    },
};


// prototype 
// JS object have a special entity called prototype.
// __proto__

 
const employee = {
    calcTax(){
        console.log("tax is 5%"); //to calculate tax//

    },
};

const aryan = {
    salary:30000,
};

aryan__proto__ = employee;

aryan2__proto__ = employee;

aryan3__proto__ = employee;


// class is a program code template for creating objects
// eg of inheritance no : 1

class Parent {
    hello(){
        console.log("hello");
    }
}

class child extends parent(){}

let obj = new Children();
 

// eg no :2

class Person {
    constructor(name){
        this.species = "homo sapiens";
        this.name = name;

    }

    eat(){
        console.log("eat");
    }
}

class Engineer extends Person{
    constructor(name){
        super(name); //to invoke parent class constructor//
    }
    work(){
        super.eat();
        console.log("solve problems, build something");

    }
}

let engobj = new Engineer("Krishna");

