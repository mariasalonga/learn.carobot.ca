---
title: Mini PIR Sensor Module 
sidebar_position: 1
---

# How to use The Mini PIR Sensor Module

The mini PIR sensor module (HC-SR505) is a sensor that can detect motion through the use of infrared light. In this guide, we will be using the [Mini PIR Sensor Module (HC-SR505)](https://www.canadarobotix.com/products/2172) that is found in our shop.

![](/img/docs/product_guide/2172_01.png)

## Parts
* [Mini PIR Sensor Module (HC-SR505)](https://www.canadarobotix.com/products/2172)
* [M/F Jumper wires](https://www.canadarobotix.com/collections/cables-wires-and-connectors/products/1162)
* [Arduino Uno R3](https://www.canadarobotix.com/products/60)
* [Arduino IDE](https://www.arduino.cc/en/software)

## Wiring Guide
![](/img/docs/product_guide/2172_02.png)

**Step 1:** Connect the PIR sensor pins to the Arduino

|Sensor|Arduino|
|------|-------|
|+|5V|
|S|Pin 3|
|-|GND|

## Programming

**Step 1:** First of all, define the pin number that is connected to the signal output

```c
int signalPin = 3;
```

**Step 2:** Start the serial monitor and activate the pin that is connected to the signal output

```c
void setup(){
  Serial.begin(9600);
  pinMode(signalPin, INPUT);
}
```

**Step 3:** Write down some code that will print on the serial monitor whether the sensor senses movement or not

```c
void loop(){
  if(digitalRead(signalPin)==HIGH){
    Serial.println("Movement detected");
  }else{
    Serial.println("Did not detect movement");
  }
  delay(1000);
}
```

### Full Code

```c
int signalPin = 3;

void setup(){
  Serial.begin(9600);
  pinMode(signalPin, INPUT);
}

void loop(){
  if(digitalRead(signalPin)==HIGH){
    Serial.println("Movement detected");
  }else{
    Serial.println("Did not detect movement");
  }
  delay(1000);
}
```

## Output
**Serial Monitor**

![](/img/docs/product_guide/2172_03.png)