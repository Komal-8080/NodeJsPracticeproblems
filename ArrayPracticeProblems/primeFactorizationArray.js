

console.log("Prime Factors of 20 are: ")
for (let i =2; i <= 20; i++) {
	let flag = 0;
	for ( let j =2; j<= i-1; j++) {
		if ( i%j == 0) {
			flag = 1;
		}
	}
	if ( flag == 0 && 20%i == 0) {
		let array = [i];
		console.log(array);
	}
}

