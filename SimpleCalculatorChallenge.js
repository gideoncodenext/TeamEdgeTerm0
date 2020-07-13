/* -------------------------------------------- 

	You've just learned all about functions. 
	Now take what you've learned to create your own

					CALCULATOR!

	We'll guide you through the first few steps,
	then you'll have a chance to add your own features
	that will make this your new go-to calculator!

  -------------------------------------------- */

  const READLINE = require("readline-sync");
  console.log(`My Simple Calculator`);

/* -------------------------------------------- 

Part 1: 

	The first features of any simple calculator is that
	it should be able to perform the basic math operations. 
	Let's start by writing the functions we'll need to execute 
	the following operations:

		Addition
		Subtraction

  -------------------------------------------- */

// Write a function called addNumbers that will take two numbers and return the sum.

function addNumbers(x, y){
	add = x + y;
	console.log(`${x} + ${y} is ${add}`);
	return add;
}

addNumbers(2,3);




// Write a function called subNumbers that will take two numbers and return the difference.

function subNumbers(x,y){
	sub = x - y;
	console.log(`${x} - ${y} is ${sub}`);
	return sub;
}

subNumbers(6, 2);




/*------------*/
// Testing Code - Uncomment the code below to test your code!

 checkAnswers(addNumbers(5, 15), 20); 
 checkAnswers(addNumbers(3, 18), 21);
 checkAnswers(addNumbers(12, 28), 40); 

 checkAnswers(subNumbers(18, 7), 11);
 checkAnswers(subNumbers(11, 9), 2);
 checkAnswers(subNumbers(18, 21), -3);

/* -------------------------------------------- 

Part 2: 

	Now that you have addition and subtraction down, let's add the other operators we learned!

	Finish off your basic calculator by writing the functions 
	for the following operations:

		Multiplication
		Division 

  -------------------------------------------- */

// Write a function called multiplyNumbers that will take two numbers and return the product.

function multiplyNumbers(x,y){
	mult = x * y;
	console.log(`${x} * ${y} is ${mult}`);
	return mult;
}

multiplyNumbers(4, 2);


// Write a function called divideNumbers that will take two numbers and return the quotent.

function divideNumbers(x,y){
	div = x / y;
	console.log(`${x} / ${y} is ${div}`);
	return div;
}

divideNumbers(6, 2)



/*------------*/
// Testing Code - Uncomment the code below to test your code!

checkAnswers(multiplyNumbers(10, 3), 30); 
checkAnswers(multiplyNumbers(21, 7), 147);
checkAnswers(multiplyNumbers(4, 16), 64); 

checkAnswers(divideNumbers(24, 100), `.24`);
checkAnswers(divideNumbers(21, 7), `3`);
checkAnswers(divideNumbers(15, 4), `3.75`);

/* -------------------------------------------- 

Part 3: 

	Now that you have your basic functions in place, you need to get some user input.
	What's a calculator for if no one is using it?

Write a function that will prompt the user for the operation they want to call and the values they are inputting.

  -------------------------------------------- */

function myCalculator() { 
	let userInput = READLINE.question("What operation do you want to do, addition, subtraction, multiplication or division?")

	if (userInput == "addition" ){
		let addInputX = READLINE.question("What is the first number you want?");
		let addInputY = READLINE.question("What is the second number you want?");
		return addNumbers(parseInt(addInputX), parseInt(addInputY));
		


	} else if (userInput == "subtraction"){
		let subInputX = READLINE.question("What is the first number you want?");
		let subInputY = READLINE.question("What is the second number you want?");
		return subNumbers(parseInt (subInputX), parseInt (subInputY));

	} else if (userInput == "multiplication"){
		let multInputX = READLINE.question("What is the first number you want?");
		let multInputY = READLINE.question("What is the second number you want?");
		return multiplyNumbers(parseInt (multInputX), parseInt (multInputY));
	} else if (userInput == "division") {
		let divInputX = READLINE.question("What is the first number you want?");
		let divInputY = READLINE.question("What is the second number you want?");
		return divideNumbers(parseInt (divInputX), parseInt (divInputY));
	}
}

outputValue = myCalculator()
console.log(outputValue)















/* -------------------------------------------- 

Part 4: 

	Now that you have all of the basic four operations completed, you get to add your own features!
	What will you add to make this your go-to calculator? 

	Stuck? : Think about what you count/calculate on a (almost) daily basis.
	Can you write a function that will take in the data you need and do the calculation for you? 

	(I know I calculate how many hours of sleep I get every day... ｡(*^▽^*)ゞ )

  -------------------------------------------- 

Write a function or functions that will add some unique features to your calculator. 
Don't forget to:
		Give your function an name and parameters that are self explanatory and written in camelcase!
		Use comments throughout your code
		Test your code!
  
  -------------------------------------------- */



function calculateSleep() {
	let userSleepX = READLINE.question("What time did you go to bed?");
	let userSleepY = READLINE.question("What time did you wake up?");
	return subNumbers(parseFloat (userSleepX), parseFloat (userSleepY));


}


outputSleepValue = calculateSleep()
console.log(outputSleepValue);
	













/* -------------------------------------------- */
// Ignore this section. This is just for checking your work

function checkAnswers(genAnswer, correctAnswer){
	if(genAnswer == correctAnswer){
		console.log(`Your code works!`)
	}
	else{
		console.log(`Try again, your code generated ${genAnswer} but the correct answer is ${correctAnswer}`);
	}
}