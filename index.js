let MyName = "mr robot"
let age = 30
let legit = true
let empty;

console.log(typeof MyName);
console.log(typeof age);
console.log(typeof legit);
console.log(MyName);
console.log(age);
console.log(legit);
console.log(empty);

MyName = "Mr hacker"
console.log(MyName);

age = 1
console.log(age);

empty = null

console.log(empty);
age = "text"
console.log(typeof age);

const FixedPoint = "Fixed"
console.log(FixedPoint);
//A const is a fixed value, you cannot change it 

// Predict what each line will print, then uncomment it and check you were right
let x = 1;
// Arithmetic Operators
console.log(5 + 5); //10
console.log(5 * 10); //50
console.log(10 % 3); //1
console.log(5 + 10 / 2 * 5 - 10); //20
console.log((6 + 10) / 2 * 5 - 10); //30

// Assignment Operators
console.log(x = x + 1); //2
console.log(x += 1); //3
// Try and figure out the difference
console.log(x++); //4 (returns 3)
console.log(++x); //5 

// Relational Operators
console.log(5 > 3); //true
console.log(3 != 3); //False
console.log(!5 > 3); //False

// Mismatched Types
console.log(5 + "5"); //55
console.log(5 + true); //6
console.log(5 * "5"); //25
console.log(1 == true); // True
console.log(1 === true); // False

const arr = ["Ewa", "Marcin", "Anah2", "Kaisa", "Zia"];
console.log(arr);
console.log(arr[1]);
arr[1] = "Mimi"
console.log(arr);
arr[3] = "Anah"
console.log(arr);

console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("Ewa")
console.log(arr);

console.log(arr.length);
arr.push("Milly")
console.log(arr);
arr.pop()
console.log(arr);
arr.splice(4, 0, "Test", "Test2")
console.log(arr);
arr.splice(5, 1, "Changed");
console.log(arr);
if (true) { console.log(arr); }

let numba = 10;

if (numba % 5 === 0 && numba % 3 === 0) { console.log("FizzBuzz"); }
else if (numba % 5 === 0) {
    console.log("Buzz");
} else if (numba % 3 === 0) console.log("Fizz");
    else {console.log("Out of range");} 