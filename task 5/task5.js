// Part 1: Array Manipulation Methods

// 1. Create an array of 5 fruits. Add 3 fruits at the end using push() and print the array.
let fruits = ["apple","banana","mango","orange","pomegrant"]
fruits.push("kiwi","papaya","guva")
console.log(fruits);

// 2. Create an array of 6 numbers. Remove the last element using pop() and print the result.
let num=[1,2,3,4,5,6]
num.pop()
console.log(num);

// 3. Create an array of 5 names. Remove the first element using shift() and print the array.
let name=["swathi","resh","dharsh","saadhana","varun"]
name.shift();
console.log(name);


// 4. Create an array of 4 numbers. Add two numbers at the beginning using unshift().
let num1 =[20,30,40,50]
num1.unshift(0,10)
console.log(num1);

// 5. Given let arr = [10, 20, 30, 40, 50], remove 2 elements starting from index 1 using splice().
let arr = [10, 20, 30, 40, 50]
arr.splice(1,2)
console.log(arr);

// 6. Given let arr = [1, 2, 3, 4, 5], replace the value 3 with 100 using splice().
  let arr1=[1,2,3,4,5]
  arr1.splice(2,1,100)
  console.log(arr1);
  

// 7. Create an array of 5 numbers and use fill() to replace the elements from index 2 to index 4 with "hello".
let num2 = [1,2,3,4,5]
num2.fill("hello",2,5)
console.log(num2);

// OUTPUT:
// [
//   'apple',     'banana',
//   'mango',     'orange',
//   'pomegrant', 'kiwi',
//   'papaya',    'guva'
// ]
// [ 1, 2, 3, 4, 5 ]
// [ 'resh', 'dharsh', 'saadhana', 'varun' ]
// [ 0, 10, 20, 30, 40, 50 ]
// [ 10, 40, 50 ]
// [ 1, 2, 100, 4, 5 ]
// [ 1, 2, 'hello', 'hello', 'hello' ]

//-------------------------------------------------------------------------------------------------------------------


// Part 2: Array Merge and Search Methods


// 8. Create two arrays of numbers and combine them using concat().
let val1 =[1,2,3]
let val2 =[4,5,6]
console.log(val1.concat(val2));

// 9. Given let arr = [10, 20, 30, 40, 50, 60], extract elements from index 1 to index 4 using slice().
let arr3 = [10,20,30,40,50,60]
let a=arr3.slice(1,5);
console.log(a);

// 10. Create a nested array and convert it into a single-level array using flat(Infinity).
let arr4=[1,2,[3,4,[5,6]]];
let b=arr4.flat(Infinity)
console.log(b);

// 11. Given let arr = [10, 20, 30, 40, 50], check whether the value 30 exists using includes().
let arr5 = [10, 20, 30, 40, 50];
let c=arr5.includes(30)
console.log(c);

// 12. Given let arr = [5, 10, 15, 20, 25], find the index of 20 using indexOf().
let arr6 =[5,10,15,20,25]
let d=arr6.indexOf(20)
console.log(d);

// 13. Given let arr = [1, 2, 3, 2, 1, 2], find the last index of 2 using lastIndexOf().
let arr7=[1,2,3,2,1,2]
let e=arr7.lastIndexOf(2)
console.log(e);

// 14. Create an array of numbers and arrange its elements using sort().
let sort=[10,50,70,27,84,46,29]
let f = sort.sort((a, b) => a - b);
console.log(f);

// 15. Create an array of 7 numbers and reverse the order using reverse().
let g=f.reverse()
console.log(g);

// OUTPUT
// [ 1, 2, 3, 4, 5, 6 ]
// [ 20, 30, 40, 50 ]
// [ 1, 2, 3, 4, 5, 6 ]
// true
// 3
// 5
// [
//   10, 27, 29, 46,
//   50, 70, 84
// ]
// [
//   84, 70, 50, 46,
//   29, 27, 10
// ]


//----------------------------------------------------------------------------------------------------------------------

// Part 3: Spread and Rest Operators


// 16. Create two arrays containing 4 numbers each. Merge them into one array using the spread operator.
let val3=[9,8,7,6]
let val4=[5,4,3,2]
let array=[...val3,...val4];
console.log(array);

// 17. Create two objects: one containing student details and another containing job details. Merge both objects using the spread operator.
let obj1={
    Sno:1,
    Sname:"swathyy",
    Srole:"developer"
};
let obj2={
    Jno:1,
    Jname:"full stack",
    Jsal:7000
};
let obj={...obj1,...obj2}
console.log(obj);

