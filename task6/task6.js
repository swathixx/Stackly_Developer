
// =====================================
// DATE - GET & SET METHODS
// =====================================

let date = new Date();

console.log("Original Date:");   // Original Date:
console.log(date);              // Current date and time


// =====================================
// 1. GET METHODS
// =====================================

console.log("\n--- GET METHODS ---");          // --- GET METHODS ---

console.log("Date:", date.getDate());          // Date: current date
console.log("Day:", date.getDay());            // Day: 0 - 6
console.log("Month:", date.getMonth() + 1);    // Month: 1 - 12
console.log("Year:", date.getFullYear());      // Year: current year

console.log("Hours:", date.getHours());        // Hours: current hour
console.log("Minutes:", date.getMinutes());    // Minutes: current minute
console.log("Seconds:", date.getSeconds());    // Seconds: current second


// =====================================
// 2. SET DATE
// =====================================

date.setDate(15);                              // Sets date to 15

console.log("\nAfter setDate(15):");           // After setDate(15):
console.log(date);                             // Date changed to 15


// =====================================
// 3. SET MONTH
// =====================================

date.setMonth(5);                              // Sets month to June

console.log("\nAfter setMonth(5):");           // After setMonth(5):
console.log(date);                             // Month changed to June


// =====================================
// 4. SET YEAR
// =====================================

date.setFullYear(2030);                        // Sets year to 2030

console.log("\nAfter setFullYear(2030):");     // After setFullYear(2030):
console.log(date);                             // Year changed to 2030


// =====================================
// 5. SET TIME
// =====================================

date.setHours(10);                             // Sets hour to 10
date.setMinutes(30);                           // Sets minutes to 30
date.setSeconds(45);                           // Sets seconds to 45

console.log("\nAfter changing time:");         // After changing time:
console.log(date);                             // 15 June 2030, 10:30:45


// =====================================
// 6. GET UPDATED VALUES
// =====================================

console.log("\n--- UPDATED DATE ---");         // --- UPDATED DATE ---

console.log("Date:", date.getDate());          // Date: 15
console.log("Month:", date.getMonth() + 1);    // Month: 6
console.log("Year:", date.getFullYear());      // Year: 2030

console.log("Hours:", date.getHours());        // Hours: 10
console.log("Minutes:", date.getMinutes());    // Minutes: 30
console.log("Seconds:", date.getSeconds());    // Seconds: 45


// =====================================
// 7. EXTRA - GET TIME
// =====================================

console.log("\nTime in milliseconds:");        // Time in milliseconds:
console.log(date.getTime());                   // Milliseconds since Jan 1, 1970
