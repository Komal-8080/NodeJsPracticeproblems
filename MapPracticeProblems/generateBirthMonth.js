let birthMonth = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0]]);
let monthMap = new Map([[1, "January"], [2, "February"], [3, "March"], [4, "April"], [5, "May"], [6, "June"], [7, "July"], [8, "August"], [9, "September"], [10, "October"], [11, "November"], [12, "December"]]);
    for (let index = 0; index < 50; index++) {
        let personBirthMonth = Math.floor(Math.random() * 12) + 1;
        let newVal = birthMonth.get(personBirthMonth);
        newVal++;
        birthMonth.set(personBirthMonth, newVal);
    }
    for (let [key, val] of birthMonth) {
        console.log(val + " people have their birthday in the month: "+ monthMap.get(key));
    }
