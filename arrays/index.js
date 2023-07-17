//MULTI-DIMENSIONAL ARRAYS

//This nests one array within another array
// const kenyaCountyNumbers = [['Nairobi', 003,] ['Mombasa', 001], ['Kisumu',20]];
// const lastCounty = kenyaCountyNumbers[kenyaCountyNumbers.length [1]];
// console.log(lastCounty);

//ACCESSING ARRAY DATA WITH INDEXES

//You use bracket notation as you do with strings. The main difference is that you specify an entry in the array
// instead of a character like in a string. Arrays aslo use zero-based indexing.

// const myArray = [60, 80, 150];
// const myData = myArray[3];
// console.log(myData);

//MODIFY DATA WITH INDEXES
// Array entries are mutable (can be changed) and can be modified freely even if you declared the array with a const keyword

// const myArray = [50, 40, 100, 'Mary'];
// myArray[2] = 60;
// console.log(myArray);
// We have changed the value of index 2 from 100 to 60

//MULTI-DIMENSIONAL ARRAYS WITH INDEXES
// These are arrays of an array. Below is an example of a multidimensional array

// const array = [
//     [1, 5, 9],
//     [40, 3, 200],
//     [70, 'Mary', null],
//     [[50, 100, 150], 500, 78],
// ]
// //find the value of nestedArray
// const nestedArray = array[3][2];

// console.log(nestedArray);
// // The value is 78

//MANIPULATING ARRAYS WITH METHODS

//PUSH METHOD
//The push method adds data to a pre-existing array

// const myArray = ["dog", "cat", 9, null, undefined]
// myArray.push(33);
// console.log(myArray);
//[ 'dog', 'cat', 9, null, undefined, 33 ]

//POP METHOD
/*The pop method removes the last element from an array. 
You can store the popped off value by assigning it to a new variable.
This method removes the last element by default */

// const myArray = ["dog", "cat", 9, null, undefined]
// myArray.pop();
// console.log(myArray);
/* this will return the new array i.e. [ 'dog', 'cat', 9, null ] 
 but does not return the popped off element*/

//  const oneArr = [1, 4, 'cat', true, null];
//  const newArr = oneArr.pop();
//  console.log(newArr);
// This returns the popped off array which is null because it's the last value//

//SHIFT METHOD

/* This method removes the first element in an Array. 
 It's the opposite of the pop method. If you don't assign the shifted element 
 to a new variable, you simply return the new array without the first element*/

//  const myArr = [1, 56, 'dog', ['hello world'], true, [67]];
//  myArr.shift();
//  console.log(myArr);
/*This returns the new array without the first element i.e 
 [ 56, 'dog', [ 'hello world' ], true, [ 67 ] ] */

//  const myArr = [1, 56, 'dog', ['hello world'], true, [67]];
//  const firstElement =  myArr.shift();
//  console.log(firstElement);
//  //* This returns the shifed off element i.e. 1 //

//UNSHIFT METHOD

//This method adds elements infront of an array. This works like the push method
//  const myArr = [1, 56, 'dog', ['hello world'], true, [67]];
//  const firstElement =  myArr.unshift();
//  console.log(firstElement);
/* If you don't pass in the new value you want to add to the array, 
you'll adds the index of that comes after the last element i.e. 6 */

// const myArr = [1, 56, 'dog', ['hello world'], true, [67]];
// myArr.unshift(['dog', 30]);
// console.log(myArr);
/* Now this returns the new array with the additional elements we shifted into i.e
[ [ 'dog', 30 ], 1, 56, 'dog', [ 'hello world' ], true, [ 67 ] ] */

//Shopping list Array. This creates a multidimentional array with many sub-arrays

// const myList = [
//   ["Chocolate Bar", 15],
//   ["Milk", 20],
//   ["Bread", 50],
//   ["Potatoes", 100],
//   ["Lotion", 70],
// ];

// console.log(myList);

//SPLICE METHOD

// moviesAndTvShowsToWatch = [
//   "Howl's Moving Castle",
//   "Community",
//   "Princess Mononoke",
//   "The Good Place",
// ]

// moviesAndTvShowsToWatch.splice(2, 0, "The Umbrella Academy")
// console.log(moviesAndTvShowsToWatch);

//QUEUE SOLUTION

// write a function which takes in two arguments an array(arr) and a number(item)
// Add the number to the end of the array, then remove the first element of the array
// The nextInLine function should return the element we removed

