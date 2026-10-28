// -----------------------------------------------------------------------------------------------------------------------
// // Part 1: Array Higher-Order Methods
// -----------------------------------------------------------------------------------------------------------------------

// 1. Create an array of 10 numbers and use forEach() to print each number.
let array = [1,2,3,4,5,6,7,8,9,10,21]
 array.forEach((c,i,t) => {
    console.log(c);
    
});
//1
2
3
4
5
6
7
8
9
10
21


// 2. Create an array of numbers and use map() to create a new array where every number is multiplied by 5.

   let newarray = array.map((c,i,t) => {
    console.log(c * 5);
})
    


//5
10
15
20
25
30
35
40
45
50
105

// 3. Given an array of numbers, use filter() to get only numbers greater than 20.
let filter= array.filter((c,i,t)=>{
   return c >= 20;
    

})
console.log(filter);

//[ 21 ]
// 4. Create an employee array containing name and salary. Use filter() to display employees whose salary is <= ₹300,000.

let employee = [
    { name: "Swayy", salary: 100000 },
    { name: "Naveen", salary: 200000 },
    { name: "Swathi", salary: 300000 },
    { name: "Arun", salary: 400000 }
];


let newfilter = employee.filter((emp) => {
    return emp.salary <= 300000;
});

console.log(newfilter);

// [
//   { name: 'Swayy', salary: 100000 },
//   { name: 'Naveen', salary: 200000 },
//   { name: 'Swathi', salary: 300000 }
// ]

// 5. Using the same employee array, use find() to get the first employee whose salary is greater than ₹200,000.

let employee1 = [
    { name: "Swayy", salary: 100000 },
    { name: "Naveen", salary: 200000 },
    { name: "Swathi", salary: 300000 },
    { name: "Arun", salary: 400000 },
    { name: "Arun", salary: 400000000 }
];

let newfilter1 = employee.find((emp) => {
    return emp.salary >= 20000;
});

console.log(newfilter1);
//{ name: 'Swayy', salary: 100000 }
// 6. Use reduce() to calculate the total of all numbers in an array.

let reduce = array.reduce((a,c,i,t)=>{
    return c +a
},0)
console.log(reduce);
//76

// 7. Create an array of numbers and use some() to check whether at least one number is even.
let some = array.some((c,i,t)=>{
      return c %2 ==0
})
console.log(some);
//true
// 8. Use every() to check whether all numbers in an array are greater than zero.
let every = array.every((c,i,t)=>{
    return c >= 0;
})
console.log(every);
//true
// 9. Given an array of numbers, sort them in ascending order using the sort callback.

let sort = array.sort((a,b)=>{
    return a-b;

})
console.log(sort);

// [
//    1, 2, 3, 4,  5,
//    6, 7, 8, 9, 10,
//   21
// ]

// 10. Given an array of numbers, sort them in descending order using sort() and (a, b) => b - a.
let sort1 = array.sort((a,b)=>{
    return b-a;

})
console.log(sort1);

// [
//   21, 10, 9, 8, 7,
//    6,  5, 4, 3, 2,
//    1
// }


// -----------------------------------------------------------------------------------------------------------------------
// Part 2: String Methods
// -----------------------------------------------------------------------------------------------------------------------

// 11. charAt()
let str = "javascript";
console.log(str.charAt(4)); // s

// 12. charCodeAt()
console.log(str.charCodeAt(2)); // 118

// 13. trim()
let str1 = "   JavaScript   ";
console.log(str1.trim()); // JavaScript

// 14. toUpperCase() & toLowerCase()
let str2 = "JavaScript";
console.log(str2.toUpperCase()); // JAVASCRIPT
console.log(str2.toLowerCase()); // javascript

// 15. includes()
let str3 = "javascript";
console.log(str3.includes("script")); // true

// 16. startsWith() & endsWith()
let str4 = "JavaScript";
console.log(str4.startsWith("Java")); // true
console.log(str4.endsWith("Script")); // true

// 17. replaceAll()
let str5 = "java is easy and java is popular";
console.log(str5.replaceAll("java", "python")); // python is easy and python is popular

// 18. split()
let str6 = "html-css-javascript-react";
console.log(str6.split("-")); // [ 'html', 'css', 'javascript', 'react' ]

// 19. join()
let names = ["Swathi", "Naveen", "Arun", "Swayy"];
console.log(names.join(",")); // Swathi,Naveen,Arun,Swayy

// 20. slice()
let str7 = "JavaScript";
console.log(str7.slice(0,4)); // Java

// -----------------------------------------------------------------------------------------------------------------------
// Part 3: Date Methods
// -----------------------------------------------------------------------------------------------------------------------

// 21. Create a Date object and print the current year, month, date, and day.
let date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay());

// Current year
// Current month
// Current date
// Current day (0-6)


// 22. Create an array containing all 12 month names. Use getMonth() to display the current month name.
let months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];

console.log(months[date.getMonth()]);

// Current month name


// 23. Print the current hours, minutes, and seconds using the appropriate date methods.
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

// Current hour
// Current minute
// Current second


// 24. Create a date object and change its year to 2003, month to January, and date to 30 using the setter methods.
let newDate = new Date();

newDate.setFullYear(2003);
newDate.setMonth(0);
newDate.setDate(30);

console.log(newDate);

