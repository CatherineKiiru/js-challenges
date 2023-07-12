// const myName = "I love to eat.";
// const theString = "My name is catherine kiiru, " + myName + " I buy my food from TRM."

// console.log (theString);

// // My name is catherine kiiru, I love to eat. I buy my food from TRM.

// let ourMath = "The square root of 5 is " + 25 + ". But ";
// let ourStr = 6 + " is the square root of 6.";
// ourMath += ourStr
// console.log(ourMath);

// // The square root of 5 is 25. But 6 is the square root of 6.

// String interpolation
// const car1 = {};
// car1['firstmodel'] = 'Toyota';
// car1['secondmodel'] = 'Suzuki';
// console.log(car1.secondmodel);

// const person1 = {
//     firstname: 'Cate',
//     secondname: 'Kiiru'
// };
// console.log(person1['secondname'])
// // Kiiru


// Filling in Word blanks with the correct words 
// const myNoun = 'dog';
// const myAdjective = 'big';
// const myVerb = 'ran';
// const myAdverb = 'quickly';

// const wordBlanks = 'The ' + myNoun  + ' is ' +  myAdjective  + ' but ' + 'it ' + myVerb + ' ' + myAdverb;
// console.log(wordBlanks);

// Storing multiple values in one variable using arrays
// Array variables allows you to store multiple pieces of data or values in one place

// const Kenya = ['Nairobi', 'Kisumu', 'Mombasa', 'Nakuru', 'Eldoret']; //We've stores multiple values in one variable
// const lastString = Kenya[Kenya.length - 1] //We've used bracket notation to find the last character in the array above
// console.log (lastString); //Eldoret

//Finding the nth Character in a string
// const Kenya = 'East Africa'
// const middleCharacter = Kenya[6];
// console.log(middleCharacter);


//Objects help us simplify our code, and reduce the lines of code.
// Instead of writing,

// let name = 'Catherine';
// let age = 50;

// // You can declare one object and define properties to hold the variable values

// let person = {
//     name: 'Catherine',
//     age: 30,
// };
// person['name'] = 'Mary';
// console.log(person.name);


// //  Typical JavaScript function

// function myFunction (a , b){
//     return a + b;
// }

// console.log(5 + 6);

// // Typical React componet looks like a JavaScript function 

// function Welcome (props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// Typical JavaScript class

// class className {
//     constructor () {
//         //code to be executed
//     }
// }

// class Welcome extends React.Component {
//     render () {
//         //code to be executed
//         return <h1>Hello, {this.props.name}</h1>
//     }
// }

//Convert Farehneit to Celsius

// function toCelcius(fahrenheit) {
//     return (5/9) * (fahrenheit-32)
// }
// toCelcius()

// //Arrow functions allow us to write shorter functions. For example:

// hello = function () {
//      return "Hello World";
//      }

// // With arrow functions, the code above will look like:

// hello = () => {
//     return "Hello World";
// }

// //we can distill the arrow function further to:

// hello = () => "Hello World"; //works when you only have one statement. You can remove the brackets and return keyword


// myFunction = (a, b) => {
//     return "a + b";
// }

// const myFunction = () => {
//     return "a + b";
// }

// A React component would look like this with arrow functions. (based on line 89).
// const Welcome = (props) => {
//     <h1>Hello, {props.name}</h1>;
// }

//Object Oriented Programming
// let billInformation = {
//     billAmount: 2000,
//     tipPercentage: 0.5,
//     numberofPeople: 2,

//     calculateTipAmount: function(){
//         return (this.billAmount * this.tipPercentage) /
//         this.numberofPeople
//     }
// };
// console.log(billInformation.calculateTipAmount())

//Polymorphism

// class Animal {
//     speak(){
//         console.log('Animals have different sounds');
//     }
// }

// class Cat extends Animal {
//     speak(){
//         console.log('Cat says Meow Meow');
//     }
// }

// const mittens = new Cat ()
// mittens.speak()

// console.log(mittens)

// class Dog extends Animal {
//     speak(){
//         console.log('Dog Says Woof')
//     }
// }

// const bruno = new Dog ()
// console.log(bruno)

// // Creating objects with Constructors
// function Laptop (brand, color, year){
//     this.brand = brand;
//     this.color = color;
//     this.year = year;
// }

// const hp = new Laptop('HP', 'silver', 2005);
// console.log(hp.year)


// Creating classes in ES6 Syntax

// class Person {
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     sayHello(){
//         return `Hello ${this.firstName} ${this.lastName};`
//     }
// }

// const janeDoe = new Person(`Jane`, 'Doe');

// console.log(janeDoe);

// Creating classes in ES5 syntax

function Person( firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (){

    }
}
const janeDoe = new Person('Jane', 'Doe');

console.log(janeDoe);



