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



