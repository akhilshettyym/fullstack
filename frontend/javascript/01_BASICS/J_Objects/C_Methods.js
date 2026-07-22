// CONCEPT: Object Methods - Functions stored as object properties

// BASIC METHOD
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());        // "John Doe"

// METHOD WITH PARAMETERS
const calculator = {
  value: 0,
  add: function (n) {
    this.value += n;
    return this.value;
  },
  multiply: function (n) {
    this.value *= n;
    return this.value;
  }
};

console.log(calculator.add(5));        // 5
console.log(calculator.multiply(2));   // 10

// ARROW FUNCTION METHOD (Warning: 'this' doesn't work correctly with arrow functions in objects!)
const obj = {
  name: "Test",
  // This won't work as expected - 'this' refers to global scope
  wrongMethod: () => { return this.name; }
};

// CORRECT: Regular function for 'this' binding
const user = {
  name: "Alice",
  age: 25,
  greet: function () {
    return `Hello, I'm ${this.name} and I'm ${this.age}`;
  }
};

console.log(user.greet());             // "Hello, I'm Alice and I'm 25"

// METHOD CHAINING
const account = {
  balance: 1000,
  deposit: function (amount) {
    this.balance += amount;
    return this;  // Return 'this' for chaining
  },
  withdraw: function (amount) {
    this.balance -= amount;
    return this;
  },
  getBalance: function () {
    return this.balance;
  }
};

console.log(account.deposit(500).withdraw(200).getBalance());  // 1300

// ADDING METHODS AFTER OBJECT CREATION
const student = {
  name: "Bob",
  score: 85
};

student.getGrade = function () {
  if (this.score >= 90) return "A";
  if (this.score >= 80) return "B";
  if (this.score >= 70) return "C";
  return "F";
};

console.log(student.getGrade());       // "B"

// USING BUILT-IN METHODS
const text = "HELLO";
const result = text.toLowerCase();     // "hello"
console.log(result);

const arr = [1, 2, 3];
console.log(arr.join("-"));            // "1-2-3"

// METHODS IN CONSTRUCTORS
function Product(name, price) {
  this.name = name;
  this.price = price;

  this.getDiscounted = function (discount) {
    return this.price * (1 - discount / 100);
  };
}

const book = new Product("JavaScript", 40);
console.log(book.getDiscounted(10));   // 36

// OBJECT METHOD SHORTHAND (ES6)
const shorthandObj = {
  name: "Test",
  sayHi() {  // Shorthand: sayHi: function() {}
    return `Hi, I'm ${this.name}`;
  }
};

console.log(shorthandObj.sayHi());     // "Hi, I'm Test"