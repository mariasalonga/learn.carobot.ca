---
title: MQ-2 Smoke Sensor
sidebar_position: 1
---

# How to use The MQ-2 Smoke Sensor

The MQ-2 Smoke Sensor is a very popular module for detecting smoke and to flammable gases like LPG, Butane, Propane, Methane, Alcohol, and hydrogen. It outputs different voltage accordingly to the smoke/gas level that exists in the atmosphere. The sensor outputs a voltage that is proportional to the concentration of smoke/gas. In other words, the greater the gas concentration, the greater the output voltage. The lower the gas concentration, the lower the output voltage. 

![](/img/docs/product_guide/2377_01.jpg)

The smoke sensor has a built-in potentiometer that allows you to adjust the sensor sensitivity according to how accurate you want to detect gas. It has both digital and analog pins that can read with an analog input or a digital output that can be read with a digital input from an Arduino Board. 

![](/img/docs/product_guide/2377_01.png)

In this article, we will talk about how to wire and set up the module for operation with an Arduino Board.  

## Wiring 
Most MQ-2 modules operate at 5V and gives out both analog and digital outputs. For this project, we will be using [MQ-2 Smoke Sensor](https://www.canadarobotix.com/2377), the one we carry in our shop. This module consists of 4 pins: **VCC, A0, D0** and **GND**.

## Parts
* [MQ-2 Smoke Sensor](https://www.canadarobotix.com/2377)
* [BreadBoard](https://www.canadarobotix.com/223)
* [Arduino Uno R3](https://www.canadarobotix.com/products/60)
* [Jumper wires](https://www.canadarobotix.com/products/922)
* [Arduino IDE](https://www.arduino.cc/en/software)

## Wiring Guide
Connect the pins with male to male jumper wires 

![](/img/docs/product_guide/2377_02.png)

MQ-2 **VCC** -- Arduino **5V** pin 
MQ-2 **A0** -- Arduino **A0** pin 
MQ-2 **D0** -- Arduino **D2** pin 
MQ-2 **GND** -- Arduino **GND** pin

![](/img/docs/product_guide/2377_03.png)
![](/img/docs/product_guide/2377_04.png)

## Programming 
Before we set a threshold value, we need to know what the numbers are like before the sensor detects any smoke. Follow the following code for the testing. As you have found the threshold value by having smoke near the sensor, set that certain value as the threshold on the code. If you want to skip the steps, you can jump to the Full Code. 

**Step 1:** Define connection pin.

```c
#define sensor A0 
```

**Step 2:** Create variables for storing the sensor's state and the threshold value that you have found from putting the sensor near the smoke. (the value might vary depending on your sensor) 

```c
int value = 0;
int threshold = 100;
```

**Step 3:** Set up serial communication between Arduino and MQ-2 sensor and set the sensor as an input. 

```c
void setup(){
  Serial.begin(9600);
  pinMode(sensor, INPUT);
}
```

**Step 4:** Read sensor's state input

```c
void loop(){
  value = analogRead(sensor);
```

**Step 5:** if the value is greater than the threshold value, serial monitor will display "smoke detected". Otherwise, it will display "all clear". 

```c
  if (value > threshold){
    Serial.println("Smoke Detected...");
  }
  else{
    Serial.println("All Clear..");
  }
  delay(1000);
}
```

## Full Code

```c
#define sensor A0 

int value = 0;
int threshold = 100;

void setup(){
  Serial.begin(9600);
  pinMode(sensor, INPUT);
}

void loop(){
  value = analogRead(sensor);
  // to find the threshold, comment the following block out
  /* 
   *  Serial.println(value);
   */
  if (value > threshold){
    Serial.println("Smoke Detected...");
  }
  else{
    Serial.println("All Clear..");
  }
  delay(1000);
}
```

## Output
When there is smoke

 ![](/img/docs/product_guide/2377_05.png)

When there is no smoke 

![](/img/docs/product_guide/2377_06.png)