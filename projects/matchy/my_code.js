var animal = {};
animal.species = "dog";
animal["name"] = "Spot"; 
animal.noises = [];
console.log(animal);

var noises = [];
noises[0] = "woof";
noises.push("growl");
noises.unshift("yip");
noises[noises.length] = "howl";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

animal.noises += noises;
animal.noises.push("whine");
console.log(animal);

var animals = [];
animals.push(animal);
console.log(animals);
