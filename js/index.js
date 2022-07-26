// Iteration 1: Names and Input
//1.1, 1.2, 1.3, 1.4
let hacker1 = "Samy";
console.log("The driver's name is " + hacker1);

let hacker2 = "Txell";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
//2.1
if (hacker1.length > hacker2.length) {
console.log(`The driver has te longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has te longest name, it thas ${hacker2.length} characters).`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
}


// Iteration 3: Loops
//3.1
for (let letra of hacker1) {
    console.log(letra.toUpperCase())
}

//3.2
let hacker2Reverse = hacker2.split().reverse().join();;
for (let letter of hacker2Reverse) {
    console.log(letter)
}

//3.3
for (let letterPosition  = 0; letterPosition < hacker2.length; letterPosition++ ) {
    if (hacker1[letterPosition] > hacker2[letterPosition]) {
        console.log("The driver's name goes first.");
        break;
    } else if (hacker2[letterPosition] > hacker1[letterPosition]) {
        console.log("Yo, the navigator goes first definitely.");
        break;
    } else if (hacker1[letterPosition] === hacker2[letterPosition]) {
        console.log ("What?! You both have the same name?")
        continue;
    } 
}

//Bonus 1

//Bonus 2