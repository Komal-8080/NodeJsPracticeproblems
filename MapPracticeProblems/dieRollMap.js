let valid = true;
let diceResult = new Map([ [1,0],[2,0],[3,0],[4,0],[5,0],[6,0] ]);

while (true){
    let dice = Math.floor(Math.random() * 6)+1;
    let rolls = diceResult.get(dice);
    for (let [key, val] of diceResult){
        console.log("Dice value is: "+key+ " for "+val+ "times");
        rolls++;
        diceResult.set(dice, rolls);
    }
}