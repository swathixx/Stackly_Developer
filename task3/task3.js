// Part 1: Variables and Data Types (5 Questions)

// Declare variables using var, let, and const. Reassign and redeclare them wherever allowed, then print the results.
var name="swayy";
name="swathika";
var name="swathyy";
console.log(name);
//swathyy

let age;
age = 21;
console.log(age);
//21

const qualification="engineer"
console.log(qualification);
//engineer

// Create variables for your name, age, and programming knowledge. Print each variable and its data type using typeof.
var name1="swayy"
var age1=21
var programming_knowledge="java"

console.log(name1);
console.log(age1);
console.log(programming_knowledge);
console.log(typeof(name1));
console.log(typeof(age1));
console.log(typeof(programming_knowledge));
//swayy
21
// java
// string
// number
// string

// Create an array of 5 fruits. Print the complete array, the first element, and the last element.
var fruits=["apple","orange","mango","banana","guva"]
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
//[ 'apple', 'orange', 'mango', 'banana', 'guva' ]
// apple
 // guva
// Create an object containing your name, role, and CGPA. Print each property separately.
var obj={
    name2:"swayy",
    role:"developer",
    cGPA:8.5,
};
console.log(obj.name2);
console.log(obj.role);
console.log(obj.cGPA);

// swayy
// developer
// 8.5

// Take the user's name and age using prompt(). Display the name using alert() and print the age in the console.
var user_name= prompt("what's your name")
var user_age= prompt("what's your age")

alert(user_name)
console.log(user_age);//21

//------------------------------------------------------------------------------------------------------

// Part 2: Operators (7 Questions)

// Declare two numbers and perform addition, subtraction, multiplication, division, modulus, and exponentiation.
var num1=10;
var num2=25;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**num2);
//35
// task3.js:75 -15
// task3.js:76 250
// task3.js:77 0.4
// task3.js:78 10
// task3.js:79 19

// Predict the output:
// let a = 5;
// console.log(a++);
// console.log(a);
// console.log(++a);

// OUTPUT
// 5
// 6
// 7

// 8. Predict the output:
// let a = 10;
// let b = a--;
// let c = --a;

// console.log(a);
// console.log(b);
// console.log(c);

// OUTPUT
// 8
// 10
// 8

// Use the +=, -=, *=, /=, and %= assignment operators on a variable and print the final value after each operation.

var num=10
var ass=5

num += ass
console.log(num);
num -= ass
console.log(num);
num *= ass
console.log(num);
num /= ass
console.log(num);
num %= ass
console.log(num);

// 19
// task3.js:118 15
// task3.js:120 10
// task3.js:122 50
// task3.js:124 10
// task3.js:126 0

// Predict the results of these comparisons:
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(10 != "10");
// console.log(10 !== "10");

// OUTPUT
//true
//false
//false
//false

// Use &&, ||, and ! to check different combinations of conditions.
console.log (10>=5 && 5<=77 || 22=="22" );

// Use the ternary operator to check whether a user's age is 18 or above and print an appropriate message.
var userAge = Number(prompt("Enter your age:"));

console.log(
    userAge >= 18
        ? "You are eligible."
        : "You are not eligible."
);

//-----------------------------------------------------------------------------------------------------------------

// Part 3: Type Casting and Conditions (6 Questions)

// 13. Predict the data type of each expression:
// console.log(typeof ("hello" + 10));
// console.log(typeof (10 + true));
// console.log(typeof (10 + null));
// console.log(typeof ("hello" + undefined));

// OUTPUT
// String
// Number
// Number
// string

// Use Number() to convert a value received through prompt() into a number. Add 10 and print the result.

var value=Number(prompt("enter the value"));
console.log(10+value);
//22

// Use Boolean() to check the Boolean values of an empty string, a non-empty string, 0, and true.
console.log(Boolean(""));        // false
console.log(Boolean("hello"));   // true
console.log(Boolean(0));         // false
console.log(Boolean(true));      // true


// Write an if-else statement to check whether a number is positive or not.
var val =20
if(val>0){
    console.log("positive");
}
else{
     console.log("negative");
     
}
// Use else-if to display a message based on the time entered by the user: early morning, morning, afternoon, evening, or night.
var time=6

if(time<=1  ){
    console.log("Early Morning");
    
}
else if(time<6){
    console.log("Good Morning");
    
}
else if(time<=12 ){
    console.log("GOOd aFternoon");
    
}
else if(time<=16 ){
    console.log("good evening");
    
}
else if(time<=19 ){
    console.log("good night");
    
}
else{
    console.log("invalid");
    
}

// Create a nested if statement to check eligibility based on age, height, and weight, following the conditions in your code.
var rage=22
var height=155
var weight=55

if(age>18){
    if(height>100 && weight>=45){
        console.log("eligible to ride");
        
    }else{
        console.log("not eligilbe to ride");
        
    }
}else{
console.log("not met requirement");
}

//-----------------------------------------------------------------------------------------------------------------

// Part 4: Switch and Loops (8 Questions)

// Use switch to display a message based on a traffic light color: red, yellow, or green. Display an error for an invalid color.
var traffic="red"
switch(traffic){
    case("red"):console.log("stop");break
    case("yellow"):console.log("wait");break
    case("green"):console.log("gooo");break
    default:console.log("invalid");
}

// Use a for loop to print numbers from 1 to 20.
for(let j=1;j<=20;j++)
{
    console.log(j);
    
}

// Use a for loop to print all even numbers from 2 to 20.

for(let k=2;k<=20;k+=2)
{
    console.log("even number",k);
    
}
// Use a while loop to print numbers from 10 down to 1.

var l=10;
while(l>=1)
{
    console.log(l);
    l--;
}

// Use a do-while loop to print numbers from 1 to 10.
var s=1
do{
    console.log(s);
      s++;
}
while(s<=10)
;

// Use a for-of loop to print each character in the string "JavaScript".
var lang="javascript";

for (let d of lang){
    console.log(d);
    
}
// Use a for-of loop to print every element in an array of 5 student names.
var names=["swayy","dharsh","reshhh","porchh","sharkic"];

for (let x of names){
    console.log(x);
    
}
// Use a for-in loop to print all keys and values of this object:
// let student = {
//     name: "Priya",
//     role: "Frontend Developer",
//     cgpa: 9
// };

for (let v in student){
    console.log(v,student[v]);

    
}


//-------------------------------------------------------------------------------------------------------------------------

// Part 5: Mixed Practice (4 Questions)

// Take two numbers using prompt() and display their sum, difference, product, and remainder.
var no1=Number(prompt("enter number 1"))
var no2=Number(prompt("enter number 2"))
console.log(no1+no2);
console.log(no1-no2);
console.log(no1*no2);
console.log(no1%no2);

// Create an array of 5 numbers and use a loop to print only the numbers greater than 10.

var array=[81,2,13,4,65]
for(nums of array)
{if(nums>10){
    console.log(nums);
}
}

// Take a user's age using prompt(). Use a conditional statement to check eligibility, then display the result using alert().
var use_age=prompt("user Age")
if(use_age>=18)
{
    alert("ELIGIBLE");
    
}else{
alert("NOT ELIGIBLE")}


// Create a simple menu using switch with these options: addition, subtraction, multiplication, and division. Take two numbers from the user and display the selected operation's result.

var number1=33
var number2=33
var operation=prompt("choose +,-,*,/")

switch(operation)
{
    case("+"):console.log(number1+number2);break;
    case("-"):console.log(number1-number2);break;
    case("*"):console.log(number1*number2);break;
    case("/"):console.log(number1/number2);break;
    
}