// Q2 create a new class called admin which inherits form user. add a new mwthod called editData to admin that allows it to webssite data.


// Parent Class
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Viewing Website Data");
    }
}

// Child Class
class Admin extends User {
    constructor(name, email) {
        super(name, email); // Calls the parent constructor
    }

    editData() {
        console.log("Admin can edit Website Data");
    }
}

// Creating objects
const user1 = new User("Krishna", "krishna@gmail.com");
const admin1 = new Admin("Admin", "admin@gmail.com");

// User methods
console.log(user1.name);
user1.viewData();

// Admin methods
console.log(admin1.name);
admin1.viewData();   // Inherited from User
admin1.editData();   // Admin's own method