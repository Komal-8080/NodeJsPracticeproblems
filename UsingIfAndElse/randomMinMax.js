
let max = 99;
let min = 1000;
let random = Math.floor(Math.random() * 1000)+100;

for ( let i=1; i<=5; i++) { 
let random = Math.floor(Math.random() * 1000)+100;
console.log("Random Numbers are: " +random);
if ( random >= max) {
	max = random;
}
else {
	min = random;
}
}
console.log("Maximum is " +max);
console.log("Minimum is " +min);
 
