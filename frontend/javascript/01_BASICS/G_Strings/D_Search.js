// CONCEPT: Searching Strings - Finding, extracting, and validating text patterns

const text = "JavaScript is awesome. JavaScript is powerful!";
const email = "user@example.com";

// FINDING INDEX POSITIONS
console.log(text.indexOf("JavaScript"));       // 0 - first occurrence
console.log(text.indexOf("is"));               // 11 - first "is"
console.log(text.lastIndexOf("JavaScript"));   // 23 - last occurrence
console.log(text.indexOf("Python"));           // -1 - not found

// CHECKING IF STRING CONTAINS
console.log(text.includes("awesome"));         // true
console.log(text.includes("python"));          // false
console.log(text.includes("is", 15));          // true - search from index 15

// STARTING AND ENDING
console.log(text.startsWith("Java"));          // true
console.log(text.startsWith("Script", 4));     // true - from index 4
console.log(text.endsWith("!"));               // true
console.log(text.endsWith("awesome"));         // false

// REGEX MATCHING - BASIC
console.log(text.match(/awesome/));            // ["awesome", ...]
console.log(text.match(/JavaScript/g));        // ["JavaScript", "JavaScript"]
console.log(text.match(/[a-z]+/g));            // all lowercase words

// REGEX SEARCH - Returns index
console.log(text.search("awesome"));           // 17
console.log(text.search(/[0-9]/));             // -1 - no digits

// EMAIL VALIDATION
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test(email));           // true
console.log(emailRegex.test("invalid-email"));  // false

// WORD BOUNDARIES
const sentence = "cat catalog dog";
console.log(sentence.match(/\bcat\b/g));       // ["cat"] - whole word only
console.log(sentence.match(/cat/g));           // ["cat", "cat"] - includes partial

// REPLACING WITH REGEX
console.log(text.replace(/JavaScript/g, "JS"));  // Replace all
console.log(text.replace(/\s+/g, "_"));          // Replace spaces with underscores

// EXTRACTING PATTERNS
const url = "https://example.com/page?id=123&name=test";
const params = url.match(/(\w+)=([^&]+)/g);
console.log(params);  // ["id=123", "name=test"]

// CASE-INSENSITIVE SEARCH
console.log(text.match(/javascript/i));  // ["JavaScript"] - case insensitive
console.log(text.search(/awesome/i));    // 17 - case insensitive search