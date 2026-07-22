/*
Object Oriented Javascrip (OOP)
- Constructor functions and prototypes.
- new keyword behavior.
- ES6 classes : constructor, methods, extends, super.
- Prototypal inheritance vs classical inheritance.
- Encapsulation (private fields using #).
*/

// Firstly create a blueprint of how an object should look like and then we can have objects with different values.
class CreateBiscuits {
    constructor(name, price, qty, company, category) {
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.company = company;
        this.category = category;
    }
}
let biscuit1 = new CreateBiscuits("Oreo", 10, 5, "Cadburry", "Chocolate");
let biscuit2 = new CreateBiscuits("ParleG", 5, 10, "Parle G", "Regular");


class CreatePencil {
    constructor(name, price, color, company) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.company = company;
        this.write = function (text) {
            let h1 = document.createElement("h1");
            h1.textContent = text; // "Hey how are you"
            h1.style.color = color;
            document.body.append();
        }
    }

    erase() {
        document.body.querySelectorAll("h1").forEach((elem) => {
            if (elem.style.color === this.color) {
                elem.remove();
            }
        })
    }
}

let Pencil1 = new CreatePencil("Nataraj", 10, "black", "Nataraj");
console.log("Pencil 1", Pencil1);
let Pencil2 = new CreatePencil("Doms", 15, "red", "DOMS");
console.log("Pencil 2", Pencil2);

// PROTOTYPES
// If any hardcoded values are present that shouldn't be added in the constructor. Instead do -
CreatePencil.prototype.companyNumber = "akhil@123"
// And we can use it as as - 
console.log(Pencil1.companyNumber);


// CreatePencil.prototype.write = function (text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text; // "Hey how are you"
//     h1.style.color = this.color;
//     document.body.append();
// }

// Extends and Super :
// The extends keyword is used in a class declaration to create a new class as a child of another class, enabling inheritance.
// The super keyword in JavaScript is used within classes or object literals to access the parent class's (superclass) methods, properties, and constructor.
class User {
    constructor(name, address, username, email) {
        this.name = name;
        this.address = address;
        this.username = username;
        this. email = email;
        this.role = "user";
    }

    checkRole() {
        return `You are a ${this.role}`;
    }
    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User {
    constructor(name, address, username, email) {
        super(name, address, username, email);
        this.role = "admin";
    }
    remove() {
        document.querySelectorAll("h1").forEach(function(ele) {
            ele.remove();
        });
    }
}

let user1 = new User("Akhil", "Mangalore", "akhil123", "shetty@gmail.com");
let user2 = new User("Beru", "Goa", "Beru123", "Beru@gmail.com");
let admin1 = new Admin("Admin1", "India", "Admin123", "admin@gmail.com");


/* Prototypal Inheritance -
- Objects inherit directly from other object.
- There are no classes in the traditional sense, instead objects serve as prototypes for other objects.
*/
let coffee = {
    color : "dark",
    drink : function() {
        console.log("git git git");
    }
}
// We create a new object we can access it by inheriting the props of another Object.
let latte = Object.create(coffee);
console.log(latte);
latte.taste = "bitter";
latte.drink();


/*
Classical Inheritance - 
- Uses the class and extends keywords o create a structured hierarchy that looks like classical inheritance.
- You define a class(blueprint) and create instances(objects) from it using the new keyword.
*/