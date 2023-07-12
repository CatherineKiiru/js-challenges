# JavaScript Part 2: 

## Escaping characters in Strings 
We use escape sequences to manipulate strings and extend string functionality without throwing errors. This is achieved by turning special characters into strings by using a backslash, followed by the symbol representing the operation you want to execute. 

Below are some of the escape sequences you can use:

\n - This creates a new line in a string. 

```JavaScript
const myString = "Mary went to the shop.\nShe came back with bread and milk"
console.log (myString);
`Mary went to the shop.
She came back with bread and milk`
```

\'\' - adds single quotes to a section of a string. This also works the same way with double quotes.

```JavaScript
const myString = "Mary went to the shop.\'I bought bread and milk\', she said."
console.log (myString);
// Mary went to the shop.'I bought bread and milk', she said.
```

## Adding strings to variables

You can add a variable to a string. This makes it easier to work with variables that have long strings, because you don't have to type out the string. 

## Attach strings to variables with the += operator

```JavaScript
let ourMath = "The square root of 5 is " + 25 + ". But ";
let ourStr = 6 + " is the square root of 6.";
ourMath += ourStr
console.log(ourMath);
// The square root of 5 is 25. But 6 is the square root of 6.
```

## Bracket Notation
These are characters that help you access properties in an object. It's also a way to access characters at a specific index within a string. Note that, JavaScript starts counting at 0, not one. This is a concept called zero-based indexing. Bracket notation is also in the same category as **dot notation**, which are also known as property accessors.

Using bracket notation to access the index in a string
```JavaScript
const firstName = "Catherine";
const firstLetter = firstName[3];
console.log(firstLetter);
```

**Note- String values are immutable which means they cannot be altered once they are created**

## Polymorphism
Polymorphism is one of the core concepts of object oriented programming. This means that the same function can be called multiple times. 

For example, a developer can write code, mentor other developers, or write technical articles. So it's one person that can do different operations. 

With polymorphism, you can resue the same method repeatedly. 
Polymorphism also reduces the number of functionalities that can be paired together. 

## Constructors
Constructors create objects for you. This is a function that creates objects. 

## Creating Classes

