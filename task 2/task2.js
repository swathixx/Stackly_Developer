// Part 1: Variables — var, let, const (6 Questions)

// Declare a variable using var, assign it the value 10, reassign it to 20, and print the result.
var a=10;
a=20;
console.log(a);//20

// Declare a variable using var with the value 30. Redeclare the same variable with the value 50 and print it.
var b=30
var b=50
console.log(b);//50

// Declare a variable using let with the value 100. Reassign it to 200 and print the result.
let c=100
c=200
console.log(c);//200

// Declare a variable using const to store your age. Print the value.
const age=21
console.log(age);//21

// Identify which variable declarations are valid and which are invalid: var, let, and const.
// var — valid: can be reassigned and redeclared
var d = 10;
d= 20;       // Valid
var d = 30;   // Valid

// let — valid: can be reassigned, but not redeclared in the same scope
let e = 10;
e = 20;       // Valid
// let e = 30; // Invalid: already declared

// const — must be initialized; cannot be reassigned or redeclared
const f = 10;
// f = 20;       // Invalid: reassignment
// const f = 30; // Invalid: redeclaration
// const g;      // Invalid: missing initialization

// Create three variables using var, let, and const to store your name, age, and city. Print all three.
var name1="swathi";
let age1 = 21
const city="chennai"
console.log(name1);
console.log(age1);
console.log(city);


//----------------------------------------------------------------------------------------------------------------

// Part 2: Printing Statements and Data Types (6 Questions)

// Use prompt() to get the user's name and display it using alert().
var user_name=prompt("what's your name")
alert(user_name)

// Use prompt() to get the user's age and print it using console.log().
var user_age=prompt("whats your age")
console.log(user_age);//21

// Use confirm() to ask the user whether they know JavaScript. Print the returned value.
var user=confirm("whether they know JavaScript")
console.log(user);


// Declare variables containing a string, number, boolean, and undefined value. Print each variable's value and type.
var Sname="swayy"
var Sno=109
var attend=true
var dept

console.log(Sname);
console.log(typeof(Sname));
console.log(Sno);
console.log(typeof(Sno));
console.log(attend);
console.log(typeof(attend));
console.log(dept);
console.log(typeof(dept));



// Create an array containing five fruits. Print the entire array, the first element, and the last element.
var fruit=["apple","orange","mango"]
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[fruit.length-1]);

// Create an object containing a fruit array, an electronic-items array, and a vegetable name. Print each property separately.
var thing= {
     fruits :["apple","orange","mango"],
     electronic :["tv","ac"],
     vegetable:["potato","tomato"],
};
    console.log(thing.fruits);
    console.log(thing.electronic);
    console.log(thing.vegetable);
    


//----------------------------------------------------------------------------------------------------------------------

// Part 3: Arithmetic Operators (6 Questions)


// Declare two variables with values 15 and 4. Print their addition, subtraction, multiplication, and division.
var num1 = 15;
var num2 = 4;

console.log("Addition:", num1 + num2);       // 19
console.log("Subtraction:", num1 - num2);    // 11
console.log("Multiplication:", num1 * num2); // 60
console.log("Division:", num1 / num2);       // 3.75

// Find the remainder when 27 is divided by 5 using the modulus operator.
var num3=27
var num4 =5
console.log("remainder",num3%num4);//2

// Calculate \(3^4\) using the exponentiation operator.
console.log(3 ** 4); // 81

// Declare a variable with the value 10. Apply the pre-increment operator and print the result.
var preinc=10;
++preinc
console.log(preinc);

// Declare a variable with the value 10. Apply the pre-decrement operator and print the result.
var predec=10;
--predec
console.log(predec);
// Predict the output:
// let x = 5;
// let y = x++;

// console.log(x);
// console.log(y);
output:6
5

//-----------------------------------------------------------------------------------------------------------

// Part 4: Pre/Post Increment and Decrement (12 Questions)

// 19. Predict the output:
// let a = 4;
// console.log(a++);
// console.log(a);
output
4
5

// 20. Predict the output:
// let a = 4;
// console.log(++a);
// console.log(a);
output
5
5

// 21. Predict the output:
// let a = 8;
// let b = a++;
// console.log(a);
// console.log(b);
output
9
8

// 22. Predict the output:
// let a = 8;
// let b = ++a;
// console.log(a);
// console.log(b);

output
9
9


// 23. Predict the output:
// let a = 6;
// let b = a--;
// console.log(a);
// console.log(b);

output
5
6


// 24. Predict the output:
// let a = 6;
// let b = --a;
// console.log(a);
// console.log(b);

output
5
5

// 25. Predict the output:
// let a = 2;
// a++;
// a++;
// console.log(a);
output
4

// 26. Predict the output:
// let a = 10;
// --a;
// --a;
// console.log(a);
output
8

// 27. Predict the output:
// let b = 3;
// b = b++;
// console.log(b);
output
3

// 28. Predict the output:
// let c = 4;
// let d = c++;
// console.log("c:", c);
// console.log("d:", d);
output
c:5
d:4

// 29. Predict the output:
// let e = 5;
// let f = --e;
// console.log("e:", e);
// console.log("f:", f);
output
e:4
f:4

// 30. Predict the final values of a, b, and c:
// let a = 5;
// let b = a++;
// let c = ++a;

// console.log(a);
// console.log(b);
// console.log(c);
output
7
5
7