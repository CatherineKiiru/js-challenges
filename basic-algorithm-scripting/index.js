/* FreeCodeCamp Challenges

/*Task 1 - extract nth character from a string

 write a function that takes a string as an argument
 Extract the last 3 characters from the string
 Return the result
 test case - string ('abcdefgh')
 I used the slice () method which extracts a section of a string
and returns the extracted section as a string without modifying the original 
string. You call the string with two parameters; startIndex and endIndex
the StartIndex defines the first character you'll extract and endIndex defines 
the last character you don't want to extact*/

/*
let string = 'abcdefgh';
console.log(string.slice(1, 5)); */

//the function above returns bcde

/****************************************************************/

/*Task 2 - Factororialize a Number
The task is to return the factorial of the provided integer
The integer is n. A factorial is the product of all positive
integers that are less than or equal to n. Factorials are represented with 
the notation n!
Solution - use the for loop to run execute the product of all positive
integers that are less than or equal to 5. 



function factorialize(num) {
    let product = 1;
    for (let i=1; i <= num; i++){
        product *= i;
    }
    return product;
}
factorialize (5);

The function above returns 120 
*/

/****************************************************************/

/* Task 3 - Find the longest Word in a String 
The task is to return the longest word in a string as a number
Solution - 

*/

/****************************************************************/

/*Task 4 - Return largest number in Arrays
The task is to loop throught the 4 sub-arrays and return the larges numer
Solution 1
Create a variable to store the results as an array


function confirmEnding (str, target){
    return str.substr(-1,0) === target;
}
console.log(confirmEnding)("Bastian", ) */

/* Find the longest word in a string 
The task is to return the length of the longest word in the sentence

*/

function findLongestWordLength (str){
    return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");