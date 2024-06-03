// whilekl,.,m 
let a = 1;
while(a<10){
    console.log(`La valeur de la variable a est $ {a}.`);
    a++
}
console.log("Boucle Terminée");


// // do-while
let b = 3;
do{
    console.log(`La valeur de la variable a est $ {b}.`);
    b++
} while(b<10)

console.log("Boucle Terminée");

// // for
let d = 6
for (var i = 1;  i <10; i++){
    console.log(`La valeur de la variable a est $ {d}.`);

}

// boucles for each

var colors = ["Rouge" , "Blue", "Vert"];
let person = {
    prenom : "Abdou",
    nom : "Mbacke",
    age: 23,
    sexe : "M"
};

for(color in colors){
    console.log(`Ma couleur préférée est le ${colors[color]}.`);
}
 
for (prop in person){
    console.log(`La valeur de la clé  ${prop} est ${person[prop]}.`);
}

//  break
let x = 7
for (var i = 1;  i <10; i++){
    if(i == 5){
        break;
    }
    console.log(`La valeur de la variable a est $ {x}.`);

}