---
title: Programming Operators
sidebar_position: 4
---

# How to Use Programming Operators in C

Operators are symbols that carry out a specific function. For example '*' multiplies two numbers.

## Arithemtic Operators
Arithemetic operators carry out mathematical operations like multiplications, division, addition and subtraction.

|Signs|Purpose|
|---|---|
|+|Addition|
|-|Subtraction|
|*|Multiplication|
|/|Division|

**Let’s try using your Arduino board.**
* In your Arduino IDE try dividing 2 integers whose answer is a decimal (Eg: 9/4, 8/7 and 10/56). What do you notice?
* Even though the answer is a floating-point number, it is changed to an integer because the 2 variables used are integers. 
* Try it again using floating points instead.

## Assignment Operators

Assignment operators are used when assigning a value to a variable. The most commonly used assignment operator is the equal sign (=).

|Operator|Example|Meaning|
|---|---|---|
|=|a=b|a=b|
|+=|a+=b|a = a+b|
|-=|a-=b|a = a-b|
|*=|a*=b|a = a*b|
|/=|a/=b|a = a/b|
|%=|a%=b|a = a%b|

```c
The symbol '%' returns the remainder of an equation.

Example:
if a = 11 and b = 5
Then a%=b will return 1 because 11/5 = 2 R 1
```

Using your own Arduino board, **try the following:**

Create different expressions using assignment operators.

```c
void setup(){
    int a = 5;
    int c = a;
    //Instead of using variable names such as a, b and c,
    //try using other names such as counter, num and temp
    int num = 5;
    int temp = num;
}

void loop(){

}
```

## Relational Operators

A relational operator verifies the relationship **between two variables**. If the statement is proven to be true then the output will be 1, if the statement is false then the output will be 0.

| Operator | Meaning | Example | Outcome |
| --- | --- | --- | --- |
| == | Equal to | 22 == 4; | false return = 0 |
| {'>'} | Greater than | 22 {'>'} 4; | true return = 1 |
| {'<'} | Less than | 22 {'<'} 4; | false return = 0 |
| != | Not equal to | 22 != 4; | true return = 1 |
| {'>='} | Greater than or equal to | 22 {'>='} 4; | true return = 1 |
| {'<='} | Less than or equal to | 22 {'<='} 4; | false return = 0 |

## Logical Operators
|Operator|Meaning|Example (c=5, d=3)|
|---|---|---|
|&&|Logical and true only if all operands are true.|((c==5) && (d==3)); false return = 0|
| \|\| |Logical and only true if one operand is true|((c==5) \|\| (d==3)); true return = 1|
|!|Not Logical true only if the operand is 0|!(c==5); false return = 0|

**AND** is a word used to add an additional comment or condition

**OR** is used to describe an alternative choice

|A|B|AND(&&)|OR(\|\|)|
|---|---|---|---|
|0|0|0|0|
|0|1|0|1|
|1|0|0|1|
|1|1|1|1|

## Exercise
1. Start by creating 3 variables with different values. (for more challenges try using three different types, int, float and double).
2. Using *arithmetic operators* create an expression where the output will be **3**. 
3. Then using any *relational operator* create an expression where the output will be **1**. 
4. Use any *logical operator* to return the value of **0**. -->