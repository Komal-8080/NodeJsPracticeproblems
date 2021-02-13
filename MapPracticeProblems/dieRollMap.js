let valid = true;
let diceResult = new Map([ [1,0],[2,0],[3,0],[4,0],[5,0],[6,0] ]);
let count = false;

while (true){
    let dice = Math.floor(Math.random() * 6)+1;
    let rolls = diceResult.get(dice);
    for (let [key, val] of diceResult){
        if (val == 10){            
            count = true;
            break;
        }
    } 
    if (count == true)
    break; 
    rolls++;
    diceResult.set(dice, rolls);
}           
    for (let [key, val] of diceResult){
        console.log("Dice value is: "+key+ " for "+val+ "times"); 
    }

