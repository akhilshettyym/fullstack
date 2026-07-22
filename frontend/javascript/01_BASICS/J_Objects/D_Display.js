// CONCEPT: Displaying Objects - Converting objects to readable formats

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// DISPLAYING THE WHOLE OBJECT - Different approaches
console.log(person);                   // [object Object] in string context
console.log(JSON.stringify(person));   // Proper JSON format
// Output: {"name":"John","age":30,"city":"New York"}

// DISPLAYING SPECIFIC PROPERTIES
console.log(person.name + ", " + person.age); // "John, 30"

// TEMPLATE LITERAL
console.log(`${person.name} is ${person.age}`);  // "John is 30"

// LOOPING THROUGH PROPERTIES - for...in loop
let text = "";
for (let key in person) {
  text += person[key] + " ";
}
console.log(text);                     // "John 30 New York "

// USING Object.keys() - Get array of keys
console.log(Object.keys(person));      // ["name", "age", "city"]

// USING Object.values() - Get array of values
console.log(Object.values(person));    // ["John", 30, "New York"]

// USING Object.entries() - Get [key, value] pairs
console.log(Object.entries(person));   // [["name","John"], ["age",30], ["city","New York"]]

// LOOPING WITH entries()
for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
// Output: name: John, age: 30, city: New York

// JSON.stringify() WITH OPTIONS
const employee = {
  firstName: "Alice",
  lastName: "Smith",
  department: "Engineering",
  salary: 120000
};

// Pretty print with indentation
console.log(JSON.stringify(employee, null, 2));
/* Output:
{
  "firstName": "Alice",
  "lastName": "Smith",
  "department": "Engineering",
  "salary": 120000
}
*/

// Replacer function - Filter properties
const filtered = JSON.stringify(employee, (key, value) => {
  if (key === "salary") return undefined;  // Exclude salary
  return value;
});
console.log(filtered);  // {"firstName":"Alice","lastName":"Smith","department":"Engineering"}

// NESTED OBJECTS
const company = {
  name: "TechCorp",
  employees: [
    { name: "John", role: "Developer" },
    { name: "Jane", role: "Manager" }
  ]
};

console.log(JSON.stringify(company, null, 2));

// BUILD READABLE TEXT
let display = "";
for (let key in person) {
  display += `${key}: ${person[key]}\n`;
}
console.log(display);
/* Output:
name: John
age: 30
city: New York
*/

// CUSTOM toString() METHOD
const customObj = {
  x: 10,
  y: 20,
  toString: function () {
    return `Point(${this.x}, ${this.y})`;
  }
};

console.log(String(customObj));        // "Point(10, 20)"
console.log(customObj);                // Uses toString()