// function nextInLine(arr, item) {
//     arr.push(item); //adds the number to the end of the array
//     const removeItem = arr.shift(); //removes the first element of the array
//     return removeItem;
//   }
  
//   let testArr = [1, 2, 3, 4, 5];
  
//   console.log("Before: " + JSON.stringify(testArr));
//   console.log(nextInLine(testArr, 6));
//   console.log("After: " + JSON.stringify(testArr));

// BOOLEAN VALUE SOLUTION
// function welcomeToBooleans() {
//     return true; //returns true
// }

// IF STATEMENTS AND BOOLEAN CONDITIONS
// function trueOrFalse(wasThatTrue) {
//     if (wasThatTrue) {
//       return "Yes, that was true";
//     }
//     return "No, that was false";  
//   }

// //COMPARISON WITH EQUALITY OPERATOR
// function equalityTest (myValue) {
//     if (myValue == 10) {
//         return 'My Value is Equal'; //if 'myValue' is equal to 10, the equality operator returns true,
//         //so the code in this curly braces will execute
//     }
//     return "My Value is not Equal";
// }

// COMPARISON WITH THE STRICT EQUALITY OPERATOR
// function testStrictOperator (value) {
//     if (value === 7 ){
//         return "Equal";
//     }
//     return "not equal";
// }

// COMPARING DIFFERENT VALUES
// function compareEquality (a, b){
//     if (a == b) {
//         return "This is equal";
//     }
//     return "Not Equal";
// }
// compareEquality (10,"10");

// COMPARISON WITH THE INEQUALITY OPERATOR
// function testNotEqual (value) {
//     if (value != 99) {
//         return "Not Equal";
//     }
//     return "Equal";
// }
// testNotEqual(10);

// COMPARISON WITH THE STRICT INEQUALITY OPERATOR
// function testStrictInequality (value) {
//     if (value !== 17) {
//         return "Not Equal";
//     }
//     return "Equal";
// }
// testStrictInequality(10);

// COMPARISON WITH THE GREATER THAN OPERATOR
// function testGreatherThan (value) {
//     if (value > 100) {
//         return "over 100";
//     }
//     if (value > 10) {
//         return "Over 10";
//     }
//     return "10 or Under";
// }
// testGreatherThan(10);

// COMPARISON WITH THE GREATER THAN OR EQUAL TO OPERATOR
// function testGreaterOrEqual (value) {
//     if (value >= 20) {
//         return "20 or Over";
//     }

//     if (value >= 10) {
//         return "10 or Over";
//     }
//     return "less than 10";
// }

// COMPARISON WITH THE LESS THAN OPERATOR
// function testLessThan (value) {
//     if (value < 25) {
//         return "Under 25";
//     }
//     if (value <55) {
//         return "Under 55";
//     }
//     return "It's 55 or over";
// }
// testLessThan(10);

// COMPARISON WITH THE LESS THAN OR EQUAL TO OPERATOR
// function testLessThanOrEqual (value) {
//     if (value <= 12) {
//         return "Less than or equal to 12";
//     }
//     if (value <= 24) {
//         return "Less than or equal to 24";
//     }
//     return "More Than 24";
// }
// testLessThanOrEqual(10);

// COMPARISON WITH THE LOGICAL AND OPERATOR
/* With nested if statements */

// function LogicalAnd (num) {
//     if (num > 5) {
//         if (num < 10) {
//             return "yes";
//         }
//     } 
//     return "No";
// }
// LogicalAnd(10);

/* With "logical and operator" */ 
// function LogicalAnd (num) {
//     if (num > 5 && num < 10) {
//         return "Yes";
//     }
//     return "No";
// }

// COMPARISON WITH THE LOGICAL OR OPERATOR
// function testLogicalOr (value) {
//     if (value < 10 || value > 20) {
//         return "Value is outside";
//     }
//     return "Value is Inside";
// }

// ELSE STATEMENTS
//With if statements only
// function testElse (value) {
//     let result = "";

//     if (value > 5) {
//         result = "bigger than 5";
//     }
//     if (value <= 5) {
//         result = "5 or Smaller";
//     }
//     return result;
// }
// testElse(4);

// With if/else statement
// function testElse (value) {
//     let result = "";

//     if (value > 5) {
//         result = "bigger than 5";
//     } else {
//         result = "5 or smaller";
//     }
//     return result;
// }
// testElse(4);

// 

