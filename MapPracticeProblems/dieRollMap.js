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

let diceValuesArray = Array.from(diceResult.values()).sort(function (a, b) { return a - b });
let max = diceValuesArray[diceValuesArray.length - 1];
let min = diceValuesArray[0];
function getKey(map, value) {
    for (let [key, val] of diceResult) {
        if (val == value) {
                return key;
        }
    }
}
console.log(getKey(diceResult, max)+" has reached maximum times i.e.,"+max+ " times");
console.log(getKey(diceResult, min)+" has reached minimum times i.e.,"+min+ " times");