// 18. Create a function that accepts two parameters and uses the rest operator to collect all remaining arguments into an array.
function value(a,b,...c){
    console.log(a+b);
    console.log(c);
    
   

}
value(1,2,3,4,5,6)
// 19. Write a function using function one(a, b, ...c) that prints the sum of a, b, c[0], and c[1].
function one(a,b,...c){
    console.log(a + b + c[0] + c[1]);
    
}
one(1,2,3,4)

// 20. Create two arrays and use the spread operator to copy all elements from the first array into a new array.
let val5 = [1,2,3]
let val6 = [4,5,6]

let new_array=[...val5]
console.log(new_array);





// OUTPUT
// [
//   9, 8, 7, 6,
//   5, 4, 3, 2
// ]
// {
//   Sno: 1,
//   Sname: 'swathyy',
//   Srole: 'developer',
//   Jno: 1,
//   Jname: 'full stack',
//   Jsal: 7000
// }
// 3
// [ 3, 4, 5, 6 ]
// 10
//[ 1, 2, 3 ]


//------------------------------------------------------------------------------------------------------------------------


// Part 4: Array Destructuring


// 21. Given let arr = [10, 20, 30, 40], extract all four values into separate variables using array destructuring.
let arr8 = [10, 20, 30, 40];

let [n1, n2, n3, n4] = arr8;
console.log(n1, n2, n3, n4);
// 22. Given let nested = [1, 2, [3, 4, [5, 6]]], extract the values 1, 2, 3, 4, 5, and 6 using nested destructuring.
let nested1 = [1, 2, [3, 4, [5, 6]]];

let [d1, d2, [d3, d4, [d5, d6]]] = nested1;
console.log(d1, d2, d3, d4, d5, d6);




// 23. Create an array containing a student's name, age, and CGPA. Extract these values using destructuring and print them.
let student = ["swathi", 21, 9];

let [studentName, studentAge, cgpa] = student;
console.log(studentName, studentAge, cgpa);


// OUTPUT
// [ 1, 2, 3 ]
// [ 10, 20, 30, 40 ]
// [ 1, 2, [ 3, 4, [ 5, 6 ] ] ]
// [ 'swathi', 21, 9 ]


//-----------------------------------------------------------------------------------------------------------------
// Part 5: Object Destructuring


// 24. Create an object containing name, role, and location. Extract these properties using object destructuring.
let {
    name2,
    role1,
    location: { mainlocation, currentlocation }
} = company;

console.log(name2, role1, mainlocation, currentlocation);


// 25. Create an object containing a student's name and a nested address object with city and state. Extract the city and state using nested object destructuring.
let { address: { city, state } } = snames;
console.log(city, state);



// 26. Given an object with name, role, and location: { mainLocation, currentLocation }, print all four values using destructuring.

let {
    namme,
    role,
    location: { mainLocation, currentLocation }
} = objval;

console.log(namme, role, mainLocation, currentLocation);

// OUTPUT
// chennai
// { city: 'thambikottai', state: 'TamilNadu' }
// {
//   namme: 'swathyy',
//   role: 'software',
//   location: { mainLocation: 'salem', currentLocation: 'chennai' }
// }


//---------------------------------------------------------------------------------------------------


// Part 6: Mixed Practical Challenges


// 27. Create an array of 10 numbers. Remove the first and last elements, add two new numbers at the beginning, and print the final array.

let num9 = [1,2,3,4,5,6,7,8,9,10]
num9.shift();
num9.pop();
num9.unshift(-1, 0);
console.log(num9);

// 28. Create an array containing duplicate numbers. Use includes(), indexOf(), and lastIndexOf() to check and print information about one selected number.
var arrays = [2, 3, 4, 2, 5];

console.log(arrays.includes(2));    // true
console.log(arrays.indexOf(2));     // 0
console.log(arrays.lastIndexOf(2)); // 3

// 29. Create two objects containing employee information. Merge them using the spread operator, then destructure and print the employee's name and role.
let employee1 = {
    name: "Swathi",
    age: 21
};

let employee2 = {
    role: "Full Stack Developer",
    salary: 7000
};

let employee = { ...employee1, ...employee2 };

let { name, role } = employee;

console.log(name);
console.log(role);

// Output:
// Swathi
// Full Stack Developer

// 30. Create a nested array containing numbers. Flatten it using flat(Infinity), reverse the resulting array, and print the final result.
let numbers = [1, 2, [3, 4, [5, 6]]];

let flatArray = numbers.flat(Infinity);
let reversedArray = flatArray.reverse();

console.log(reversedArray);

// Output:
// [6, 5, 4, 3, 2, 1]