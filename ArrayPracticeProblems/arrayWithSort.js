
const ARRAY_LENGTH = 10;
const randomArray = [];
for(let i=0; i<ARRAY_LENGTH; i++) {
	randomArray.push(Math.floor(Math.random() *1000) +100);
}
console.log(randomArray);

sortedArray = randomArray.sort();
console.log("Array In sorted order : " +sortedArray);
console.log("Second Smallest number in Array is: " +sortedArray[1]);
console.log("Second Largest number in Array is: " +sortedArray[8]);














