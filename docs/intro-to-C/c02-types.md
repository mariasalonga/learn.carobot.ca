---
title: Variable Types 
sidebar_position: 2
---

# How to Use Programming Variable Types in C

**Types help define and determine the size of data**. It is usually placed in front of a variable to declare its type and data size. Some types that are commonly used in C programming are

|Types|Description|
|---|---|
|int|Occupies **4 bytes** and can store an integer like, 0, -5, -20 and 40|
|char|Occupies **1 byte** and can hold a small integer value, a single character or a single symbol|
|float|Occupies **4 bytes** and is able to store a single-precision (usually 7 decimal digits), floating-point number|
|double|Occupies **8 bytes** and stores a double-precision (doubly the bytes for a single-precision number), floating-point number|

**Try using *float* to write a character**

If you try using float instead of char on a word like “school”, it will return as an error. Enter the following entries to see which is and isn’t a valid entry:
- int school = fun;
- char age = ‘a’;
- float year = 201.5;
- float age = 19

```c
int myAge = 16;
float momAge = "school";
void setup(){
    int myAge = 21;
    Serial.begin(9600);
    Serial.println(myAge);
    Serial.println(momAge);
}
```

**NOTE: sometimes the output will be different from the input. This means it is an error.**
*(Eg: float age = ‘a’ will return 97.00. This means that the wrong type is used.)*

# What are Size Specifiers?

Size specifiers are used to adjust the size of an int and double to fit in larger or smaller variables.

## Type int Size Specifiers 

* A short int contains a minimum of 16 bits which is the same size as a regular int
* A long int contains 32 bits
* A long long int contains 64 bits.

![](/img/docs/intro-to-C/guide2_01.png)

## Type Double Size Specifier
* A long double contains typically 64 bits which is the same size as a regular double.

## Type Modifiers
* To alter the data storage of type you can also use type modifiers: **signed** and **unsigned**.
* **Signed** is a 32-bit type modifier that can contain any integer from -2147483648 to 2147483648
* **Unsigned** is also a 32-bit type modifier but can only store a nonnegative integer from 0 to 4294967295.

```c
int myAge = 327698545;
long int yourAge = 327698545;
void setup(){
    Serial.begin(9600);
    Serial.println(myAge);
    Serial.println(yourAge);
}
void loop(){
    
}
```

As shown in the picture above, when a number is bigger than what a type can hold it prints out a different number. When 327698545 was assigned to int it was unable to print the same number. When we added the long in front it was able to print out the number. 

# TRY IT YOURSELF
* Use signed and unsigned to see the limit and difference between the 2 keywords. 
* Use different types and size specifiers to see which one can hold “9,223,372,036,854,775,807”.