---
title: "Piezo Vibration Sensor"
sidebar_position: 1
---

# How to use a Piezo Vibration Sensor

The Piezo Vibration Sensor (Small Horizontal) is a flexible component which reads the vibrations based on whether the component is touched or not. 

![](/img/docs/product_guide/1012(1).jpg)

## How it works
This component does not require any connection to voltage or any power source. Instead the sensor uses a certain material to measure the voltage across the piezo when a mechanical stress is applied. The pressure applied to the sensor causes the component to send a signal to the Arduino which is then converted into voltage.

![](/img/docs/product_guide/1012(2).jpg) ![](/img/docs/product_guide/1012(3).jpg)

## Wiring
The sensor is not polarized meaning you can wire the component however you like. 

* Pin 1: Connected to A0 on the Arduino 
* Pin 2: Connected to A1 on the Arduino


![](/img/docs/product_guide/1012(4).jpg) 

## Parts
* [Piezo Vibration Sensor (Small Horizontal)](https://www.canadarobotix.com/products/1012)
* [Arduino Uno R3](https://www.canadarobotix.com/products/60)
* [BreadBoard](https://www.canadarobotix.com/products/223)
* [Diffused 10mm LED (Blue)](https://www.canadarobotix.com/products/1956)
* [10 kΩ resistor](https://www.canadarobotix.com/products/1770)
* [Jumper wires](https://www.canadarobotix.com/products/922)
* [Arduino IDE](https://www.arduino.cc/en/software)


## Wiring Guide 

* Connect one of the sensors pins to the analog pin A0 and the other to A1
* Connect the positive led of the LED to the resistor, and then the resistor to pin 13 on the Arduino and connect the           negative led pin to ground
* Follow the provided code and watch the LED light up when the sensor is NOT touched and turn off when the sensor is touched


![](/img/docs/product_guide/1012(5).jpg)


## Programming
<!-- ![](/img/docs/product_guide/2290(4).jpg) -->

The following code demonstrates how the Piezo vibration sensor works and how to work the sensor in relation to an LED.

**Step 1:** Create variables for the sensors pin, the led pin, and the threshold.

```c
int GroundPin= A0;
int sensorPin= A1;
int LEDPin= 13;

//defines normal and threshold voltage levels
int threshold= 500;
```

**Step 2:** Set up serial communication, set the **GroundPin** and the **LEDpin** pin as an **OUTPUT**, and set the **GroundPin** as **LOW**. 

```c
void setup(){
  Serial.begin(9600);
  pinMode(GroundPin, OUTPUT);
  digitalWrite(GroundPin, LOW);
  pinMode(LEDPin, OUTPUT);
}
```

**Step 3:** Read the data from the **sensorPin** and print it out to the serial monitor. Now in order to have the LED change from High to low voltage we much check when the reading is greated than the threshold. When this is true we can set the LED to **HIGH** for a delay of 1 second and then turn the LED back to **LOW**. 

```c
void loop(){
  int reading= analogRead(sensorPin);
  Serial.println(reading);
  if (reading > threshold) {
    digitalWrite(LEDPin, HIGH);
    delay(1000);
    digitalWrite(LEDPin, LOW);
  }
}
```

## Full Code

```c
int GroundPin= A0;
int sensorPin= A1;
int LEDPin= 13;

//defines normal and threshold voltage levels
int threshold= 500;

//sets GroundPin and LEDPin as output pins, with GroundPin being set to LOW
void setup(){
  Serial.begin(9600);
  pinMode(GroundPin, OUTPUT);
  digitalWrite(GroundPin, LOW);
  pinMode(LEDPin, OUTPUT);
}

//if the reading is higher than the threshold value, then the LED is turned on
void loop(){
  int reading= analogRead(sensorPin);
  Serial.println(reading);
  if (reading > threshold) {
    digitalWrite(LEDPin, HIGH);
    delay(1000);
    digitalWrite(LEDPin, LOW);
  }
}
```

## Output
The following code will result with the the LED being turned on when the sensor is not touched and turned off when the sensor is touched.

![](/img/docs/product_guide/1012(6).jpg) ![](/img/docs/product_guide/1012(7).jpg)

<!-- ![](/img/docs/product_guide/1072_01.gif)
![](/img/docs/product_guide/1072_04.png) -->