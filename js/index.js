// Iteration 1: Names and Input

let hacker1 = "Catarina";
let hacker2 = "Joana";

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } else if (hacker1.length < hacker2.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }

// Iteration 3: Loops

let spaceHacker1 = "";

for (let i=0; i < hacker1.length; i++) {
  if (i === hacker1.length-1 ) {
    spaceHacker1 += hacker1[i].toUpperCase();
  } else {
    spaceHacker1 += hacker1[i].toUpperCase() + " ";
  }
  }

console.log(spaceHacker1);

let reverseHacker2 = "";

for (let i = hacker2.length-1; i >=0; i--) {
    reverseHacker2 += hacker2[i].toUpperCase();
  }

console.log(reverseHacker2);

if (hacker1 > hacker2) {
console.log("Yo, the navigator goes first definitely.");
} else if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1

let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur dolor eget lorem pulvinar vulputate. Quisque sapien velit, interdum eu velit quis, vulputate rutrum turpis. Aliquam pretium lectus et augue sagittis pretium vel ut risus. Morbi tempus lacus ex, vel vehicula dolor cursus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec at blandit massa. Ut id dui libero.

Duis egestas leo eu ante commodo, quis aliquam nunc ornare. Phasellus eget ornare nisi. Mauris nec nisl massa. In eu tellus mauris. In laoreet augue sapien, quis luctus arcu feugiat id. Suspendisse justo lectus, vestibulum nec rutrum eu, maximus id lorem. Suspendisse potenti. Praesent quis congue nunc. Cras lorem turpis, ullamcorper at erat eu, varius ornare lectus. Aliquam suscipit dui quis nibh blandit imperdiet. Fusce imperdiet egestas mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer nulla sapien, sollicitudin gravida mollis vel, dictum posuere nibh. Quisque sit amet nulla massa.

Donec a augue in metus consectetur placerat iaculis eget tortor. Suspendisse potenti. Aenean venenatis dignissim porta. Mauris iaculis ligula vel bibendum semper. Pellentesque placerat sit amet purus ut porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit lacus, ullamcorper et leo porttitor, auctor varius justo. Suspendisse ac nisl pretium, suscipit sapien quis, mollis dolor. Donec lacinia metus at sodales scelerisque.`;

let words = 0;

for (let i=0; i < paragraphs.length; i++) {
  if ((paragraphs[i] === " " && !(paragraphs[i-1] === ".")) || paragraphs[i] === ".") {
    words++;
  }
}

console.log(words);

let etCount = 0;

for (let i=0; i < paragraphs.length; i++) {
  if (paragraphs[i].toLowerCase() === "e" && paragraphs[i+1].toLowerCase() === "t") {
    if ((paragraphs[i+2].toLowerCase() === "," || paragraphs[i+2].toLowerCase() === "." || paragraphs[i+2].toLowerCase() === " ") && paragraphs[i-1].toLowerCase() === " ") {
    etCount++;
    }
  }
}

console.log(etCount);

//Bonus 2

let phraseToCheck = "No 'x' in Nixon";
let isPalindrome = true;
let phraseArray = [];

for (let i=0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i].toLowerCase() === " " || phraseToCheck[i].toLowerCase() === "." || phraseToCheck[i].toLowerCase() === "," || phraseToCheck[i].toLowerCase() === "?" || phraseToCheck[i].toLowerCase() === "!" || phraseToCheck[i].toLowerCase() === "'") {
    continue;
  } else {
    phraseArray.push(phraseToCheck.toLowerCase()[i]);
  }
  }

console.log(phraseArray);

for (let i=0; i < phraseArray.length; i++) {
  if (phraseArray[i] === phraseArray[phraseArray.length-1-i]) {
    isPalindrome = true;
  } else {
    isPalindrome = false;
    break;
  }
}