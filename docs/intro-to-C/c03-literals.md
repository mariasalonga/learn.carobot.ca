---
title: Literals
sidebar_position: 3
---

# How to Use Programming Literals in C

Literals are data used for representing fixed values or constant variables that **cannot** be changed or modified. They can be used directly in the code. For example:

```c
const int = 10
```

*The 10 represents the value 10, not a variable named 10.*

## Integers
An integer is known as a numeric literal without a fraction or an exponent. In C programming there are three different types of integer literals:

* Decimal
    * Eg: 0, -10, 22
* Octal (base 8 system)
    * Eg: 021, 077, 033
* Hexadecimal (base 16) 
    * Eg: 0x7f, 0x2a, 0x521

**Example: change 78 to octal**

```c
Divide 78 by 8 until 0

78 ÷ 8 = 9 R 6

9 ÷ 8 = 1 R 1

1 ÷ 8 = 0 R 1

The output will be 116
```
*(Reminder: the remainder from the first division should be in the ones digit)*

**What the code should look like**

```c
void setup(){
    Serial.begin(9600);
    Serial.println(78, OCT);
}
void loop(){

}
```

**Serial Monitor**
```c
116
```

# YOU TRY!
In serial.print() enter a number then a comma and OCT. See what the output is in the serial monitor.

*Eg: serial.print(78, OCT); should print out 116*

## Floating-Point Literals
A floating-point literal isa **numeric literal that contains a decimal point**. It is usually stored in either a decimal form or an exponent form.

**Example:**

|Valid Entries|Invalid Entires|
|---|---|
|-22.5|123E|
|0.00034235|3554|

## Character Literals
* Character literals are used to store **a single character within a single quote (‘x’)**. To store multiple characters, you will use a character array instead.

|Valid Entries|Invalid Entries|
|---|---|
|'a'|'Programming'|
|'F'|'Flower'|
|'3'|'integer'|
|','|'sign'|

## String Literals
String literals are similar to character literals, the difference is that string literals are capable of storing multiple **characters enclosed in double quotation marks (“book”)**.

|Valid Entries|Invalid Entries|
|---|---|
|"myAge"|'True'|
|"remainingNumber"|'false'|
|"percentYield"|'Keys'|

## What are Literals used for?
Using a literal, you can use the variable name rather than rewriting the value again and again.

**Example:**

Instead of using 11

```c
void setup(){
    pinMode(11, OUTPUT);
}
void loop(){
    digitalWrite(11, HIGH);
    delay(1000);
    digitalWrite(11, LOW);
    delay(1000);
}
```

Use a declared integer (Eg. int LED = 11)

```c
int LED = 11; //<---Declare an integer
void setup(){
    pinMode(LED), OUTPUT);
}
void loop(){
    digitalWrite(LED), HIGH);
    delay(1000);
    digitalWrite(LED, LOW);
    delay(1000);
}
```

## Escape Sequences

Some characters/shortcuts that we used cannot be typed in C programming. For example, *enter* (for a new line), and *tab* (for indent). Escape sequences are used to replace of these actions.

|Escape Sequences|Characters|
|---|---|
|\f|Form Feed|
|\n|Newline|
|\r|Return|
|\t|Horizontal Tab|
|\v|Vertical Tab|
|\\|Backslash|
|\’|Single Quotation mark|
|\”|Double Quotation mark|
|\?|Question mark|
|\0|Null Character|