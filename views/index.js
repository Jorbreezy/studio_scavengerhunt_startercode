var num = 50;

var now = "5:19, 10/16/2017";

var names = [
        "Jordan",
        "Ramata",
        "Andrea",
        "Sheng",
        "Caelan",
        "Miguel",
        "Nia",
        "Jackie",
        "Richard",
        "Lisandro",
        "Steven",
        "Alyssa",
        "Abdul",
        "Ryan",
        "Juan",
        "Richard",
        "Daniel"
    ];
    
var teachers = {
    Marcos:["Lara", "Reinhold"],
    Joe:["Tessler"],
    Peter:["Jablonski"],
    Devray:["Mehta"],
    Edwin:["Fuquen"]
}    
function log(x){
    console.log(x);
}

function randInt(min, max){
    return Math.random() * (max - min) + min;
}
    console.log(randInt(5, 10));

if (names.length % 2 == 0) {
    log("The class is very even"); 
} else {
    log("The students are kind of odd.");
}

if (randInt(1, 100) % 7 == 0){
    log("Done");
} else {
    (randInt(1, 100) % 7 == 0);
}

var str = "";

for (var i=0; i<names.length; i++){
    str += "<li>" + names[i] + "</li>"
} 

function println(names, content) {
    $(names).html(content);
}

println("#name", str);