// 30 January 2003


// -----------------------------------------------------------------------------------------------------------------------
// Part 4: Asynchronous JavaScript
// -----------------------------------------------------------------------------------------------------------------------

// 25. Use setTimeout() to print "Welcome to JavaScript" after 3 seconds.
setTimeout(() => {
    console.log("Welcome to JavaScript");
}, 3000);

// Welcome to JavaScript (after 3 seconds)


// 26. Use setInterval() to print "Learning JavaScript" every 2 seconds.
let interval = setInterval(() => {
    console.log("Learning JavaScript");
}, 2000);

// Learning JavaScript
// Learning JavaScript
// Learning JavaScript
// ... every 2 seconds


// 27. Stop the interval created in Task 26 after 8 seconds using clearInterval().
setTimeout(() => {
    clearInterval(interval);
}, 8000);

// Interval stops after 8 seconds


// 28. Create three functions named one(), two(), and three(). Call them in this order: one(), setTimeout(two, 0), and three(). Observe the output order.
function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

function three() {
    console.log("Three");
}

one();
setTimeout(two, 0);
three();

// One
// Three
// Two


// -----------------------------------------------------------------------------------------------------------------------
// Part 5: Promises and API Fetching
// -----------------------------------------------------------------------------------------------------------------------

// 29. Create a Promise that resolves with the message "Login successful" and display the result using .then().
let promise1 = new Promise((resolve, reject) => {
    resolve("Login successful");
});

promise1.then((result) => {
    console.log(result);
});

// Login successful


// 30. Create a Promise that rejects with the message "Invalid password" and handle the error using .catch().
let promise2 = new Promise((resolve, reject) => {
    reject("Invalid password");
});

promise2.catch((error) => {
    console.log(error);
});

// Invalid password


// 31. Create a Promise and use .finally() to print "Process completed" regardless of whether it resolves or rejects.
let promise3 = new Promise((resolve, reject) => {
    resolve("Success");
});

promise3
.then((result) => {
    console.log(result);
})
.finally(() => {
    console.log("Process completed");
});

// Success
// Process completed


// 32. Fetch product data from the Fake Store API:
// https://fakestoreapi.com/products
// Convert the response to JSON and print all product titles using forEach().
fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((data) => {
    data.forEach((product) => {
        console.log(product.title);
    });
});

// Fjallraven - Foldsack No. 1 Backpack...
// Mens Casual Premium Slim Fit T-Shirts...
// Mens Cotton Jacket...
// ...all product titles


// 33. Fetch the same API and print the title, price, and category of every product.
fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((data) => {
    data.forEach((product) => {
        console.log(product.title, product.price, product.category);
    });
});

// Product title  price  category
// ...all products


// 34. Handle API errors using .catch() and display the error message using console.warn().
fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.warn(error);
});

// Error message will be displayed if the API request fails


// 35. Use .finally() to print "API call completed" after the fetch process.
fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.warn(error);
})
.finally(() => {
    console.log("API call completed");
});

// API call completed


// -----------------------------------------------------------------------------------------------------------------------
// Part 6: Real-Time Mini Tasks
// -----------------------------------------------------------------------------------------------------------------------

// 36. Employee salary report: Create an array of employee objects. Use filter() to select employees earning less than ₹300,000, then use forEach() to print their names and salaries.
let employees = [
    { name: "Swathi", salary: 200000 },
    { name: "Naveen", salary: 350000 },
    { name: "Arun", salary: 250000 }
];

employees
.filter((emp) => emp.salary < 300000)
.forEach((emp) => {
    console.log(emp.name, emp.salary);
});

// Swathi 200000
// Arun 250000


// 37. Product price calculator: Fetch products from the Fake Store API and use map() to create a new array containing only product titles and prices.
fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((data) => {
    let products = data.map((product) => {
        return {
            title: product.title,
            price: product.price
        };
    });

    console.log(products);
});

// [
//   { title: 'Product name', price: 109.95 },
//   ...
// ]


// 38. Product search: Fetch products and use filter() to display products belonging to a category you choose.
fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((data) => {
    let products = data.filter((product) => {
        return product.category === "electronics";
    });

    console.log(products);
});

// Products belonging to the electronics category


// 39. Number analysis: Given an array of numbers, use map(), filter(), reduce(), some(), and every() to perform different calculations and checks.
let numbers = [1, 2, 3, 4, 5, 6];

let mapped = numbers.map((n) => n * 2);
console.log(mapped);
// [2, 4, 6, 8, 10, 12]

let filtered = numbers.filter((n) => n % 2 === 0);
console.log(filtered);
// [2, 4, 6]

let reduced = numbers.reduce((a, c) => a + c, 0);
console.log(reduced);
// 21

let someResult = numbers.some((n) => n > 5);
console.log(someResult);
// true

let everyResult = numbers.every((n) => n > 0);
console.log(everyResult);
// true


// 40. Product listing: Fetch the Fake Store API data, convert the response to JSON, and print the title, price, and category of each product. Handle errors with .catch() and print a completion message with .finally().
fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((data) => {
    data.forEach((product) => {
        console.log(product.title, product.price, product.category);
    });
})
.catch((error) => {
    console.warn(error);
})
.finally(() => {
    console.log("API call completed");
});

// Product title  price  category
// ...all products
// API call completed
