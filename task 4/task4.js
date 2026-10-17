// Part 1: Functions and Parameters (5 Questions)

// Create a function welcome() that prints "Welcome to JavaScript".
function welcome(){
    console.log("Welcome to Javascript");
    
}
welcome()
//Welcome to   Javascript 

// Create a function studentDetails(name, age, cgpa) that prints all three values. Call it with two different students.
function studentDetails(name, age,cgpa){
    console.log("name:", name);
    console.log("age:", age);
    console.log("cgpa:", cgpa);
    
}
studentDetails("swayy", 21, 9.0)
studentDetails("dharshh", 2 ,8.52)

// name: swayy
// age: 21
// cgpa: 9
// name: dharshh
// age: 2
// cgpa: 8.52

// Create a function calculateFee(fee) that returns the student fee. Store the returned value in a variable and print it.
function calculateFee(fee){
    return fee;
}
var fee = calculateFee(2000)
console.log(fee);
//2000

// Create a function discount(percent) that calculates a discount on a fee of ₹200,000 and prints the final fee.
function discount(percent) {
    let discountAmount = 200000 * percent / 100;
    let finalFee = 200000 - discountAmount;
    console.log("Discount:", discountAmount);
    console.log("Final fee:", finalFee);
}
discount(2);
// Discount: 4000
// Final fee: 196000

// Create a function studentForm(name, age, disability = "no"). Call it three times, including once without passing the disability argument.
function studentForm(name1, age1, disability="no"){
    console.log("NAME:", name1);
    console.log("AGE:" ,age1);
    console.log("DISABILITY:" , disability);
    
}
studentForm("swayy",21,"no")
studentForm("Resh",21,"yess")
studentForm("Dharshh",21)

// NAME: swayy
// AGE: 21
// DISABILITY: no
// NAME: Resh
// AGE: 21
// DISABILITY: yess
// NAME: Dharshh
// AGE: 21
// DISABILITY: no


//---------------------------------------------------------------------------------------------------------------------------

// Part 2: Function Types and Scope (5 Questions)

// Create a named function that accepts a message and prints it.
function message(msg){
    console.log(msg);
    
}
message("have a great year")
//have a great year

// Create an anonymous function and store it in a variable. Pass a name to it and print the name.
var place = function(name){
    console.log("place=" , name);
    
}
place("dargil")
// place= dargil

// Create an arrow function that accepts a number and prints it.
var number = (num)=>{
    console.log(num);
    
}
number(5)
//5

// Create a function containing var, let, and const inside an if block. Check which variables can be accessed inside and outside the block.
var block1 = ()=>{
     console.log("global scope");
    
 }
block1()
//global scope

let block2 = ()=>{
    console.log("block scope");
    
}
block2()
//block scope

const block3 = ()=>{
    console.log("block scope");
    
}
block3()//block scope
if (true) {
    var a = "var variable";
    let b = "let variable";
    const c = "const variable";

    console.log(a, b, c); // All accessible inside the block
}

console.log(a); // Accessible outside the block

// These cause ReferenceError outside the block:
// console.log(b);
// console.log(c);

// Predict the output of this code:
// console.log(value);
// var value = 10
// undefined

//--------------------------------------------------------------------------------------------------------

// Part 3: Callback and Higher-Order Functions (6 Questions)

// Create two functions, first() and second(). Pass second as a callback to first() and execute it inside first().
function first(){
 console.log(2+22);
 
}
function second(){
    console.log(3+33);
    

}
first(second());
// 36
// 24

// Create an add(callback, a, b) function that prints the sum of two numbers and then calls the callback with two numbers.

function add(callback, a, b){
    console.log(a+b);
    sub(30,40)
}
function sub(c,d){
    console.log(c-d);
    
}
add(sub, 10,20);
// 30
// -10

// Create a sub(num1, num2) arrow function and pass it as a callback to the add() function.
var subt= (num1,num2)=>{
console.log(num1 - num2);
}
add(subt, 10, 20);
// Create a multiply(callback, a, b) function that prints the multiplication result and then executes the callback.
function multiply(callback, a, b) {
    console.log("Product:", a * b);
    callback(a, b);
}

