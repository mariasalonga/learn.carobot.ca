---
title: Sound Sensor Module
sidebar_position: 1
---

# How to use The Sound Sensor Module

The sound sensor module utilizes a microphone to sense any sounds. In this guide, we will be using the [Sound Sensor Module](https://www.canadarobotix.com/products/2105) from our shop.

![](/img/docs/product_guide/2105_01.png)

## Parts
* [Sound Sensor Module](https://www.canadarobotix.com/products/2105)
* [M/M Jumper wires](https://www.canadarobotix.com/products/2031)
* [Arduino Uno R3](https://www.canadarobotix.com/products/60)
* [Arduino IDE](https://www.arduino.cc/en/software)

## Wiring Guide

**Step 1:** Connect the sensor pins to the Arduino

|Sensor|Arduino|
|------|-------|
|G|GND|
|+|5V|
|D0|Pin 3|

## Programming

**Step 1:** Declare the pin connected to the sensor as well as a boolean value

```c
int sensorPin = 3;
boolean val = 0;
```

**Step 2:** Activate the pin connected to the sensor as well as activating the serial monitor

```c
void setup(){
  pinMode(sensorPin, INPUT);
  Serial.begin(9600);
}
```

**Step 3:** Read the sensor pin and put the value into `val`

```c
val = digitalRead(sensorPin);
```

**Step 4:** Create an `if/else` statement for when the sensor hears sound

```c
if (val == HIGH) {
  Serial.println("ON");
}else{
  Serial.println("OFF");
}
delay(1000);
```

### Full Code

```c
int sensorPin = 3;
boolean val = 0;

void setup(){
  pinMode(sensorPin, INPUT);
  Serial.begin (9600);
}
  
void loop (){
  val = digitalRead(sensorPin);
  if (val == HIGH){
    Serial.println("ON");
  }
  else{
    Serial.println("OFF");
  }
  delay(1000);
}
```

## Output

**Serial Monitor**

![](/img/docs/product_guide/2105_02.png)