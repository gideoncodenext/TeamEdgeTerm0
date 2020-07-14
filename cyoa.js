const READLINE = require("readline-sync")
let gameIsOn = true
let inputMsg =""
 
function start(){
   console.log("Welcome to my game!")
   let name = READLINE.question("What is your name, player? ")
   console.log("Welcome, " + name + `\n` + "You wake up in an all white, unfamilar room. All of the walls are bare except for two buttons on the east wall. One button is red, the other is blue.");
 
   while(gameIsOn){
       checkAnswer(promptUser())
   }
}

function promptUser(){
       let  reply = READLINE.question("What do you want to do?  >>  ")
       return reply
      }

function checkAnswer(input){
 
       inputMsg = input
 
       if(inputMsg.includes("help")){
 
           console.log("Here are some commands you can try: help, end")
 
       }else if(inputMsg.includes("end")){
 
       gameIsOn =false
       console.log("Thank you for playing, goodbye!")
 
       }else {
           console.log("Sorry, I don't know what that means.")
           }
       }
start()