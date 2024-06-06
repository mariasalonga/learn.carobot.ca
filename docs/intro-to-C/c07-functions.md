---
title: Functions
sidebar_position: 7
---

# How to Use Functions in C

## Learning Goals
By the end of this tutorial, you should be able to:

* Understand what a function is 
* Initialize a function 
* Create a reusable and modular function
<!-- * Understand getter and setter / assessors and mutator functions -->
* Send values to a function through a parameter 


## What is a Function?
A function is a piece of code that you can name, which then can be called multiple times throughout your program without having to re-write the code stated in the function. Functions are also used to allow access to other objects of a class to access and set data. In Arduino’s case we can use functions to save time and prevent repetition of code. 


## Application Of A Function/Why A Function Is Useful
Functions are useful overall as they make your code look clean, are more efficient in terms of saving time programming redundant code, and are very powerful!


## Initialize A Function:
Functions have a **return type** such as int, String, boolean, char, Integer, or can have no return type which is just void. A return type indicates that the result of the function will be with the same type as the return type.

Functions are indicated a **return type**, a **name** (your choice in camel case), round brackets for the **parameter** (can store variables or can be empty), surrounded with curly brackets with code in between them.

**Initialize a Function**
```c
void countdownTen(){
    for(int i = 10; i >= 0; i–){
        System.out.println(i);
    }
}
```

**Call a Function**
When calling a function you would just call its name and enter values that need to go into the parameter. In this example the function we created did not take any parameters so we just keep the brackets empty. 
```c
countdownTen();
```
The countdownTen function that we initialized above will be called and will perform the code that is written in the function. In this example the function will ALWAYS countdown from ten as this is the intended purpose of the function created. 


## Functions With Parameter
A function with a parameter is when you can send data through variable into the function. For example, if you want to recieve data of the number of times to turn an LED on and off you want to hold that data somewhere. The parameter is the perfect place to do that.

**Initialize a Function WITH Parameter** 
```c
void flash(int numFlash){
    for(int i = 0; i < numFlash; i++){
        digitalWrite(13,HIGH);
        delay(1000);
        digitalWrite(13,LOW);
        delay(1000);
    }
}
```
****Note:**** You can have a function with multiple varibles in the parameter. 
* EX: void apple(int quantity, String name, double weight)


**Call a Function WITH Parameter**
```c
flash(5);
```
Since we have passed the number 5 in the paramter the function will use the value 5 for where ever numFlash is called. Keep in mind that this value is now stored only for the call of this function, and will be erased once the function has done its job. You will never be able to access this variable outside of the function since this varible is only initialized within the perimeter of the function. 


## Example Activity
In this example we will create a program that displays numbers 0-9 on a seven segment display. 

![](/img/sevenSegmentExample.jpg)

**Step 1:** Create an array for the LED's (the different lines on the seven segment). As well create an array that holds the value of which lights should be one for each number.
 ```c 
int LED_PIN[]={11,10,7,8,9,12,13};

//0,1,2,3,4,5,6,7,8,9
//LEDs that should be on for to display each number
Char *DIGIT[]={"1111110","0110000","1101101","1111001","0110011","1011011","1011111","1110000","1111111","1111011"};

 ```

**Step 2:** Initialize the pins in the 'setup' loop.
```c
void setup() {
  //sets up leds in pins 7-13
  for(int i=7; i<=13; i++) {
    pinMode(i, OUTPUT);
  }  
}
```

**Step 3:** Lets create a clear function! 
* This function will turn off all the LED's so we can print on a new number
* This function will be a return type of void since we are not returning anything
* We need not values either so the parameters will just be empty
* For the command of the function we can loop through all the LED's and turn them off using **digitalWrite(pin#, LOW);**
```c
//turns off all the leds that were originally on
void clearAll() { 
  for(int i=0; i<7; i++) {
    digitalWrite(LED_PIN[i], LOW);
  } 
}
```


**Step 4:** Lets create another function!!
* In this function we will be recieving an int from the parameter of the number to display
* The return type is void as there is nothing to return
* Using the array we created in the begining that holds all the values of which LEDs to turn on(**DIGIT**), we can take that value and store it in a newly created varible(**str**)
* **NOTE:** this newly created varible can only be accessed from inside this function when it is running ONLY. Once the function has done its job everything is erased. 
* Next we will loop through **str** and turn on or off the LED's based on whether the corresponding value is 1 or 0
* This process will loop through 7 times due to the 7 LED's that are on the seven segment

```c
void displayDigit(int digit) {
  char* str = DIGIT[digit];
  for(int i=0; i<7; i++) {
    if(str[i]=='1'){
      digitalWrite(LED_PIN[i], HIGH);
    } else {
      digitalWrite(LED_PIN[i], LOW);
    }
  }
}
```

**Step 5:** Now that we have all the tools we need, lets put it together!! Since we are displaying the digits 0 though 9 we can use a for loop for that. Inside we can call our displayDigit() function and pass though i in the parameter. Add a delay for 1 second, clear the seven segment, and finally delay for 200 milliseconds. And you are done!! 
```c
//displays numbers 0-9 between 1 second intervals
void loop() {
  for(int i=0; i<=9; i++) {
  	displayDigit(i);
    delay(1000);
    clearAll();
    delay(200);
  }
}
```

**Full Code**

```c
//7 segment displays numbers 0 through 9

int LED_PIN[]={11,10,7,8,9,12,13};

//0,1,2,3,4,5,6,7,8,9
//LEDs that should be on for to display each number
Char *DIGIT[]={"1111110","0110000","1101101","1111001","0110011","1011011","1011111","1110000","1111111","1111011"};


void setup() {
  //sets up leds in pins 7-13
  for(int i=7; i<=13; i++) {
    pinMode(i, OUTPUT);
  }  
}

//turns off all the leds that were originally on
void clearAll() {
  for(int i=0; i<7; i++) {
    digitalWrite(LED_PIN[i], LOW);
  } 
}

//displays specified digit on LED screen
void displayDigit(int digit) {
  char* str = DIGIT[digit];
  for(int i=0; i<7; i++){
    if(str[i]=='1') {
      digitalWrite(LED_PIN[i], HIGH);
    } else {
      digitalWrite(LED_PIN[i], LOW);
    }
  }
}

//displays numbers 0-9 between 1 second intervals
void loop() {
  for(int i=0; i<=9; i++) {
  	displayDigit(i);
    delay(1000);
    clearAll();
    delay(200);
  }
}

```


## Your Turn!
Try following the example code to get a feel for creating and using function, both with and without paramters!!

On your own try:
* Create an SOS signal on an LED
   * Create a function that takes a paramter for the number of times the LED should flash and for how long
   * Use that function to signal 3 short flashes, then 3 long, and finally 3 short again

**NOTE:** You can call the function more than once!

* OR Change a previous project of yours and see if you can simplify the code by adding functions!