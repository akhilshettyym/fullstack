/*
Design Patterns :
- Module Pattern (IFFE).
- Revealing Module Pattern.
- Factory Function Pattern.
- Observer Pattern (basic pub-sub).
*/

/* Module pattern :
- Module pattern in JS is a design pattern used to organise code into self-contained units, offering encapsulation by allowing for public and private members.
- It leverages JavaScript's function scope and closures to control visibility and prevent "namespace pollution" of the global scope.
# Core Concepts
- Encapsulation: The primary goal is to hide the internal workings (data and functions) of a module and expose only a public interface or API.
- Privacy: Variables and functions declared inside the module's scope are private by default and cannot be accessed from outside the module.
- IIFE (Immediately Invoked Function Expression): The traditional module pattern often uses an IIFE to create a local scope that executes immediately.
- Return Object: The IIFE returns an object that contains references to the methods and properties intended to be public, which can then interact with the private members. 
*/

// IIFE - All these below functions are private and can't be accessed outside.
console.log("Module pattern")
let Bank = (function () {
    let balance = 10000;    // This can't be accessed outside / in console

    function checkBalance() {
        console.log(balance);
    }

    function setBalance(val) {
        balance = val;
    }

    function withdraw(val) {
        if (val <= balance) {
            balance -= val;
            console.log("Balance :", balance);
        }
    }
    return {
        checkBalance, setBalance, withdraw
    }
})();

Bank.checkBalance();
// Bank.setBalance(15000);
Bank.withdraw(5000);

//------------------------------------------------------------------------------------------

/*
Revealing Module Pattern :
- The Revealing Module Pattern is a JavaScript design pattern that organizes code into encapsulated modules, explicitly separating private functions and variables from public ones. 
- It leverages immediately invoked function expressions (IIFEs) and closures to achieve privacy and prevent global scope pollution, which is particularly useful since JavaScript lacks built-in access modifiers like public or private. 
*/
console.log("Revealing Module pattern")
let Bank2 = (function () {
    let balance = 10000;    // This can't be accessed outside / in console

    function checkBalance() {
        console.log(balance);
    }

    function setBalance(val) {
        balance = val;
    }

    function withdraw(val) {
        if (val <= balance) {
            balance -= val;
            console.log("Balance :", balance);
        }
    }
    return {
        check: checkBalance,
        setBal: setBalance,
        drawl: withdraw
    }
})();

Bank2.check();
// Bank.setBalance(15000);
Bank2.drawl(5000);

//------------------------------------------------------------------------------------------

/*
# Factory Function Pattern :
- Whole idea is to control the object creation.
- A factory function in JavaScript is any function that creates and returns a new object without using the new keyword. 
- It's a creational design pattern used to encapsulate the object creation logic, making your code more modular, flexible, and maintainable. 
# Key Characteristics :
- No new keyword: Unlike constructor functions or classes, you simply call a factory function like a regular function.
- Returns an object: Its primary purpose is to produce a (presumably new) object instance each time it is called.
- Encapsulation and Private Variables: Factory functions can leverage JavaScript's powerful closures to create true private variables and methods that are not accessible from outside the returned object.
- Decoupling: They abstract the creation process, so the code that uses the objects (client code) doesn't need to know the specific details of how they are created.
- Simplicity: They offer a straightforward, function-based approach to object creation, avoiding some of the complexities associated with the this keyword and prototypes in traditional JavaScript classes/constructors. 
*/

function createProduct(name, price) {
    let stock = 10;
    return {
        name,
        price,
        checkStock() {
            console.log(`${stock} stocks left...`);
        },
        buy(qty) {
            if (qty <= stock) {
                stock -= qty;
                console.log(`${qty} pieces booked - ${stock} pieces left.`);
            } else {
                console.error(`${stock} remaining pieces...`);
            }
        },
        refill(qty) {
            stock += qty;
            console.log(`Refilled the stock - ${stock} pieces now.`);
        }
    }
}

let iphone = createProduct("iphone", 70000);
iphone.buy(6);

//------------------------------------------------------------------------------------------

/*
# Observer Pattern :
- The Observer pattern in JavaScript is a behavioral design pattern that establishes a one-to-many dependency between objects: 
- one "subject" (or observable) maintains a list of dependent "observers" and automatically notifies them of any state changes. 
- This promotes loose coupling, allowing objects to communicate without having direct knowledge of each other's concrete implementations. 
*/
class Youtube {
    constructor() {
        this.subscribers = [];
    }
    subscribe(user) {
        this.subscribers.push(user);
        user.update(`${user.name} subscribed the channel.`);
    };
    unsubscribe(user) {
        this.subscribers = this.subscribers.filter((sub) => sub !== user);
        user.update(`${user.name} unsubscribed the channel`);
    };
    notify(message) {
        this.subscribers.forEach(sub => sub.update(message));
    };
}

class User {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(`${this.name}, ${data}`);
    };
}

let Shettys = new Youtube();
let user1 = new User("Akhil");
let user2 = new User("Shetty");

Shettys.subscribe(user1);
Shettys.subscribe(user2);

Shettys.notify(`New video uploaded`);