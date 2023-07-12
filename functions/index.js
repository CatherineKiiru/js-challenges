/* Synchronous JavaScript
function concatenate(first, last) {
    var full;
    full = first + last;
    return full;
}
function secondFunction(){
    var result;
    result = concatenate('Catherine', 'Kiiru')
    document.write(result);

};

/*

//Callbacks

let items = {
    Vegetables : ["onions", "tomatoes", "potatoes", "garlic"],
    Spices : ["cumin", "pepper", "tumeric"],
    Supermarket : ["oil", "salt", 'sugar'],
  };
  
  let recipe = (get_ingredients) => {
    get_ingredients ();
  };
  
  let preparation = () => {
    // recipe(preparation); */

//Async/ Await

/* 
    let items = {
      Vegetables : ["onions", "tomatoes", "potatoes", "garlic"],
      Spices : ["cumin", "pepper", "tumeric"],
      Supermarket : ["oil", "salt", 'sugar'],
    };
    
    */

/*
    async function items (){
      try {
        await abc;
      } catch (error) {
        console.log("abc does not exist", error)
      } finally {
        console.log ("runs code anyway")
      };
    };
    
    items();

    /* "abc does not exist" // [object Error] 
{}
"runs code anyway" */

// //Higher order functions
// function createPower(power) {
//   return function (number){
//     return power * number
//   };
// }
// // let total = createPower(3);
// console.log(createPower(5)(5));

//Callbacks
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = {name: "Albert"};
//     callback(data);
//   }, 1000);
// }
// fetchData(function (data) {
//   console.log(data);
// })

//Functions in JavaScript have first class privileges

// function fetchData (functTwo){
//   let name = "Catherine";
//   functTwo(name);
// }

// function newFunc (x){
//   console.log(x);
// }
// fetchData(newFunc);

// forEach method

// const newArr = [1, 2, 3, 4, 5];
// function newArr (number) {
//   return newArr.forEach((number) => number * 2);
// }

// console.log(newArr);

/* Reusable functions. You can invoke the function below by using the function 
name, followed by parenthesis */

// function myFunc () {
//   console.log("Hello World");
// }
// myFunc () //This will print out Hello World

/* NOTE: Parenthesis () are used to control the visibility of member functions. Functions 
wrapped with parenthesis are called "Immediately invoked function expressions"
or "self executing functions". We only pass a value in parenthesis if we want to 
call that value*/

//14th Feb
// Parameters
/* Parameters are variables that act as placeholders for value that will be 
added to a function when it is called. The actual value that's added to the function
when it is called is often referred to as an argument.  An argument passes value into a function.
NOTE: operators should be passed within the return statement before passing them into the call function. 
If the function's value is ommitted it retunrs "undefined", */

// function functionWithArgs (Arg1, Arg2) {
//   console.log (Arg1 + Arg2);
// }
// functionWithArgs (3, 5) // 8.

//Return statement
/** This is a statement that stops the execution of a function and returns a value.
 * It is used to return a particular value from the function to the function caller.
 You can send value out of a function with a return statement

 In the example below, we stopped the execution of the plusTwo function with a 
 return statement,num + 5, so that we can pass out the value from the plusTwo function.
 into the answer valriable. 

function plusTwo (num) {
  return num + 5;
}
const answer = plusTwo(5);
console.log(answer);
*/

// Global Scope
/* Scope is the visibility of variables. Variables defined outside of a function 
have global scope, meaning, they can be seen and accessed everywhere in your code.
If you don't declare your variables with let or const keywords, you automatically 
give that variable a global scope. E.g if you initialize a valiable without 
a keyword

myFunc = 10; This is a variable without a let or const keyword
*/

// Local Scope
/* These are variables declared within a function body. Parameters are also within 
the local scope. They are only visible and accessible within that function. e.g.*/

// function localScope () {
//   const myScope = "local";
//   console.log(myScope);

// }
// localScope(); //result is local

// Global and Local Scope in functions
/* You can have both scopes with the same variable name, but the local scope will be 
prioritized */

// const myVar = 30;

// function myFunct() {
//   const myVar = 40;
//   return myVar;
// }
// myFunct(myVar);

//What is an undefined value?
/* functions can include return statements, but don't have to have them. In the case
that the function does not have a return statement when called, the function returns
an undefined value */

// let sum = 0;
// function addSum (num) {
//   return sum = 50 + num;
// }
// let newSum = addSum(3)
// console.log(newSum);

// function FavePopSinger(birthYear) {
//   if (birthYear > 1950 && birthYear < 1990) {
//     let favoritePoSinger = "Madonna";
//     console.log(`Your favorite pop singer is ${favoritePopSinger}!`);
//   } else if (birthYear > 1990 && birthYear <= 2010) {
//     let favoritePopSinger = "Taylor Swift";
//     console.log(`Your favorite pop singer is ${favoritePopSinger}!`);
//   } else if (birthYear > 2010) {
//     let favoritePopSinger = "Ariana Grande";
//     console.log(`Your favorite pop singer is ${favoritePopSinger}!
//     Also you are way too young to be on this course!
//     Come back in a few years :)`);
//   } else {
//     let favoritePopSinger = Null;
//     console.log("Pop became a genre in 1950, you might like classical!");
//   }
// }

