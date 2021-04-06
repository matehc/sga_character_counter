let div = document.querySelector(".display");

let word = prompt("Insert a word or sentence");

let totalChar = 0;
let totalVowel = 0;
let totalConsonant = 0;
let newArray = [];
let consonant = []
let vowel = [];


function isBlank(word) {
  if (word.length === 0)
    return true;
  else
    return false;
}

// This removes both trailing spaces and spaces in a sentence
function spaceRemover(wordSentence) {
  var splited = wordSentence.trim().split("");
//   let newArray = [];
  if(isBlank(word)){
    return alert("Input can't be blank. Type something eh");
  }
  else{
    for(let i=0; i < splited.length; i++) {
    if (splited[i] === " ")
      continue;
    else
      newArray.push(splited[i]);
    }
  }
  
}


// This seperates the vowels and consonants.
function vowelConstantFilter(arr) {
  for(let i=0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === "a" || arr[i].toLowerCase() === "e" || arr[i].toLowerCase() === "i" || arr[i].toLowerCase() === "o" || arr[i].toLowerCase() === "u") {
      vowel.push(arr[i]);
    }else
      {
        consonant.push(arr[i]);
      }
  }
  console.log("Vowel and consonants have been pushed");
//    return
}


// This counts the number of characters in an array
function counter(arr) {
  let countedArr = [];
  countedArr = arr.length;
  
  return countedArr;
}



function display () {
  totalChar = counter(newArray);
  totalVowel = counter(vowel);
  totalConsonant = counter(consonant);
  let p = document.createElement('p');
  let text = `The total character is ${totalChar}.\n The total vowel is ${totalVowel}.\n The total consonant is ${totalConsonant}`
  div.appendChild(p).innerText = text;

    
  
  console.log("The total character is "+ totalChar +".\n The total vowel is"+ totalVowel +".\n The total consonant is " + totalConsonant);
}

// Calls
spaceRemover(word);
vowelConstantFilter(newArray);
counter(newArray);
counter(vowel);
counter(consonant);
display();

