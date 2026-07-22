let obj = {
    name: "Akhil",
    age: 22,
    perk: "Jigga"
};

// console.log(obj.name);
let a = "perk";
// console.log(obj[a]);

// -------------------------------------------------------------
const user = {
    name: "Akhil",
    address: {
        city: "Mangalore",
        pin: 575003,
        location: {
            lat: 360,
            lng: 128,
        },
    },
};

let { lat, lng } = user.address.location;
// console.log(user.address.location.lng);

// -------------------------------------------------------------
let obj1 = {
    name: "Akhil",
    age: 22,
    email: "akhil@gmail.com"
};

for (let key in obj1) {
    // console.log(key);
    // console.log(key, obj1[key]);
}
// -------------------------------------------------------------
// console.log(Object.keys(obj1));
// -------------------------------------------------------------
// console.log(Object.entries(obj1));   // Arrays of arrays
// -------------------------------------------------------------
let obj2 = { ...obj1 };
// console.log(obj2);
// -------------------------------------------------------------
let obj3 = Object.assign({}, obj);
// console.log(obj3c);
// -------------------------------------------------------------

// When Nested objects are created only the tops are actually copied and nested will be referenced.
// Deep clone :
let object = {
    name: "Akhil",
    address: {
        city: "Mangalore",
        pin: 575003,
        location: {
            lat: 360,
            lng: 128,
        },
    },
}
let object2 = { ...object };   // Just won't work

let object3 = JSON.parse(JSON.stringify(object)); // deep clone.
// -------------------------------------------------------------

// Optional chaining and computed properties.
object?.address?.location?.lat;

let role = "admin";
let obj0 = {
    name: "Akhil",
    age: 22,
    email: "akhil@gmail.com",
    addresses: {
        city: "Mangalore",
    },
    [role]: "Akhil",
}

// Use Object.entries() to print all key-value pairs
const cource = {
    title: "JavaScript",
    duration: "4 weeks",
};

Object.entries(cource).forEach(function (val) {
    console.log(val[0] + " : " + val[1]);
});