// CONCEPT: Objects - Collections of key-value pairs (properties and methods)

// OBJECT LITERAL - Most common way
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
  isActive: true
};

// EMPTY OBJECT + ADDING PROPERTIES
const car = {};
car.make = "Toyota";
car.model = "Camry";
car.year = 2023;

// NESTED OBJECTS
const employee = {
  name: "Alice",
  contact: {
    email: "alice@example.com",
    phone: "555-1234"
  },
  address: {
    street: "123 Main St",
    city: "Boston"
  }
};

// ACCESSING PROPERTIES - Two methods
console.log(person.firstName);           // "John" - dot notation
console.log(person["firstName"]);        // "John" - bracket notation
console.log(employee.contact.email);     // "alice@example.com" - nested access
console.log(employee["contact"]["phone"]); // "555-1234"

// DYNAMIC PROPERTY ACCESS
const key = "age";
console.log(person[key]);               // 30

// OBJECT WITH METHODS
const calculator = {
  value: 0,
  add: function (n) { this.value += n; return this.value; },
  subtract: function (n) { this.value -= n; return this.value; },
  getValue: function () { return this.value; }
};

console.log(calculator.add(5));           // 5
console.log(calculator.add(3));           // 8
console.log(calculator.subtract(2));      // 6

// LISTING ALL KEYS
console.log(Object.keys(person));      // ["firstName", "lastName", "age", "city", "isActive"]

// LISTING ALL VALUES
console.log(Object.values(person));    // ["John", "Doe", 30, "New York", true]

// KEY-VALUE PAIRS
console.log(Object.entries(person));   // [["firstName","John"], ["lastName","Doe"], ...]

// CHECKING IF PROPERTY EXISTS
console.log("firstName" in person);    // true
console.log("email" in person);        // false
console.log(person.hasOwnProperty("firstName")); // true

// CONSTRUCTOR FUNCTION (Traditional)
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function () { return this.firstName + " " + this.lastName; };
}

const john = new Person("John", "Smith", 45);
console.log(john.fullName());          // "John Smith"