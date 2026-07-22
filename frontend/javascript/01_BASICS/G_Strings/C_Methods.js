/* STRING METHODS: Essential methods for string manipulation */
// Strings are immutable - methods return NEW strings
// Common: slice, substring, toUpperCase, toLowerCase, trim, split, replace, includes

// ============= CASE CONVERSION =============
console.log("=== CASE CONVERSION ===");

let text = "Hello World";

console.log("Original:", text);
console.log("toUpperCase():", text.toUpperCase());     // HELLO WORLD
console.log("toLowerCase():", text.toLowerCase());     // hello world

// ============= EXTRACTING PARTS =============
console.log("\n=== EXTRACTING PARTS ===");

let str = "Apple, Banana, Kiwi";

// slice(start, end): negative index counts from end
console.log("slice(7, 13):", str.slice(7, 13));      // Banana
console.log("slice(-4):", str.slice(-4));            // Kiwi
console.log("slice(-12, -6):", str.slice(-12, -6));  // Banana

// substring(start, end): like slice but no negative
console.log("substring(7, 13):", str.substring(7, 13)); // Banana

// substr(start, length) - DEPRECATED, avoid
// console.log("substr(7, 6):", str.substr(7, 6)); // Banana

// ============= FINDING STRINGS =============
console.log("\n=== FINDING STRINGS ===");

let searchText = "Hello, this is a test. This is great!";

// indexOf(searchValue): returns first occurrence index
console.log("indexOf('is'):", searchText.indexOf('is'));     // 10
console.log("indexOf('test'):", searchText.indexOf('test'));   // 17

// lastIndexOf(searchValue): returns last occurrence
console.log("lastIndexOf('is'):", searchText.lastIndexOf('is')); // 26

// includes(searchValue): true/false if found
console.log("includes('test'):", searchText.includes('test'));   // true
console.log("includes('xyz'):", searchText.includes('xyz'));     // false

// startsWith(): check if string starts with
console.log("startsWith('Hello'):", searchText.startsWith('Hello')); // true

// endsWith(): check if string ends with
console.log("endsWith('great!'):", searchText.endsWith('great!')); // true

// ============= WHITESPACE MANAGEMENT =============
console.log("\n=== WHITESPACE MANAGEMENT ===");

let spacedText = "   Hello World   ";

console.log("Original: '" + spacedText + "'");
console.log("trim():", "'" + spacedText.trim() + "'");          // "Hello World"
console.log("trimStart():", "'" + spacedText.trimStart() + "'"); // "Hello World   "
console.log("trimEnd():", "'" + spacedText.trimEnd() + "'");     // "   Hello World"

// ============= STRING REPLACEMENT =============
console.log("\n=== STRING REPLACEMENT ===");

let sentence = "I love cats and cats love me";

// replace(old, new): replaces FIRST occurrence
console.log("replace('cats', 'dogs'):", sentence.replace('cats', 'dogs'));
// "I love dogs and cats love me"

// replaceAll(old, new): replaces ALL occurrences
console.log("replaceAll('cats', 'dogs'):", sentence.replaceAll('cats', 'dogs'));
// "I love dogs and dogs love me"

// Using regular expressions
console.log("replace with regex:", sentence.replace(/cats/g, 'dogs'));

// ============= SPLITTING STRINGS =============
console.log("\n=== SPLITTING STRINGS ===");

let csv = "apple,banana,cherry,date";

// split(separator): convert string to array
let fruits = csv.split(',');
console.log("split(','):", fruits);
// ['apple', 'banana', 'cherry', 'date']

// split with limit
console.log("split(',', 2):", csv.split(',', 2)); // ['apple', 'banana']

// split(''): split into characters
console.log("split(''):", "Hello".split(''));
// ['H', 'e', 'l', 'l', 'o']

// ============= JOINING & CONCATENATION =============
console.log("\n=== JOINING ===");

let fruits2 = ['apple', 'banana', 'cherry'];

// join(separator): array to string
console.log("join(','):", fruits2.join(','));     // apple,banana,cherry
console.log("join(' - '):", fruits2.join(' - ')); // apple - banana - cherry

// concat(): concatenate strings
console.log("concat():", "Hello".concat(" ", "World")); // Hello World

// ============= REPEATING & PADDING =============
console.log("\n=== REPEATING & PADDING ===");

// repeat(count): repeat string n times
console.log("'ab'.repeat(3):", 'ab'.repeat(3)); // ababab

// padStart(length, fillString): pad at start
console.log("'5'.padStart(4, '0'):", '5'.padStart(4, '0')); // 0005

// padEnd(length, fillString): pad at end
console.log("'5'.padEnd(4, '0'):", '5'.padEnd(4, '0'));     // 5000

// ============= CHARACTER ACCESS =============
console.log("\n=== CHARACTER ACCESS ===");

let word = "JavaScript";

// charAt(index): character at position
console.log("charAt(0):", word.charAt(0));       // J
console.log("charAt(4):", word.charAt(4));       // S

// charCodeAt(index): character code (ASCII/Unicode)
console.log("charCodeAt(0):", word.charCodeAt(0)); // 74 (J)

// at(index): newer method, supports negative
console.log("at(0):", word.at(0));       // J
console.log("at(-1):", word.at(-1));     // t (last character)

// bracket notation (read-only)
console.log("word[0]:", word[0]);        // J

// ============= CHECKING STRING PROPERTIES =============
console.log("\n=== STRING PROPERTIES ===");

let msg = "Hello";

// length: number of characters
console.log("length:", msg.length); // 5

// Empty string check
console.log("''.length:", ''.length); // 0

// ============= PRACTICAL EXAMPLES =============
console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: Email validation
let email = "user@example.com";
console.log("Valid email format:", email.includes('@') && email.includes('.')); // true

// Example 2: URL parsing
let url = "https://www.example.com/path";
console.log("Domain starts with https:", url.startsWith('https')); // true

// Example 3: Clean user input
let userInput = "  John Doe  ";
let cleaned = userInput.trim();
console.log("Cleaned input:", cleaned); // "John Doe"

// Example 4: CSV parsing
let data = "name,age,city";
let headers = data.split(',');
console.log("Headers:", headers); // ['name', 'age', 'city']

// Example 5: Format code
let code = "myVariableName";
let formatted = code.charAt(0).toUpperCase() + code.slice(1);
console.log("Formatted:", formatted); // MyVariableName

console.log("\n=== KEY TAKEAWAYS ===");
console.log("✓ slice(): flexible, supports negative indices");
console.log("✓ indexOf()/includes(): search strings");
console.log("✓ replace()/replaceAll(): modify content");
console.log("✓ split()/join(): convert between string/array");
console.log("✓ trim(): remove whitespace");
console.log("✓ Strings are IMMUTABLE - methods return new strings");