multiply(sub, 4, 5);
// Create a divide(num1, num2) function and pass it as a callback to another function.
function divide(a, b) {
    if (b !== 0) {
        console.log("Quotient:", a / b);
    } else {
        console.log("Cannot divide by zero");
    }
}

function calculate(callback, a, b) {
    callback(a, b);
}

calculate(divide, 20, 4);
// Create a higher-order function that accepts a callback and calls it with a student's name.
function greetStudent(callback, name) {
    callback(name);
}

function greet(name) {
    console.log("Welcome, " + name);
}

greetStudent(greet, "Priya");

//-----------------------------------------------------------------------------------------------------------------------


// Part 4: Generator Functions (5 Questions)

// Create a generator function that yields these values one by one: "10% cashback", "30% cashback", and "Better luck next time".
function * gen(){
    yield("10% cashback")
    yield("30% cashback")
    yield("Better Luck Next Time")
}
let res = gen();
console.log (res.next().value);
console.log (res.next().value);
console.log (res.next().value);
// 10% cashback
// 30% cashback
// Better Luck Next Time
 
// Call .next() three times on a generator object and observe the returned values.
function * gena(){
    yield("steal")
    yield("katty")
    yield("vibes")
}
let resl = gena();
console.log (resl.next().value);
console.log (resl.next().value);
console.log (resl.next().value);
// steal
// katty
// vibes

// Create a generator function that yields five different discount messages. Print each yielded value using a for-of loop.
// Create a generator function that yields three student names. Use a for-of loop to display them.
// Create a generator function with four yield statements. Check the done property after the yielded values have been consumed.
function * gan(){
    yield("10% ")
    yield("30%")
    yield("40")
    yield("50")
}
let rest = gan();
console.log (rest.next().done);
console.log (rest.next().done);
console.log (rest.next().done);
console.log (rest.next().done);
// false
// false
// false
// false


//-----------------------------------------------------------------------------------------------------------------------

// Part 5: Currying and Uncurrying (5 Questions)

// Create a normal function add(a, b, c) that prints the sum of three numbers.

function Add(a,b,c){
    console.log(a+b+c);
    
}
Add(2,4,7);//13


// Convert the add(a, b, c) function into a curried function using nested functions.
function ADD(d){
    return function(e){
        return function(f){
            
            
            console.log(d+e+f);
            console.log("swasika");
        }
    }

}
ADD(4)(5)(6);//15

// Call a curried function with values 5, 10, and 15 using this format: functionName(5)(10)(15).

function curr(z){
    return function(y){
        return function(x){
            console.log(x+y+z);
            

        }
    }
}
curr(5)(10)(15)//30

// Create a curried function that accepts product price, discount percentage, and quantity, then calculates the total discounted price.

function curry(price) {
    return function(percent) {
        return function(quantity) {
            return price * quantity * (1 - percent / 100);
        };
    };
}

console.log(curry(5000)(5)(2)); // 9500

// Write a normal three-parameter function and its curried equivalent. Call both with the same values and compare their results.

function normal(a, b, c) {
    return a + b + c;
}

function curried(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(normal(20, 20, 20));     // 60
console.log(curried(20)(20)(20));   // 60

//------------------------------------------------------------------------------------------------------------------

// Part 6: IIFE, Return, and Mixed Practice (4 Questions)

// Create an IIFE that accepts a product name and discount percentage, then displays a sale message using a template string.
// (function(product, discount) {
//     alert(`Hey! ${product} is available with a ${discount}% discount!`);
// })("Western dress", 20);

// Create a function that returns a number. Store the returned value in a variable and print it.
function note(numbers){
    return numbers
}
var not= note(5)
console.log(not);//5

// Create a function that accepts a student's marks and returns the marks. Use the returned value in another variable.
function studentmark(mark){
    return mark;
    
}
var mar = studentmark(100)
console.log(mar);//100

// Create a student fee calculator using a function with a default parameter, a callback function to calculate the discount, and a return value for the final fee.
function discount1(fee, percent) {
    return fee * percent / 100;
}

function calculator(fee = 35000, callback, percent = 10) {
    let discountAmount = callback(fee, percent);
    let finalFee = fee - discountAmount;
    return finalFee;
}

let finalFee = calculator(35000, discount1, 10);
console.log("Final fee:", finalFee); // 31500
