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
////////////////////////BONUS///////////////////////////


// Bonus 1: Count the number of words in the string
const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue condimentum porta. Donec sem tellus, tincidunt et est eu, fringilla vestibulum turpis. Fusce dapibus, leo et auctor lacinia, nunc lacus malesuada est, at interdum nibh leo sed leo. Fusce aliquam finibus tortor quis auctor. Proin maximus mi in dictum auctor. Cras fermentum nisi sed mi consequat, sit amet rhoncus magna tristique. Mauris aliquam tincidunt nunc hendrerit malesuada. Praesent eget nisl augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam lorem ligula, malesuada eleifend quam sed, molestie dapibus massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus velit lectus, ullamcorper pharetra nisl nec, tincidunt hendrerit urna. Sed id ullamcorper leo, ut vulputate quam. Sed eu arcu at elit rhoncus lacinia. Sed aliquam libero sed turpis pulvinar, sed blandit nisi mollis. Mauris felis nulla, tempus sit amet ante eu, condimentum vestibulum justo.

Maecenas non nisi viverra, semper justo a, hendrerit ligula. Fusce interdum metus elit, ut imperdiet turpis posuere eu. Nullam dignissim sollicitudin libero, ut lacinia purus varius nec. Fusce interdum ex in bibendum imperdiet. Proin ac eros diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque dui purus, viverra quis scelerisque at, sodales vitae nisl. Sed scelerisque massa at lobortis pellentesque. Pellentesque in consequat diam, nec congue dolor. Proin ac est ultrices, ultricies lectus sit amet, pellentesque dolor. Maecenas vitae elit metus.

Curabitur at ex eu augue tempor maximus. Fusce sodales diam ac leo volutpat, sodales molestie neque molestie. Praesent et pretium elit, accumsan sagittis sem. Proin euismod, enim vitae mollis cursus, ante magna iaculis ex, quis mollis ipsum sapien a nulla. Donec ultrices, risus vel ultricies vulputate, quam enim vestibulum massa, vitae euismod lorem lorem ac tortor. Etiam vulputate id sem eget pellentesque. Sed malesuada tristique quam ut auctor. Sed quam metus, maximus quis faucibus sit amet, semper ac purus. Quisque sed ipsum arcu. Vestibulum non urna pellentesque quam volutpat porta vel et nisl. Nam imperdiet auctor ipsum ac cursus. Integer vel nunc eget ligula porta dictum.
`;

// Bonus 1: Count the number of words in the string
let words = 0;
let returns = 0;
let loremCopy= lorem;

for (var i = 0; i < loremCopy.length; i++) {
    if (loremCopy[i] === ".") loremCopy[i] = " ";
    if (loremCopy[i] === ",") loremCopy[i] = " ";
    if (loremCopy[i] == '\n') {
        returns++;
    }
}

for (var character of loremCopy) {
    if (character === " " ) words++;
}

let totalWords = words + (returns / 2);
console.log(`Lorem Ipsum contains ${totalWords} words.`);

// Bonus 1: Count the number of times the Latin word 'et' appears
let etCounter = 0;

for (var i = 0; i < lorem.length; i++) {
    if (lorem[i] === "e" && lorem[i+1] === "t") {
        if (lorem[i-1] === " " && lorem[i+2] === " ") {
            etCounter++;
        }
    }
}

console.log(`Lorem Ipsum contains ${etCounter} 'et' words.`);

// Bonus 2: Check if a given phrase is a Palindrome.
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanPhrase = ""
let reversePhrase= "";

for (var i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i].toUpperCase() != phraseToCheck[i].toLowerCase()) 
        cleanPhrase += phraseToCheck[i];
}

for (var i = phraseToCheck.length - 1; i >= 0; i--) {
    if (phraseToCheck[i].toUpperCase() != phraseToCheck[i].toLowerCase()) 
        reversePhrase += phraseToCheck[i];
}

if (cleanPhrase.toUpperCase() === reversePhrase.toUpperCase())
    console.log(`The phrase "${phraseToCheck}" is palindrome!`);
else
console.log(`Ups, the phrase "${phraseToCheck}" is NOT a palindrome...`);