// Q1. you are creating website for your college. create a class user with 2 properties,name & email. it also has a method called view DataTransfer() that allow user to view websote DataTransfer.

// Class User
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Method to view website data
    viewData() {
        console.log("Website Data: Welcome to our College Website!");
    }
}

// Creating objects
const user1 = new User("Krishna", "krishna@gmail.com");
const user2 = new User("Rahul", "rahul@gmail.com");

// Accessing properties
console.log(user1.name);
console.log(user1.email);

// Calling method
user1.viewData();
user2.viewData();