// let candyBars = ["Snickers", "Twix", "Kit Kat", "Milky Way", "Mars Bar"];
// candyBars[0] = "Crunch";
// console.log(candyBars);

// var currentJukeboxSong = "September by Earth, WInd and Fire";
// changeSong();

// function changeSong (){
//   var newSongToPlay = "Dancing Queen by ABBA";
//   console.log("Current song is " + currentJukeboxSong + "\n");
//   console.log("Next song to play is " + newSongToPlay + "\n");
// }

// console.log("Switching to play " + newSongToPlay + "now!");

// var spotifyPlaylist = {
//   SongOne: {
//     Name: "Rasputin",
//     Artist: "Boney M."
//   },
//   SongTwo: {
//     Name: "Wannabe",
//     Artist: "SpiceGirls"
//   }
// }

// SongTwo("SpiceGirls")

// console.log({SongTwo: Artist});

// var myNumber = 0;
// for (var i = 0; i < 9; i++){
//   myNumber = myNumber + 1;
// }

// console.log(myNumber);

// function CoffeeCount(coffee) {
//   if (coffee < 3){
//     console.log("Not enough Coffee");
//   } else if (coffee > 2 && coffee < 6) {
//     console.log("Too much coffee!");
//   } else if (coffee > 5) {
//     console.log("You're going to die");
//   }
// }
// CoffeeCount(5);

// function LetterCount(letter, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   console.log(count);}

// const readingList = [
//   "East of Eden",
//   "Don",
//   "The Count of Monte Cristo"
// ]

// readingList.shift()
// console.log(readingList);

// const currentBook = "War and Peace";
// let myNextBook = "The Three Musketeers";

// console.log("Finished " + currentBook + ". I'll now start reading" + myNextBook);

// currentBook = myNextBook;
// myNextBook = "All Quiet on The Western Front";

// console.log("Now currently reading " + currentBook + ". After I'm finished with this one, I'll be reading " + myNextBook);

// let reginaGeorge = {
//   name: "Regina George",
//   age: 16,
//   group: "The plastics",
//   mood: [
//     "thinks that's the ugliets skirt she's ever seen",
//     "Thinks you look cute in that skirt",
//   ][Math.floor(Math.random() * 2)],
//   BirthYear: 1991,
//   BirthPlace: "Chicago, Illinois",
//   friends: ["Karen, Gretchen, Cady"],
//   popularity: function () {
//     if (
//       this.group === "The Plastics" &&
//       this.mood === "thinks you look cute in that skirt"
//     ) {
//       console.log("Regina George is the most popular girl in school");
//     } else {
//       console.log("Everyone feels personally victimised by Regina George");
//     }
//   },
// };

// reginaGeorge.popularity();

// var readingList = [
//   "The grapes of Wrath",
//   "Dune",
//   "Anna Karenina",
// ]

// readingList.push("The Myth of Sisyphus")
// readingList.push("The Stranger")
// readingList.pop()
// readingList.shift()

// console.log(readingList);

// var readingList = [
//   "What we owe to each other",
//   "The Republic",
//   "Giovanni's Room",
// ]

// console.log(readingList.toString(", "));

// function calculator (one, two){
//   return one ** two
// }

// var newNumber = calculator (4,2);
// console.log(newNumber);
// //result = 16

// function textOutputter(bookOne, bookTwo) {
//   var newText = `Finished reading ${bookTwo}. Now I'll read ${bookOne}`
//   return newText
// }

// readingList = [
//   "Wome, race",
//   "One Hundred Years of Solitude",
//   "Things Fall Apart",
//   "The Bell Jar",
// ];

// // myText = textOutputter(readlingList[0], readingList[1]);
// // console.log(myText);

// // secondNewText = "Next I'll read " + readingList[2] + ". After that, I'll start reading " + readingList[3];

// console.log(readingList.length);
// console.log(readingList.reverse());
// console.log(readingList.sort());


// filmOne = "Swarm\'s"
// filmTwo = "Swarm\'s"

// if (filmOne == filmTwo) {
//   console.log("I love Swarm's");
// }

// if (filmOne = filmTwo){
//   console.log("I love Swarm's");
// }
// console.log("Program is finished executing");

foodPrice = 8.20;
isPlaceVegeterian = "no";

isWithinBudget = (foodPrice <= 10.50);
isVegeterian = (isPlaceVegeterian =="yes")

if (isWithinBudget && isVegeterian) {
  console.log("This place is perfect!");
} 
else if (!isWithinBudget && isVegeterian) {
  console.log("Maybe next time I'm richer");
}
else if (isWithinBudget && !isVegeterian) {
  console.log("cheap but no vegeterian option");
}
else {
  console.log("I'll find somewhere else");
}

// Map and IndexOf
/* This helps in looping through an array, and 
the IndexOf returns the index of the particular array item*/