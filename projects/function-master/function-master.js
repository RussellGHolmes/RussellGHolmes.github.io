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
