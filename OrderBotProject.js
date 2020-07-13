/* -------------------------------------------- 

	You've just learned about variables, conditionals, functions, and user input. 
	You've also created a basic calculator in a previous project.
	
	Now imagine you are going out to eat with two other friends.
	Are you at a restaurant for a meal? Are you grabbing boba? Or are you just going to an ice cream parlor?
	At the end of the meal, you and your friends have to split the bill. 

	Wouldn't it be great if we could automate that math?

					Let's try it!

  -------------------------------------------- 

Scenario Parameters: 

	When you and your friends eat out, each of you have the option to order one or multiple items.
	What kind of items are available to order?

	At the end of the order, the receipt comes and you all have to calculate the cost for each person:
	Don't forget the tax and tip!

After this program finishes running, it should output a specific total for each person

  -------------------------------------------- */

const READLINE = require("readline-sync");

/* -------------------------------------------- 

Part 1:
Let's start by asking taking the order of the group(you and two friends). What did each person order?

Write a function that will take the group's order:
- Prompt the user to enter the price of each item they ordered
- Return the cost 

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */

let user1 = READLINE.question("What is your name?");
let user2 = READLINE.question("What is your friend's name?");
let user3 = READLINE.question("What is your other friend's name?");



function groupOrder(name){
	let cost;
	let foodOptions = READLINE.question("Would you like to order a cheesburger for 10$, fries for $5 or a drink for $3?")
	if (foodOptions == "cheesburger"){
		console.log(`${name} will spend 10$`);
		cost = 10;


	} else if (foodOptions == "fries") {
		console.log(`${name} will spend 5$`);
		cost = 5;

	} else if (foodOptions == "drink") {
		console.log(`${name} will spend 3$`);
		cost=3;

	}
	return cost;
}

let user1Meal = groupOrder(user1);
let user2Meal = groupOrder(user2);
let user3Meal = groupOrder(user3);









/* -------------------------------------------- 

Part 2:
Now that you have the costs of everything ordered, let's calculate the cost of each person's order(including tip and tax).

Write a function that will calculate the cost of each person's order, including:
- Cost of all of their ordered items
- Tax (Look up the sales tax of your city)
- Tip (Give the user the option to enter how much they want to tip)

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */

function orderCalculate(name,meal){
	let tip = READLINE.question(`How much tip would you like to give? 10%, 15%, 20%`);
	let tax = meal * 0.06;
	let userTip;
	
	if (tip == "10%"){
		userTip = 0.1 * meal;

	} else if (tip == "15%") {
		userTip = 0.15 * meal;

	} else if (tip == "20%") {
		userTip = 0.2 * meal;
	}


let fullPrice = tax + meal + userTip
return fullPrice; 

}

let user1Total = orderCalculate(user1, user1Meal);
let user2Total = orderCalculate(user1, user1Meal);
let user3Total = orderCalculate(user1, user1Meal);








/* -------------------------------------------- 

Part 3:
Let's print out a receipt for each person.

Write a function that will take the values of each person's order and total cost and print it out in an appealing way.

The receipt should include:
- Cost of each item
- Total cost for each person

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */

function printReciept () {
	console.log(user1 + ":");
	console.log("Meal:" + user1Meal);
	console.log("+ tax & tip");
	console.log("Total:" + user1Total);

	console.log(user2 + ":");
	console.log("Meal:" + user2Meal);
	console.log("+ tax & tip");
	console.log("Total:" + user2Total);

	console.log(user3 + ":");
	console.log("Meal:" + user3Meal);
	console.log("+ tax & tip");
	console.log("Total:" + user3Total);



}


printReciept();







/* -------------------------------------------- 

Part 4: Upchallenges!

How many of these upchallenges can you implement?

- Make sure the user is only entering numbers. If they enter an invalid value, prompt them to re-enter. 
- The displayed prices should only have two decimal places.
- Can you adjust your program to account for any shared items ordered for the group?
- Display the tax and tip values
- Implement a rewards system (stamp cards, buy one get one, etc)

-------------------------------------------- */
