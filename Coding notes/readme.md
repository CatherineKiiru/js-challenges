### Queue

In Computer Science, a queue is an abstract data structure where items are kept in order.

New Items can be added at the back of the queue and old items are taken off from the front of the queue.
Solution in arrays/index.js

### Boolean Values

Boolean values can only be two values: true or false.

### Conditional logic with If Statements

If statements are used to make decisions in code. "If" is a keyword and it tells JavaScript to execute the code in the curly braces depending on the conditions defined within the parentheses. These conditions are known as boolean conditions and they are only true or false.

This means that if the condition evaluates to true, the program executes the statement inside the curly braces. If the Boolean condition evaluates to false, the statement inside the curly braces will not execute. For example:

```JavaScript
function test (condition) {
    if (condition defined within parentheses is true) {
        //execute the code/return statement within these curly braces
        return "It is true";
    }
    return "It is false";
}
test(true);
test(false);
```

### Comprison with equality operator

All comparison operators return a boolean true or false value.

The most basic operator is the equality operator (==). Note that the equality operator (==) is different from the assignment operator (=)

The equality operator compares two values and returns "true" if the values are equivalent or it returns "false" if they are not equivalent.

Note, JavaScript converts one data type to another in order for JavaScript to compare the two data types. This is a phenomenon called 'TYPE COERCION'. The equality Operator converts both values being compared to a common type. For example:

1 == 1 evaluates to true because the number datatype on the left is equivalent to the number data type on the right

1 == '1' also evaluates to true because JavaScript has converted the string data type on the right to a number which is the same as the number data type to the left.

### Comparison with the Strict Equality Operator

The strict equality operator (===) is the counterpart of the equality operator (==). The strict equality operator does not do type coercion/type conversion.

This means that if the values being compared are not equal or equivalent, the strict equality operator will return a false value.

### Comparison with the Inequality Operator

The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns "false" where equality would return "true". And where the equality operator would return false, the inequality operator returns true.
The inequality operator also performs type conversion while comparing.

### Comparison with the Strict Inequality Operator

The Strict Inequality Operator (!==) is the logical opposite of the strict equality operator. It means "strictly not equal" and returns "false" where strict equality would return "true" and vice versa.

### Comparison with the Greater Than Operator

The greater than Operator (>) compares the value of two numbers. If the number to the left is greater than the number to the right, it returns "true". Otherwise, it returns false.

The greater than operator also performs type conversion before returning a true or false.

### Comparison with the greater than or equal to operator

The greater than or equal to operator (>=) compares the value of two numbers. If the number to the left is greater than or equal to the number to the right, the function returns a true boolean. Otherwise, it returns false.

The greater than or equal to operator also performs type conversion.

### Comparison with the less than operator

The less than (<) operator compares the value of two numbers and returns a boolean depending on the condition.
If the number to the left is less than the number to the right, it returns true. Otherwise it returns false.

### Comparison with less than or equal to operator

The less than or equal to operator (<=) compares the value of two numbers and returns a boolean value. If the number to the left is less than or equal to the number to the right,it returns true. Otherwise the function returns a false boolean.
Just like the equality operator, the less than or equal to operator performs type conversion on data types when evaluating values.

### Curly Brackets or Braces in JavaScript

Curly braces group together code blocks or statements. Their main purpose is to execute code blocks or statements together. Now, you can write code without curly brackets but it has disadvantages. Your function will only execute the first codeblock or statement. Secondly it is not a good coding practice to omit curly braces because you increase your chances of running into unnecessary errors.

### Parameters

Parameters are variables that act as placeholders for the values that are to be injected to a function when it is called. These values that are inputed into a parameter are referred to as arguments.

### Comparison with the "Logical And" (&&) operator

There are times where you will need to test and compare more than one thing at a time. The "logical and" operator (&&) returns true if and only if the operands to the left and right of it are true. The "logical and" works the same way when you nest an "if" statements within another "if" statement. Here's an example:

```JavaScript
function LogicalAnd (num) {
    if (num > 5) {
        if (num < 10) {
            return "yes";
        }
    }
    return "No";
}
LogicalAnd(10);
```

The code block above can now be rewritten with the "logical and" operator:

```JavaScript
function LogicalAnd (num) {
    if (num > 5 && num < 10) {
        return "Yes";
    }
    return "No";
}
```

### Comparison with the "logical or" (||) operator

The "logical or" operator (||) returns "true" if either of the operands is "true". Otherwise the operator returns a false boolean.
The logical or operator is denoted by two pipe symbols (||).

### Else Statements

Normally, when a condition is true, it executes the code that follows the if statement and when the condition is false, nothing happens.
Else statements allow you to excecute an alternative block of code within the same function that contains an if statement. For example:

```JavaScript
function elseStatement (value) {
    if () {
        return "greater than 10";
    } else {
        return "less than 10";
    }
}

```
### Else If Statements
Else if statements allows you to compare multiple conditions and combine multiple if statements into one function. 

### Correct order in If Else Statements
Functions are often executed from top to bottom so you need to be careful with which statements come first. 

July 17th-restarted on 11th September

### Chaining If Else Statements 

If/esle statements can be chained together to execute multiple conditions and complex logic. For example:

```Javascript
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return large;
  } else {
    return Huge;
  }
}
testSize();
```

### Golf Code
Pass par and strokes as arguments to a function.
Return the correct string from a list of strokes in order of priority i.e. from top to bottom. 




