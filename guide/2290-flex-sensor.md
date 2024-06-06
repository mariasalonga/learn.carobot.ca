---
title: Flex Sensor 2.2
sidebar_position: 1
---

# How to use The Flex Sensor

The flex sensor is a variable resistor that can bend. The resistance increases as you bend the component to a smaller angle. This component can be used to measure how much someone is bending their fingers or when a door is opened through this technology.


![](/img/docs/product_guide/2290(1).jpg)

## How it works
One side of the sensor is created with polymer ink which is a conductive material. When the sensor is straight and not bent the resistance is around 30Ω. When you begin to bend the flex sensor away from the ink side the resistance increases to 50-70Ω.

![](/img/docs/product_guide/2290(2).jpg) ![](/img/docs/product_guide/2290(3).jpg)

## Wiring
The sensor is not polarized meaning you can wire the component however you like. 

* Pin 1: connected to Arduino pin A0 and is Grounded
* Pin 2: connected to voltage from the Arduino (5V)

![](/img/docs/product_guide/2290(4).jpg) 

## Parts
* [Flex Sensor (2.2")](https://www.canadarobotix.com/products/2290)
* [Arduino Uno R3](https://www.canadarobotix.com/products/60)
* [BreadBoard](https://www.canadarobotix.com/products/223)
* [10 kΩ resistor](https://www.canadarobotix.com/products/1765)
* [Jumper wires](https://www.canadarobotix.com/products/922)
* [Arduino IDE](https://www.arduino.cc/en/software)


## Wiring Guide 

* Connect the 5V and GND pins to the breadboard
* Connect a 10 kΩ resistor to one of the Flex sensor pins
* Connect the same Flex sensor pin to an Analog pin on the Arduino Uno
* Connect the other end of the resistor to ground
* Connect the other Flex sensor pin to voltage

![](/img/docs/product_guide/2290(5).jpg)
![](/img/docs/product_guide/2290(6).jpg)

## Programming
<!-- ![](/img/docs/product_guide/2290(4).jpg) -->

The following code demonstrates how the Flex sensor works and measures the resistance when it is bent. If you want to skip the steps, you can jump to the Full Code. 

**Step 1:** Create variables for the sensors pin and a variable to store the data that is collected 

```c
int flex = A0;
int data = 0;
```

**Step 2:** Set up serial communication, set the **flex** pin as an **OUTPUT**. 

```c
void setup() {
 Serial.begin(9600);
 pinMode(flex, INPUT);
}
```

**Step 3:** Read the data from the **flex** pin and print it out to the serial monitor

```c
void loop() {
 data = analogRead(flex);
 Serial.println(data);

 delay(100); // one second delay

}
```

## Full Code

```c
int flex = A0;
int data = 0;


void setup() {
 Serial.begin(9600);
 pinMode(flex, INPUT);

}

void loop() {
 data = analogRead(flex);
 Serial.println(data);

 delay(100); // one second delay

}
```

## Output
The following code will result with the servo motor moving the number of degrees that is measured from the rotation
of the potentiometer.

<!-- ![](/img/docs/product_guide/1072_01.gif)
![](/img/docs/product_guide/1072_04.png) -->