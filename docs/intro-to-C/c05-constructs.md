---
title: Programming Constructs
sidebar_position: 5
---

# How to Use Programming Constructs in C

A **construct** is a line of code that performs a specific task under a specific condition, this may include **if**, **if/else**, **elseif** statements, **while**, **for** loops and many more.

## Conditional Statements

### If Statement
Here is an example of the **If Statement:**

```c
int condition = 1;

if(condition == 1){
    Serial.println(condition);
}
```

**Serial Monitor**
```c
1
```

The code inbetween the parenthesis of `if()` is known as the condition, hence the name **Conditional Statement**. In order for the code within the statement to be executed, the condition has to be `true`, the condition can range from comparing **_integers_**, **_booleans_** and even **_characters_**!

#### Examples

Here are some examples that **will** print out `yes`
```c
int exampleOne = 1;
bool exampleTwo = true;
char exampleThree = 'a';

if(exampleOne == 1){
    Serial.println("yes");
}
if(exampleTwo == true){
    Serial.println("yes");
}
if(exampleThree == 'a'){
    Serial.println("yes");
}
```

Here are some examples that **_will not_** print out `yes`
```c
int exampleOne = 1;
bool exampleTwo = true;
char exampleThree = 'a';

if(exampleOne == 3){
    Serial.println("yes");
}
if(exampleTwo == false){
    Serial.println("yes");
}
if(exampleThree == 'y'){
    Serial.println("yes");
}
```

### If/Else Statement

The **If/Else Statement** can be dissected into 2 parts, the **If Statement** and the **Else Statement**. Here is an example of the **If/Else Statement**:

```c
int condition = 1;

if(condition == 2){
    Serial.println("nothing");
}else{
    Serial.println(condition);
}
```

**Serial Monitor**
```c
1
```

In the code above, the program will not execute the command within the **If Statement** as `(condition == 1)` is false, however, with the **Else Statement**, the program will instead execute the code within the **Else Statement**, printing out `1`.

### Else If Statement

The **Else If Statement** is an **Else Statement** but with another **If Statement**. Essentially, the **Else If Statement** adds another condition to the **Else Statement**. If the condition is false, the program will move on to the next **Else Statement**.

```c
int condition = 1;
int elsif = 2;
int ans = 3;

if(condition == 2){
    Serial.println(condition);
}else if(elsif == 3){
    Serial.println(elsif);
}else{
    Serial.println(ans);
}
```

**Serial Monitor**
```c
3
```

Since the If Statement's `(condition == 2)` and Else If Statement's `(elsif == 3)` are false, the program will print out `3`.

### Case-by-Case
The case-by-case construct starts off by comparing a condition, if the condition matches the constant value or expression, the program will execute the task within the code. Here is an example:

```c
char choice = 'n';

switch(choice)
{
case 'Y':
case 'y':
       Serial.println("yes");
       break;
case 'N':
case 'n':
       Serial.println("no");
       break;
default:
       Serial.println("neutral");
}
```

**Serial Monitor**
```c
no
```

The code above compares the choice of `'Y'`, `'y'`, `'N'` and `'n'`. If `choice` does not follow any of the characters mentioned, the code will execute the code within default.

If the condition type (choice) matches the constant type (char), in this case being character, the code within the case-by-case construct will be executed.

Think of `case` as an **If Statement**. If the variable given matches with the condition written after `case`, the code within will be executed, if not, the program will skip over the code and go on to the next `case`. If none of the `case` conditions match the given variable, the program will execute the code within `default:`.

The `break;` that exists at the end of ever block of code is a command that causes the program to skip the case-by-case construct entirely.

## Loops

### While Loops

A **While Loop** is used to repeat a specific block of code until the condition is no longer true. Here is an example:

```c
int condition = 0;

while(condition <= 5){
    Serial.println(condition);
    condition++;
}
```

**Serial Monitor**
```c
0
1
2
3
4
5
```

The **While Loop** shown above has the condition of `(condition <= 5)` and with every loop, `condition++;`, when `condition = 6`, the condition of `(condition <= 5)` will no longer be true, therefore ending the loop. _(Note: This is not the only use of the while loop)_

### Do While Loop

The **Do While Loop** executes the code _**at least once**_ and will continue executing the code as long as the condition is true. here is an example:

```c
int seq = 3;
int condition = 2;

do{
    Serial.println(seq);
}while(condition == 1);
```

**Serial Monitor**

```c
3
```

In this example, since `condition == 1` is false, only the code within `do{}` will be executed. If `condition == 1` is true, the code will look like:

**Code**
```c
int seq = 3;
int condition = 2;

do{
    Serial.println(seq);
}while(condition == 2);
```

**Serial Monitor**

```c
3
3
3
3
3
3
3
...
```

### For Loop

The **For Loop** is used to repeat a block of code for a certain amount of time, keep in mind, this is different from the Arduino's `loop()` function. Here is an example:

```c
for(int i = 0; i<5; i++){
    Serial.println(i);
}
```

**Serial Monitor**
```c
0
1
2
3
4
```

Let's break down the **For Loop** into 3 parts, each part will be seperated by a `;`.

#### Declaring the Variable
The first part of the **For Loop** is the declaration of a variable, commonly declared as `i`. To declare the variable `i`, the loop must include `int i = 0;`. _(Note: The value of `i` can be whatever you want)_

#### Condition
The second part of the **For Loop** is how many times you want the code within the loop to be repeated.

|i=0|i{'<'}5|i++|
|---|---|---|
|0|✓|**0**+1 ✓|
|1|✓|**1**+1 ✓|
|2|✓|**2**+1 ✓|
|3|✓|**3**+1 ✓|
|4|✓|**4**+1 ✓|
|5|✕|**5**+1 ✕|

As seen in the chart above, the loop would continue on until `i=5`, in which case, causes `i<5` to be false, therefore ending the loop.

#### Increments
The third part of the **For Loop** is what will happen to the variable `i` after a singular loop has finished. As shown in the previous lesson, `i++;` means `i=i+1`. For every time the code within the loop gets executed, the integer `i` will have its value be increased by 1. _(Note: The increment of `i` does not have to be `i++`, it could be anything you can do with an integer)_

### Conditional Expression
The **Conditional Expression** is extremely similar to how the **If Else Statement** works. Here is an example:

```c
char s = 2 > 1 ? 't' : 'f';
Serial.println(s);
```

**Serial Monitor**
```c
t
```

**Conditional Expression:**
```t
condition ? operand : operand
```
The first operand of the expression is what the code will do if the condition is true, the second operand is what the code will do if the condition is false.