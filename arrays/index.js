// //Multi-dimensional Arrays. This nests one array within another array
// const kenyaCountyNumbers = [['Nairobi', 003,] ['Mombasa', 001], ['Kisumu',20]];
// const lastCounty = kenyaCountyNumbers[kenyaCountyNumbers.length [1]];
// console.log(lastCounty);

//Accessing array data with Indexes
//You use bracket notation as you do with strings. The main difference is that you specify an entry in the array
// instead of a character like in a string. Arrays aslo use zero-based indexing.

// const myArray = [60, 80, 150];
// const myData = myArray[3];
// console.log(myData);

// Modify array data with Indexes
// Array entries are mutable (can be changed) and can be modified freely even if you declared the array with a const keyword

// const myArray = [50, 40, 100, 'Mary'];
// myArray[2] = 60;
// console.log(myArray);
// We have changed the value of index 2 from 100 to 60

// Multi-dimensional arrays with Indexes
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

//Push method
//The push method adds data to a pre-existing array

// const myArray = ["dog", "cat", 9, null, undefined]
// myArray.push(33);
// console.log(myArray);
//[ 'dog', 'cat', 9, null, undefined, 33 ]

//Pop method
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

//Shift method
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

//Unshift method
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

//Splice Method

// moviesAndTvShowsToWatch = [
//   "Howl's Moving Castle",
//   "Community",
//   "Princess Mononoke",
//   "The Good Place",
// ]

// moviesAndTvShowsToWatch.splice(2, 0, "The Umbrella Academy")
// console.log(moviesAndTvShowsToWatch);

//Queue solution
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