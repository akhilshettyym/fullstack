// CONCEPT: Object Properties - Accessing, modifying, and deleting properties

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York"
};

// ACCESSING PROPERTIES
console.log(person.firstName);         // "John" - dot notation
console.log(person["firstName"]);      // "John" - bracket notation (needed for special chars/spaces)

// MODIFYING PROPERTIES
person.age = 31;
person["city"] = "Boston";
console.log(person.age);               // 31
console.log(person.city);              // "Boston"

// ADDING NEW PROPERTIES
person.email = "john@example.com";
person["phone"] = "555-1234";
console.log(person.email);             // "john@example.com"

// DELETING PROPERTIES
delete person.phone;
console.log(person.phone);             // undefined

// PROPERTY WITH SPECIAL CHARACTERS/SPACES (bracket notation required)
const config = {};
config["api-key"] = "secret123";
config["max requests"] = 100;
console.log(config["api-key"]);        // "secret123"

// DYNAMIC PROPERTY NAMES
const propName = "email";
const value = "john@example.com";
person[propName] = value;
console.log(person.email);             // "john@example.com"

// COMPUTED PROPERTY NAMES (ES6)
const newObj = {
  ["first" + "Name"]: "Jane"
};
console.log(newObj.firstName);         // "Jane"

// NESTED PROPERTIES
const employee = {
  name: "Alice",
  contact: {
    email: "alice@example.com",
    phone: "555-5678"
  }
};

console.log(employee.contact.email);   // "alice@example.com"
employee.contact.email = "alice.new@example.com";
console.log(employee.contact.email);   // "alice.new@example.com"

// PROPERTY EXISTENCE CHECK
console.log("firstName" in person);    // true
console.log("middleName" in person);   // false
console.log(person.hasOwnProperty("firstName")); // true

// GET ALL PROPERTIES
console.log(Object.keys(person));      // array of property names
console.log(Object.getOwnPropertyNames(person)); // similar to keys()

// OBJECT DESCRIPTORS (Advanced)
Object.defineProperty(person, "ssn", {
  value: "123-45-6789",
  writable: false,  // Cannot be changed
  enumerable: false, // Won't show in Object.keys()
  configurable: false // Cannot be deleted
});

console.log(person.ssn);               // "123-45-6789"
person.ssn = "000-00-0000";  // Silently fails in non-strict mode
console.log(person.ssn);               // Still "123-45-6789"

// PROPERTY SHORTHAND (ES6)
const firstName = "Bob";
const lastName = "Smith";
const person2 = { firstName, lastName };
console.log(person2);                  // { firstName: "Bob", lastName: "Smith" }