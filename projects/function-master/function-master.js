function objectValues(obj) {
     var output = [];
     for (var key in obj) {
         output.push(obj[key]);
     }
     return output;
}

function keysToString(obj) {
    return Object.keys(obj).join(" ");
}

function valuesToString(obj){
    var output = ""
    for (var key in obj){
        if (typeof obj[key] === "string")
            output += obj[key] + " ";
    }
    return output.trim();
}

function arrayOrObject(argument){
    if (Array.isArray(argument)) return 'array';
    if (typeof argument === "object") return 'object';
}

function capitalizeWord(string){
    var firstLetter = string[0];
    var restOfWord = string.substring(1);
    return firstLetter.toUpperCase() + restOfWord;
}

function capitalizeAllWords(string){
    var split = string.split(" ");
    var output = "";
    for (var i = 0; i < split.length; i++){
        output += capitalizeWord(split[i]) + " ";
    }
    return output.trim();    
}   

function welcomeMessage(object){
    return "Welcome " + capitalizeWord(object.name) + "!"; 
}

function profileInfo(object){
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

function maybeNoises(object){
    if (object.noises && object.noises[0]){
        var noiseString = "";
        for (var i = 0; i < object.noises.length; i++){
            noiseString += object.noises[i] + " ";
        }
        return noiseString.trim();
    }
    return "there are no noises";
}

function hasWord(string, word){
    if (string.indexOf(word) > -1)
        return true;
    return false;
}

function addFriend(name, object){
    object.friends.push(name);
    return object;
}

function isFriend(name, object){
    if (object.friends){
        for (var i = 0; i < object.friends.length; i++){
            if (object.friends[i] === name)
                return true;
        }
    }    
    return false;
}
function arrayIncludes(array, element){
    return (array.indexOf(element) > -1);
}

function nonFriends(name, people){
    var nonFriends = [];
    var person;
    for (var i = 0; i < people.length; i++){
        if (people[i].name === name)
            person = people[i];
    }
    var friends = person.friends;
    for (var j = 0; j < people.length; j++){
        if (people[j] == person) continue;
        if (!arrayIncludes(friends, people[j].name)){
            nonFriends.push(people[j].name);
        }
    }
    return nonFriends;
} 

function updateObject(object, key, value){
    
}