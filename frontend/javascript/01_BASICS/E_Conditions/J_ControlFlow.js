// ============================================
// CONTROL FLOW PATTERNS
// ============================================

// THEORY: Control flow determines execution order
// - Sequential: top to bottom
// - Conditional: if/else, switch
// - Early return: exits function immediately
// - Loop control: break, continue

// THEORY: Early Return Pattern
// - Return from function at first valid condition
// - Reduces nesting/indentation
// - Makes code clearer and easier to follow
// - Best practice for validation and guards

// THEORY: Best practice: Fail fast, succeed late
// - Check error conditions first
// - Return early on errors
// - Main logic at end (fewer nested levels)

// ============================================
// WORKING EXAMPLES
// ============================================

console.log("=== IF...ELSE IF...ELSE ===");

function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}

console.log("Grade:", getGrade(95));  // Output: Grade: A
console.log("Grade:", getGrade(75));  // Output: Grade: C
console.log("Grade:", getGrade(55));  // Output: Grade: F

console.log("\n=== EARLY RETURN PATTERN ===");

function getGradeEarlyReturn(score) {
  if (score >= 90 && score <= 100) return "A";
  if (score >= 80 && score <= 89) return "B";
  if (score >= 70 && score <= 79) return "C";
  if (score >= 60 && score <= 69) return "D";
  return "F";
}

console.log("Grade (early return):", getGradeEarlyReturn(85)); // Output: Grade (early return): B

console.log("\n=== GUARD CLAUSES (FAIL FAST) ===");

function processUser(user) {
  // Guard clause 1: Check if user exists
  if (!user) return "No user provided";

  // Guard clause 2: Check if user has email
  if (!user.email) return "Email required";

  // Guard clause 3: Check if user is active
  if (!user.isActive) return "User is not active";

  // Main logic (all guards passed)
  return "Processing user: " + user.email;
}

console.log(processUser(null));  // Output: No user provided
console.log(processUser({ email: "" }));  // Output: Email required
console.log(processUser({ email: "john@example.com", isActive: false }));  // Output: User is not active
console.log(processUser({ email: "john@example.com", isActive: true }));  // Output: Processing user: john@example.com

console.log("\n=== SWITCH STATEMENT CONTROL FLOW ===");

function handleCommand(command) {
  switch (command) {
    case "start":
      console.log("Starting...");
      break;
    case "stop":
      console.log("Stopping...");
      break;
    case "restart":
      console.log("Restarting...");
      break;
    default:
      console.log("Unknown command");
  }
}

handleCommand("start");  // Output: Starting...
handleCommand("stop");   // Output: Stopping...

console.log("\n=== NESTED CONDITIONALS TO EARLY RETURN ===");

// Bad: Deep nesting
function checkLoginBad(username, password) {
  if (username) {
    if (password) {
      if (username === "admin" && password === "123") {
        return "Login successful";
      } else {
        return "Invalid credentials";
      }
    } else {
      return "Password required";
    }
  } else {
    return "Username required";
  }
}

// Good: Early returns (flatter structure)
function checkLoginGood(username, password) {
  if (!username) return "Username required";
  if (!password) return "Password required";
  if (username !== "admin" || password !== "123") return "Invalid credentials";
  return "Login successful";
}

console.log("Bad approach:", checkLoginBad("admin", "123"));  // Output: Login successful
console.log("Good approach:", checkLoginGood("admin", "123")); // Output: Login successful

console.log("\n=== REAL-WORLD: API RESPONSE HANDLING ===");

function handleResponse(response) {
  // Guard: Check if response exists
  if (!response) return "No response";

  // Guard: Check if response has data
  if (!response.data) return "No data in response";

  // Guard: Check status code
  if (response.status !== 200) return "Error: Status " + response.status;

  // Success: Process data
  return "Data received: " + response.data.length + " items";
}

console.log(handleResponse(null)); // Output: No response
console.log(handleResponse({ status: 404 })); // Output: Error: Status 404
console.log(handleResponse({ status: 200, data: [1, 2, 3] })); // Output: Data received: 3 items

console.log("\n=== REAL-WORLD: FORM VALIDATION ===");

function validateForm(formData) {
  // Validation guards
  if (!formData.name) return "Name is required";
  if (!formData.email) return "Email is required";
  if (!formData.email.includes("@")) return "Invalid email format";
  if (!formData.password) return "Password is required";
  if (formData.password.length < 6) return "Password must be at least 6 characters";
  if (!formData.agreeTerms) return "Must agree to terms";

  // All validation passed
  return "Form is valid";
}

console.log(validateForm({})); // Output: Name is required
console.log(validateForm({ name: "John", email: "john", password: "123" })); // Output: Invalid email format
console.log(validateForm({ name: "John", email: "john@example.com", password: "123456", agreeTerms: true })); // Output: Form is valid