 
/********************************************************************
 *                                                                  
 *  Team Edge objects: SUPERHERO CHALLENGES 
 * 
 *   In this challenge you are going to modify this code to do the
 *   the following below. Before you begin, walkthrough the code 
 *   with your coaches.
 *   
 *   1. Change both superhero and nemesis using same class.
 *   2. Change the constants to modify gameplay and see how it affects
 *      the game outcomes.
 *   3. Make any improvements you think would make this game better.
 *   4. Complete all the comments to demonstrate you understand the code
 *      Be specific about what each code block is doing.
 *     
 * 
 * ***************************************************************/

console.log("-------------------  SUPERHERO !!  -------------------")

const DELAY = 300
const DAMAGE_LIMIT = 5
const MAJOR_BLOW = DAMAGE_LIMIT -2
const LIVES_TOP_RANGE = 60
const LIVES_BOTTOM_RANGE = 40
let rounds = 1
let gameIsOn = true

//COMMENT 1: This section makes a class called Superhero. In the class there is a function called constructor which contains parameters, variables and empy arrays.
class Superhero {

    constructor(name, isAlive, friends, hitPoints, isGood , attackPower) {
       this.name = name;
       this.isAlive = isAlive;
       this.taunts=[]
       this.cries=[]
       this.lives = []
       
       
     } attack(enemy){
        
        //COMMENT 2 The if statement checks if the superhero is alive and the enemy is alive. If they are both alive, it sets the damage equal to a random number and then it subtracts the random number of damage from the enemy health.
        // The next if statement checks if the damage is greater than or equal to major blow and if so, it prints the message major blow.
        if(this.isAlive && enemy.isAlive){  
          
            console.log("  \n   ")
            let damage = randomInteger(0,DAMAGE_LIMIT)         
            enemy.lives.splice(0, damage)
            
            if(damage >= MAJOR_BLOW){

                console.log(` ⚔️⚔️⚔️  Major Blow! ⚔️⚔️⚔️  \n`)
                 
            }

             //COMMENT 3....  The superhero taunts villian and then does damage 
            console.log(`${this.name} 💬 : ${this.taunts[randomInteger(0,this.taunts.length-1)]} \n`)
            console.log(`${this.name}  💥X ${damage} ${enemy.name}  ${enemy.lives} : ${enemy.lives.length} \n`)

            if(enemy.lives.length <= 0){
               
                //COMMENT 4 If the hero or enemy dies it will print that they have been slain and the game is over
                enemy.isAlive=false
                gameIsOn =false
                console.log(`💀💀💀💀💀💀 ${enemy.name} has been slain!!! 💀💀💀💀💀 `)
                console.log(` GAME OVER `)
                clearInterval(timer)
            }
            if(this.lives.length <= 0  ){

                this.isAlive = false
                gameIsOn =false
                console.log(`💀💀💀💀💀💀 ${this.name} has been slain!!! 💀💀💀💀💀`)
                console.log(` GAME OVER `)
                clearInterval(timer);

            }

        } 

     }

     fillHealth(){
          //COMMENT Filling health bar
          let amt = randomInteger(LIVES_BOTTOM_RANGE, LIVES_TOP_RANGE)
           
            for(let i = 0; i <= amt ; i++){

                this.lives.push("💙")
            }

    }
 }

//COMMENT 6 Creating objects for joker and batman.
let batman = new Superhero()
batman.name="Batman 🦸‍♂️"
batman.isAlive = true 
batman.lives=[]
batman.taunts=["The Dark Knight always wins!" , "You can't hang with the bat man" , "Meet my fist, scumbag" , "You Suck!"]
batman.cries=["Ouch!" , "UFF!" , "Gaaaaaaa" , "No!!!!!"]
batman.fillHealth()
 
let joker = new Superhero()
joker.name = "Joker 🦹‍♂️"
joker.isAlive = true
joker.lives=[]
joker.taunts =["You are a schmemer" , "Don't mess with the Joker!" , "Pick your face off the ground, you might need it!", "Getting tired of the beatings?"]
joker.cries = ["Aaaa!" , "Goh!" , "Hmph!" ,"You will pay for this"]
joker.fillHealth()


console.log(`${joker.name} :  ${joker.lives} - ${joker.lives.length}`)
console.log(`${batman.name} : ${batman.lives} -  ${batman.lives.length} `)
console.log(`${batman.name} 💬 ${batman.taunts[1]}  \n `)
console.log(`${joker.name} 💬 ${joker.taunts[1]}  \n `)


//COMMENT 7 Fighting for a round. 
function fight(a, b){
    console.log(" ------------- ROUND -------------> " + rounds)
    
    a.attack(b)
    b.attack(a)
    rounds ++

}

//This helper function returns a random number between a given min and max value, and is used various times in this game.
function randomInteger(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min 
  }


  //COMMENT 8 Cause the heros to repeatedly fight 
  let timer = setInterval(function() {

    if(gameIsOn){
        
        fight(batman,joker) 
        console.log(" \n")


    }
}, DELAY);