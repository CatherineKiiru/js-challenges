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

Note, JavaScript converts one data type to another in order for JavaScript to compare the two data types. This is a phenomenon called 'TYPE COERCION'. For example:

1 == 1 evaluates to true because the number datatype on the left is equivalent to the number data type on the right

1 == '1' also evaluates to true because JavaScript has converted the string data type on the right to a number which is the same as the number data type to the left. 

