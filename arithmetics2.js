// # Programming Basics: Arithmetic Operators (Math Problems)
 
// These tasks are aimed at making you more comfortable with solving math problems using JS. **Print each of your results to the console.**

// **Basic Arithmetic Problems**

// Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold? 
const amount = 6450;
const ticketPrice = 15;
const sale = amount / ticketPrice;
console.log(sale);

// Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
const weekEarnings = 500;
const yearEarnings = weekEarnings * 53;
console.log("Sylvia makes " + yearEarnings + " dollars p.a.");

// **Percentage**

// Q3. Calculate the percentage of 17/30. Expected output: number%
console.log(17/30);

// **Geometry Formulas** 

// Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
console.log(4.75 * 4);

// Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
console.log(5 + 6 + 7);

// Q6. Calculate the area of a square. Each side is 5cm.
console.log(5 * 5);

// Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
console.log((0.5 * 5) * (0.5 * 6) * (0.5 * 7));

// Q8. Calculate the volume of a cube. Length of each side is 9cm.
console.log(9 * 3);

// **Consumer Formula**

// Q9. Calculate the three bills including tips:
// €22.35 + 10% tip
console.log(22.35 + (22.35/10));
// €26.67 + 15% tip
console.log(26.67 + (26.67/15));
// €35.92 + 20% tip
console.log(35.92 + (35.92/20));

// **Average** 

// Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
// What is Noemy's average hours worked per day?
console.log((8+6+5+9+8+2+1+8.5+7+4)/9);

// Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
console.log((75+70+85+90+100+90)/6);

// Expected output: Score in the sixth test: --.

// Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. 
// He has taken 8 assessments and his average is 78%. 
// What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
// Expected output: James needs a minimum of --% to get an 80% average.
const averageOfEightTest = 78*8;
const averageOfNineTest = 80*9;
const minResult = averageOfNineTest - averageOfEightTest;
console.log(`James need a minimum of ${minResult}% to get an 80% average.`);

