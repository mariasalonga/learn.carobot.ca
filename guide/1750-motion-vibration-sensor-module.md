---
title: SW-18015P Motion Vibration Sensor Module
sidebar_position: 1
---

# How to use The SW-18015P Motion Vibration Sensor Module

The SW-18015P Motion Vibration Sensor Module is a small spring inside the metal casing. As the sensor vibrates or moves, the spring will make contact with the metal casing and conduct through the sensor. This module is an easy sensor to use with an Arduino Board. One of the benefits is that you can access both analogue and digital signals.

In this article, we'll talk about how to wire and set up the module for operation with an Arduino Board. 

![](/img/docs/product_guide/1750_01.png)

## Wiring
This module can work from 3.3V to 5V. In this project, we will use 5V to power the module. This module is output Logic Low in the resting state (when triggered). It will output Logic High when the module is not triggered. 

There are several types of vibration sensors available in the market which can detect the vibration by sensing acceleration or velocity and could provide an excellent result. However, some of them are too expensive. But, there are a few dedicated and cheap sensors that are able to detect vibrations only, like SW-18015P, which we are going to use with Arduino Uno. We will work with the [SW-18015P Motion Vibration Sensor Module](https://www.canadarobotix.com/1750), the one we carry in our shop. 

## Parts
* [SW-18015P Motion Vibration Sensor Module](https://www.canadarobotix.com/1750)
* [Arduino Uno R3](https://www.canadarobotix.com/products/60)
* [Jumper wires](https://www.canadarobotix.com/products/922)
* [Arduino IDE](https://www.arduino.cc/en/software)


## Wiring Guide
Connect the pins with Male to Female Jumper Wires. 

* SW-18015P **GND** (middle pin)— Arduino **GND** Pin
* SW-18015P **VCC** (5V) — Arduino **5V**
* SW-18015P **OUT** — Arduino** Pin 3**

![](/img/docs/product_guide/1750_02.png)
![](/img/docs/product_guide/1750_03.png)

## Programming
The following code is to demonstrate how the vibration sensor works. The Serial Monitor will tell us the state of the sensor when it is triggered (detected a vibration) and when it is not (did not detect a vibration). If you want to skip the steps and jump to the Full Code. 

**Step 1:** We will need to define the Arduino A5 pin we just connected with the vibration sensor module. 

```c
#define vibration A5 // define the vibration sensor interface 
```

**Step 2:** We need a variable to store the value that is receiving from the sensor. 

```c
int value; // get value from sensor 
```

**Step 3:** We will set up the module as an input so that Arduino knows where to receive the signals. From the code below, we also set a serial communication between the Arduino board and the vibration sensor.  This way allows the vibration sensor to send the signals to the Serial Monitor. 

```c
void setup() {
  Serial.begin(9600);
  pinMode(vibration, INPUT);
}
```

**Step 4:** We need to get the signal from the vibration sensor and store it into the variable "value" we have just initialized. 

```c
value = digitalRead(vibration); 
// get value from vibration sensor 
```

**Step 5:** As we have the value now, Arduino will send us a message about whether the sensor detects a vibration. If the value is Logic HIGH, Arduino will send us a message " detected" which means the sensor has detected a vibration. Otherwise, Arduino will send us "not detected" as the sensor did not detect a vibration. 

```c
if (value == HIGH){ 
// when the sensor detects a signal, serial monitor will say "detected"
    Serial.print("detected"); 
  }
  else{ // if not, serial monitor will say "not detected" 
    Serial.print("Not detected");
  }
```

## Full Code:

```c
#define led 13 // define LED interface
#define vibration A5 // define the vibration sensor interface 
int value; // get value from sensor 

void setup() {
  pinMode(led, OUTPUT);
  pinMode(vibration, INPUT);
  Serial.begin(9600);

}

void loop() {
  value = digitalRead(vibration); // get value from vibration sensor 
  if (value == HIGH){ 
// when the sensor detects a signal, serial monitor will say "detected"
    Serial.println("detected"); 
  }
  else{ // if not, serial monitor will say "not detected"
    Serial.println("not detected");
  }
}
```

Serial Monitor Output: This is an example of what it will show when the sensor detects a vibration or not.

![](/img/docs/product_guide/1750_04.png)