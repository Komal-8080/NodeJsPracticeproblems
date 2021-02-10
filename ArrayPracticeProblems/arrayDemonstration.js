
let origDogs = ["BullDog","Beagle","Labrador"];
let cats = new Array("American Curl", "Bengal");
let birds = new Array("Falcons", "Ducks", "Flamingoes");

//Array copy elements
let sliceDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//Stack functions (LIFO) push and pop
let pushDogs = dogs.push("Golden Retriever");
let popDog = dogs.pop();
dogs[dogs.length] = "Poodle";

//Add and Remove from first
let addFirst = dogs.unshift("Golden Retriever");
let shiftDog = dogs.shift();

//Atomic add and remove elements (where, how many to remove, element list)
let animals = dogs.concat(cats,birds);
let newAnimal = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first, second]) {
	console.log("Scan: " +first+ " " +second);
}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for (let animal of animals) allAnimals +=animal + " ";
console.log("Animals: "+allAnimals);
