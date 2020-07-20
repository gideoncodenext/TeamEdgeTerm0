const READLINE = require("readline-sync")
let gameIsOn = true
let inputMsg =""
let location = "white room"
 
function start(){
   console.log("Welcome to my game!")
   let name = READLINE.question("What is your name, player? ")
   console.log("You can type command word `help` for a list of functioning commands.")
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
	
 
       inputMsg = input.toLowerCase()
 
       if(inputMsg.includes("help")){
 
           console.log("Here are some commands you can try: help, end, press, take, swim, walk, search")
 
       }else if(inputMsg.includes("end")){
 
       		gameIsOn =false
       		console.log("Thank you for playing, goodbye!")


       	} else if (inputMsg.includes("press red button") && location == "white room"){
       		console.log("Cmon now, you should know better. Never press the red button.")
       		console.log("GAME OVER")
       		gameIsOn = false 
       		console.log("Thank you for playing, goodbye.")

       } else if (inputMsg.includes("press blue button") && location == "white room"){
       		location = "pond"
       		console.log("A trap door beneath you suddenly opens. You plummet down a long, enclosed and completely dark slide." + "\n" + "As you continue to gain speed and momentum, you begin to worry about surviving the impact, when the slide abruptly tilts upwards and then ends, shooting you high into the air and dazzling light." + "\n")
       		console.log("Your fall is cushioned by a large clear body of water, surrounded by jungle and equally surprsised people holding spears." + "\n")
       		console.log("As you submerge under water, you notice a glimmering silver key on a ledge ten feet further down." + "\n")
       		console.log("You come up for air, and a spear whizzes past you." + "\n")

       
        } else if (inputMsg.includes("take key") && location == "pond") {
        	location = "pond exit"
        	console.log("You dive ten feet down to grab the key. You take the key and store it in your pocket. You begin your ascent to the surface of the water when you are struck by a sharp spear. The spear hits your shoulder, creating a small but painful gash.")

        } else if (inputMsg.includes("swim") && location == "pond exit"){
        	location = "vehicle"
        	console.log("You begin to swim far away from the people with spears and while looking for your next plan of action you spot a rugged jeep.")
        	console.log("You run towards the jeep and hurridly try the door.")
        	console.log("The door pops open after trying for some time and you enter the car.")

        } else if (inputMsg.includes("start") && location == "vehicle"){
        	location = "inside jeep"
        	console.log("Spears are being thrown against the windshield as the engine stalls while you continue to rev the jeep. All of a sudden the jeep roars to life.")
        	console.log("You floor the jeep and begin driving to create distance between you and your attackers.")
        	console.log("After a half an hour of driving your adrenaline begins to wear off and you now feel the full pain of your wound")
        	console.log("You need some form of medical treatment for your wound, you should check your surroundings for any sort of medical supplies")

        } else if (inputMsg.includes("search") && location == "inside jeep") {
        	location = "searching for meds"
        	console.log("After searching the majority of the car, you don't find any supplies.")
        	console.log("As your last hope, you open the glove box. Unfortunately no medical supplies are inside.")
        	console.log("However, you notice a phone.")

        } else if (inputMsg.includes("take phone") && location == "searching for meds"){
        	location = "phone"
        	console.log("You open the phone to find a recorded voice message from 2 months ago.")
        	console.log("Do you wish to play the memo?")

        } else if (inputMsg.includes("yes") && location == "phone"){
        	console.log("You play the message.")
        	console.log("You here a panicked voice: They are watching you. All of your actions are not within your control. There is no true escape.")
        	console.log("GAME OVER")
        	gameIsOn = false 
       		console.log("Thank you for playing, goodbye.")





       	} else if (inputMsg.includes("swim") && location == "pond"){
       		location = "forest"
       		console.log("You begin to swim like hell to the far bank of the water to get away from the men")
       		console.log("As you swim for the far shore you notice a rugged jeep and can only imagine if the key would have turned the ignition. No time for turning back now." + "\n")
       		console.log("You exit the water and hit the ground running, trying your best to dodge the incoming spears." + "\n")
       		console.log("After about 10 minutes of running through the forest, you approach a fork in the road. One pathway breaks to the left, while the other goes towards the right.")

       	} else if (inputMsg.includes("walk left") && location == "forest"){
       		location = "left path"
       		console.log("You embark on the left path.")
       		console.log("As you are walking you can't help but feel as if you are being watched..." + "\n")
       		console.log("All of a sudden a group of people with spears (similar to those near the pond) surround you. The odds are stacked against you, there is no option to fight, it seems that this is going to be your end.")
       		let lastWords = READLINE.question("The men surrounding you ask if you have any last words:")
       		console.log("Unfortunately your words will not save you.")
       		console.log("GAME OVER")
       		gameIsOn = false 
       		console.log("Thank you for playing, goodbye.")





       	




       		




 
       } else {
           console.log("Sorry, I don't know what that means.")
           }
}
      
start()