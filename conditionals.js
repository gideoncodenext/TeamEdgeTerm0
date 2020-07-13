
/* -------------------------------------------- 
Day 2 Challenges
-------------------------------------------- */

let message = `Welcome to Day 2
Today we are learning about conditionals. 
Let's practice writing some conditionals of our own!`;
console.log(message);

const READLINE = require("readline-sync");
/* -------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")
/* Can you drive?
    Prompt the user to enter their age.
    Write conditional statements that print out whether you can drive in your city. */


let age = READLINE.question("How old are you?")

if (age >= 16 ) {
  console.log('You are old enough to drive!')
} else {
  console.log("You are not old enough to drive yet.")
}











/* -------------------------------------------- */

console.log("------------------- Challenge 2 -------------------") 

/* Who placed first?
    Write conditional statements that checks which is the highest and prints the highest score. 
    Hint: Create three variables and assign them random scores. */


let score1 = Math.floor(Math.random() * 101);
console.log(score1);
let score2 = Math.floor(Math.random() * 101);
console.log(score2);
let score3 = Math.floor(Math.random() * 101);
console.log(score3);

if ((score1 > score2) && (score1 > score3)) {
  console.log("Player 1 is the winner");
} else if ((score2 > score3)) {
  console.log("Player 2 is the winner");
} else {
  console.log("Player 3 is the winner");
}






/* -------------------------------------------- */

console.log("------------------- Challenge 3 -------------------")

/* One of the most common parts of our daily routine is checking the weather. 
   Our outfit and accessories are dependent on the temperature and conditions outside. 
   ie. We're probably not going to wear shorts out when it's snowing...


**** Challenge 3: Part 1 ****
   Write a conditional statement that checks the value of the weather variable 
   and prints out a weather report based on the current weather:
   Rainy: Bring an umbrella
   Sunny: Wear a hat and sunglasses
   Snowing: Wear gloves and a scarf */

//Here's a variable to get you started:

let weatherArray = ["rainy", "sunny", "snowing"];


let randomWeather = weatherArray[Math.floor(Math.random() * weatherArray.length)];
console.log(randomWeather)

let temperature = Math.floor(Math.random() * 76) + 35



if (randomWeather == "rainy"){
  console.log("Bring an umbrella");
  if (temperature >= 90) {
    console.log("Its " + temperature + " degrees outside, you'd probably rather just get a bit wet");
  }

} else if (randomWeather == "sunny") {
  console.log("Wear a hat and sunglasses")
  if (temperature <= 70) {
    console.log("Even though it's sunny outside, it's " + temperature + " degrees outside, maybe wear a jacket.");
  }

} else if (randomWeather == "snowing") {
  console.log("Wear gloves and a scarf")
  if (temperature >= 60)
    console.log("Even though it's snowing, it is " + temperature + " degrees outside, I'd recommend being ready for the snow to melt");

}








//Tip: Try changing the value of the weather variable to test your other conditions.

/**** Challenge 3: Part 2 ****
   Now that you've written conditions for specific weather forecasts, let's also add in temperature! 
   You can't dress accordingly if you only know that it's raining outside but not how cold it is!
   For example:
      If it's raining and 60 degrees, you might want to bring your umbrella and wear a light jacket.
      However, if it's raining and 30 degrees, you might want to break out a warmer jacket with your umbrella instead. 
    
   Add to your conditional statements above and modify your weather reports to also take into account the temperature. 
   Make sure to account for at least three different temperatures!
   Hint: You will need another variable to keep track of the temperature.
*/


/* -------------------------------------------- */

console.log("------------------- Challenge 4 -------------------")

/* Prompt the user to enter the day of the week (1-7 representing Monday - Sunday)
    Write a set of conditionals that will take a number from 1 to 7 
    and print out the corresponding day of the week. 
    Make sure to add a statement that accounts of any numbers out of range! */
// console.log an error if numbers are not between 1-7



let dayOfWeek = READLINE.question("What day of the week is it, answer with a number. For example, Monday is 1, Tuesday is 2, etc.")

if (dayOfWeek == 1){
  console.log("The day is Monday.");
} else if (dayOfWeek == 2) {
  console.log("The day is Tuesday.");

} else if (dayOfWeek == 3) {
  console.log("The day is Wednesday.");

} else if (dayOfWeek == 4) {
  console.log("The day is Thursday.");


} else if (dayOfWeek == 5) {
  console.log("The day is Friday.");

} else if (dayOfWeek == 6) {
  console.log("The day is Saturday.");

} else if (dayOfWeek == 7) {
  console.log("The day is Sunday");

}else {
  console.log("Error. Please input a number between 1 and 7");

}

/* -------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")

/* A leap year is a calendar year that contains an additional day added 
    to keep the calendar year synchronized with the astronomical year or seasonal year.
    To calculate if a specific year is/was a leap year, you can follow the following steps:
      1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
      2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
      3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
      4. The year is a leap year (it has 366 days).
      5. The year is not a leap year (it has 365 days).

  Those are a lot of conditions...

  Your challenge is to translate the steps above into conditionals which will evaluate if the 
  year stored in a variable is/was a leap year.*/


// module gives remainder when you divide by %. If you can divide by 2 go to step 2, etc.

let currentYear = READLINE.question("What is the current year?")

if (currentYear%4 == 0) {
  console.log("Number is divisible by 4. Now lets check if its divisible by 100!")

  if (currentYear%100) {
    console.log("Number is divisble by 100. Now lets check if its divisble by 400!")

  }

      if (currentYear%400){
        console.log("The year is a leap year!")
      }

}else{ 
  console.log("The year is not a leap year")

}


