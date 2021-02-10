
const ARRAY_LENGTH = 10;
const randomArray = [];
for(let i=0; i<ARRAY_LENGTH; i++) {
	randomArray.push(Math.floor(Math.random() *1000) +100);
}
console.log(randomArray);

for (let i=0; i<ARRAY_LENGTH; i++) {
	for(let j=0; j<ARRAY_LENGTH-i-1; j++) {
		if(randomArray[j] > randomArray[j+1]) {
			let temp = randomArray[j];
			randomArray[j] = randomArray[j+1];
			randomArray[j+1] = temp;
		}
	}
}
console.log("Array In sorted order : " +randomArray);
console.log("Second Smallest number in Array is: " +randomArray[1]);
console.log("Second Largest number in Array is: " +randomArray[8]);
