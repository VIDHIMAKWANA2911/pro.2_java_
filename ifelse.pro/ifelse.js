let month = "November";
if (month == "january" || month == "March" ||month == "May" ||month == "July" ||month == "August" ||month == "October" || month == "December") {
  console.log("TOTAL DAY 31");
} else if (
  month == "April" || month == "June" ||month == "September" || month == "November") {
  console.log("TOTAL DAY 30");
} else if (month == "February") {
  console.log("TOTAL DAY 28/29");
} else {
  console.log("INVALID MONTH");
}

// *******************************************************

let mode = "yellow";
let color;
if (mode === "white") {
  color = "white";
} else if (mode === "blue") {
  color = "blue";
} else if (mode === "pink") {
  color = "pink";
} else if (mode === "green") {
  color = "green";
} else {
  color = "Black";
}
console.log(color);

//********************************************************** */

let purchaseAmount = 780;

if (purchaseAmount >= 500) {
  console.log("You get a 20% discount!");
} else if (purchaseAmount >= 300) {
  console.log("You get a 10% discount!");
} else if (purchaseAmount >= 100) {
  console.log("You get a 5% discount!");
} else {
  console.log("No discount available.");
}

//************************************************************//

let age = 28;
let income = 45000;

if (age < 18) {
  console.log("Not eligible for a loan. Minimum age is 18.");
} else if (income >= 50000) {
  console.log("You are eligible for a premium loan.");
} else if (income >= 30000) {
  console.log("You are eligible for a standard loan.");
} else {
  console.log("Not eligible for a loan.");
}

//*********************************************************************//

let trafficLight = "green";

if (trafficLight === "green") {
  console.log("You can go! The light is green.");
} else if (trafficLight === "yellow") {
  console.log("Slow down! The light is yellow.");
} else if (trafficLight === "red") {
  console.log("Stop! The light is red.");
} else {
  console.log("Invalid traffic light color.");
}

//*********************************************************************//

let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

//************************************************************************//

let temperature = 6; // Temperature in degrees Celsius

if (temperature > 30) {
  console.log("Wear light clothing.");
} else if (temperature >= 20) {
  console.log("Wear comfortable clothes.");
} else if (temperature >= 10) {
  console.log("Wear a jacket.");
} else {
  console.log("wear a normal cloth!");
}

//***********************************************************************//

let marks = 85;

if (marks >= 90) {
  console.log("Grade A: Excellent!");
} else if (marks >= 75) {
  console.log("Grade B: Good job!");
} else if (marks >= 60) {
  console.log("Grade C: You passed.");
} else if (marks >= 50) {
  console.log("Grade D: pass.");
} else {
  console.log("Grade E: Failed. ");
}

//************************************************************************//

let number = 15;

if (number % 3 === 0 && number % 5 === 0) {
  console.log("The number is divisible by  3 and 5.");
} else if (number % 3 === 0) {
  console.log("The number is divisible by 3.");
} else if (number % 5 === 0) {
  console.log("The number is divisible by 5.");
} else {
  console.log("The number is not divisible by 3 or 5.");
}

//*************************************************************************//

let value = "2";

if(value>= "0" && value <= "1000"){
    console.log("digit")
}else if(value >= "a" && value <= "z" || value >= "A" && value <= "Z"){
    console.log("Alaphabet");
}else {
    console.log("Special Charcters");
}

//**************************************************************************//

let aa = 50
let bb = 100
let cc = 150

if(aa>bb && aa>cc){
  console.log("AA is  maximum")
}else if (bb>aa && bb>cc){
  console.log("BB is maximum")
}else{
  console.log("cc is maximum")
}


// ***********************************************************************//

let year = 2054

if(year%4==0){
  console.log("leap year")
}else{
  console.log("not leap year")
}

//***************************************************************************//