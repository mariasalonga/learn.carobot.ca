---
title: Raindrops Detection Sensor Module
sidebar_position: 1
---

# How to use The Raindrops Detetion Sensor Module

The raindrops detection sensor module is a sensor that detects water drops with a voltage limit from 3.3V-5V. In this guide, we will be using the [Raindrops Detection Sensor Module](https://www.canadarobotix.com/products/2758) from our store.

![](/img/docs/product_guide/2758_01.png)

## Part
* [Raindrops Detection Sensor Module](https://www.canadarobotix.com/products/2758)
* [M/M Jumper wires](https://www.canadarobotix.com/products/2031)
* [Arduino Uno R3](https://www.canadarobotix.com/products/60)
* [Arduino IDE](https://www.arduino.cc/en/software)

## Wiring Guide

**Step 1:** First of all, connect the sensor module to the sensor

![](/img/docs/product_guide/2758_02.png)

**Step 2:** Connect the sensor pins with the Arduino

|Sensor|Arduino|
|------|-------|
|VCC|5V|
|GND|GND|
|A0|A0|

## Programming

**Step 1:** Define your pins and values

```c
#define rainfall A0
int value;
int set = 10; //set value to compare to value
```

**Step 2:** Start the serial monitor and activate the pin

```c
void setup(){
  Serial.begin(9600);
  pinMode(rainfall,INPUT);
}
```

**Step 3:** In loop(), read the value of the sensor and map it out for a new value to compare to set

```c
value = analogRead(rainfall);
value = map(value,0,1023,225,0);
```

**Step 4:** Add a `if/else` statement to tell what the serial monitor should print when water is detected

```c
if(value >= set){
  Serial.println("rain detected");
}else{
  Serial.println("no rain detected");
}
delay(200);
```

### Full Code

```c
#define rainfall A0
int value;
int set = 10;

void setup(){
  Serial.begin(9600);
  pinMode(rainfall,INPUT);
}

void loop(){
 value = analogRead(rainfall);
 value = map(value,0,1023,225,0);
 
 if(value >= set){
  Serial.println("rain detected");
 }else{
  Serial.println("no rain detected");
 }
 
 delay(200);
}
```

## Output
**Wiring**

![](/img/docs/product_guide/2758_01.gif)

**Serial Monitor**

![](/img/docs/product_guide/2758_02.gif)