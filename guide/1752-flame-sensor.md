---
title: Flame Sensor
sidebar_position: 1
---

# How to use a Flame Sensor

The flame sensor module consists of an IR receiver, resistor, capacitor, potentiometer, and a comparator LM393 in an integrated circuit. It can detect infrared light with a wavelength ranging from 700nm to 1000nm. The flame probe converts the light detected into the form of infrared light into current changes. 

![](/img/docs/product_guide/1752_01.jpg)

The flame sensor module operates between 3.3V to 5V DC with a digital output that indicate the presence of a high infrared signal. When it is triggered, it will output a HIGH. 

![](/img/docs/product_guide/1752_01.png)

## How it works
The flame sensor is very sensitive to IR wavelength. The **analog output (A0)** outputs a real-time voltage signal on the thermal resistance, while the **digital output (D0)** outputs a high and low signal threshold adjustable via the potentiometer when the temperature reaches a certain threshold. 

## Parts 
* [Flame Sensor Module](https://www.canadarobotix.com/1752)
* [Arduino Uno R3](https://www.canadarobotix.com/products/60)
* [Jumper wires](https://www.canadarobotix.com/products/922)
* [Arduino IDE](https://www.arduino.cc/en/software)

## Wiring Guide
In this guide, we'll only talk about how to read the digital sginal from the sensor. Connect the 3 pins with male to female jumper wires

 ![](/img/docs/product_guide/1752_02.png)

## Connect to Arduino Uno 
* Flame Sensor Module **VCC** -- Arduino **5V** pin
* Flame Sensor Module **GND** -- Arduino **GND** pin
* Flame Sensor Module **D0** -- Arduino **D7** pin

![](/img/docs/product_guide/1752_03.png)
![](/img/docs/product_guide/1752_04.png)

## Programming 
The following code demonstrates how the flame sensor module works when it detects a flame or not. It will be triggered when there is a flame within its range and send out a message. If you want to skip all the steps and jump to the Full Code. 

**Step 1:** Define the connection pin. 

```c
#define sensor 7
```

**Step 2:** Create a variable for storing the module's state. 

```c
int value = 0;
```

**Step 3:** Set up serial communication between Arduino and sensor and set the sensor as an input. 

```c
void setup(){
  Serial.begin(9600);
  pinMode(sensor, INPUT);
}
```

**Step 4:** Read signal from sensor. 

```c
void loop(){
  value = digitalRead(sensor);
```

**Step 5:** If it is triggered, a flame is detected, print out a message accordingly. 

```c
 if (value == HIGH){
    Serial.println("FIRE FIRE FIRE!!");
  }
  else{
    Serial.println("CLEAR");
  }
}
```

## Full Code

```c
#define sensor 7
int value = 0;

void setup(){
  Serial.begin(9600);
  pinMode(sensor, INPUT);
}
void loop(){
  value = digitalRead(sensor);
  if (value == HIGH){
    Serial.println("FIRE FIRE FIRE!!");
  }
  else{
    Serial.println("CLEAR");
  }
}
```

## Output
When there is no flame 

![](/img/docs/product_guide/1752_05.png)

When there is flame. Use the potentiometer to adjust the threshold.

![](/img/docs/product_guide/1752_06.png)