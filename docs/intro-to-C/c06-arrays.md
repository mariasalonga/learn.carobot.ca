---
title: Arrays
sidebar_position: 6
---

# How to Use Arrays in C

## Learning Goals
By the end of this tutorial, you should be able to:
* Describe the purpose of an array
* Declare and initialize and array
* Insert values into an array
* Recognize the opportunities to use an array

## What is a Data Structure?
A data structure is a tool which can be used to hold multiple pieces of similar data. There are many different forms of data structures, each having their own advantages and disadvantages.

## What is an Array?

An **array** is a powerful, flexible and simple form of data structure.

Advantages:
* Can be used for any data types, this may include `int`, `char` and `bool`
* It is extremely simple to setup

Disadvantages:
* It can require more code to accomplish tasks compared to other data structures

Here is the format of an array:

```t
datatype arrayName [arraySize];
```

`datatype` is the type of the array, `arrayName` is the designated name of the array, the `[ ]` brackets indentify the data structure as an array and `arraySize` is how many of the array you want to declare.

Lets imagine that we want to declare 5 different integers:

```c
int numOne = 5;
int numTwo = 3;
int numThree = 9;
int numFour = 1;
int numFive = 8;
```

Instead of this repetitive way of declaring new integers, we can try using an array:

```c
int num[5] = {5, 3, 9, 1, 8};
```

This statement creates an array storage named `num` that consists of 5 `int` elements.


_(Note: `int num[5]` **does not** include `num[5]`, it only includes `num[0]` to `num[4]`)_

| int value | 5 | 3 | 9 | 1 | 8 |
|-----------|---|---|---|---|---|
| **index** |**0**|**1**|**2**|**3**|**4**|

If the initialization of the array already contains all the variables that are required, you can simply type:

```c
int num[] = {5, 3, 9, 1, 8};
```

This will have the exact same effect as the previous example that includes an arraySize.

If we specify fewer initial values than the size of the array, the program will automatically assign the rest of the values as `0`. Here is an example:

```c
int num[5] = {5, 3, 9};

void setup(){
    Serial.println(num[0]);
    Serial.println(num[1]);
    Serial.println(num[2]);
    Serial.println(num[3]);
    Serial.println(num[4]);
}
```

**Serial Monitor**
```c
5
3
9
0
0
```

_(Note: if you specify a arraySize smaller than the amount of initial values, there will be a syntax error)_

### Parallel Arrays

A easy way to store tabular information is through the use of parallel arrays. One array can hold the key while the other holds the value.

Lets say we want to list the different products (SKU) and the amount we have:

```c
int n = 4; //4 for the number of arraySize
int sku[] = {2000, 2001, 2002, 2003};
int amount[] = {17, 15, 19, 20};

void setup(){
    for(int i = 0; i < n; i++){
        Serial.print(sku[i]);
        Serial.print(" has ");
        Serial.print(amount[i]);
        Serial.println(" in stock.");
    }
}

void loop(){

}
```

**Serial Monitor**
```t
2000 has 17 in stock.
2001 has 15 in stock.
2002 has 19 in stock.
2003 has 20 in stock.
```

The `sku[]` holds the key data while `amount[]` holds the value data, being the SKU and amount in stock respectively.

## Character Strings

There are many ways to identify a string in C, one of the most common ways is through the use of an array of characters or `char`. There is a special property with the **string**, which is the **terminator element** that follows the final character of the string array. We call this element the **null terminator**. It is identified by the escape sequence `\0`.
The **value** of the index identifying the null terminator is the amount of characters in the string array. here is an example:

|0|1|2|3|4|5|6|7|8|9|_10_|
|---|---|---|---|---|---|---|---|---|---|---|
|c|h|a|r|a|c|t|e|r|s|**_\0_**|

As you can see, the amount of memory locations of the string array is 1 more than the amount of characters in the string. You can even add spaces!

|0|1|2|3|4|5|6|7|8|9|10|_11_|
|---|---|---|---|---|---|---|---|---|---|---|---|
|H|i| |I| |a|m| |J|o|e|**_\0_**|

### Syntax
Since the null terminator `\0` requires a memory slot, all string arrays will have one additional storage spot to provide space for the terminator. Here is an example:

```c
//characters has 10 letters, but since \0 requires one more spot
//the arraySize will increase by one into 11
char name[11] = "characters";
```

The most efficient way of printing a string array is through the use of the **For Loop**, by utilizing the int `i` within the construct. Here is an example:

```c
int nameNum = 10;
char name[11] = "characters";

void setup(){
    for(int i = 0; i < nameNum; i++){
        Serial.print(name[i]);
    }
}

void loop(){

}
```

**Serial Monitor**
```t
characters
```

## Your Turn!
Try messing around with the different code, for example:
* Create different arrays and use the **For Loop** to print out different codes/passwords
* Create your own string array and find out different ways to print out the word