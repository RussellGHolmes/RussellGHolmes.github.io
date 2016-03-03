var animal = {};
animal.species = "dog";
animal["name"] = "Spot"; 
animal.noises = [];
console.log(animal);

var noises = [];
noises[0] = "bark";
noises.push("growl");
noises.unshift("yip");
noises[noises.length] = "howl";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

animal.noises = noises;
animal.noises.push("whine");
console.log(animal);

var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
    species: "duck",
    name: "Jerome",
    noises: ["quack", "honk", "sneeze", "woosh"]
};
animals.push(duck);
console.log(animals);

var cow = {
    species: "cow",
    name: "Bessie",
    noises: ["moo", "sizzle", "would you like fries with that?", "eat more chicken"]
};
animals.push(cow);
console.log(animals);

var cat = {
    species: "cat",
    name: "Felix",
    noises: ["meow", "hiss", "whine"]
};
animals.push(cat);
console.log(animals);

//Math.random returns a random number which can used to acces an array index//
var friends = [];
function random(){
    var randomAnimal = animals[Math.floor(Math.random()*animals.length)];
    return randomAnimal.name;
}
friends.push(random());
console.log(friends);
animals[2].friends = friends;




