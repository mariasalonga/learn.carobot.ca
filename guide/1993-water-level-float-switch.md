---
title: Water Level Float Switch
sidebar_position: 1
---

# How to use a Water Level Float Switch

The float sensor is a device used to detect the level of liquid within a tank. The switch may be used in a pump, an indicator, an alarm, or other devices. The magnet inside the bulb structure is an electromagnetic ON/OFF switch that helps to sense the level of water present in the overhead tank or sump. It is usually used in applications, such as a pump/valve control and detecting the water level in fuel and water tanks and notify if the tank is full of water or when it is empty. 

![](/img/docs/product_guide/1993_01.jpg)

In this article, we will talk about how the float sensor works and how to interface this sensor with Arduino. 

## How it works
The float sensor consists of an electromagnetic switch that the magnetic reed switch is placed in the stem of the sensor. A magnet is in the bulb structure of the sensor. When the water fills up in a reservoir, the bulb structure which has the magnet starts moving up once water reaches a certain level. It moves up close to the stem near the reed switch. Due to the force of attraction from the magnet reed switch closes indicating water level is high. When the water level goes down, the bulb moves down and reed switch contact breaks. Then, the system detects that the water level has gone down and acts accordingly. 

![](/img/docs/product_guide/1993_01.png)

There are many different float sensors in the market which bring various advantages and functions. We will be using [Water Level Float Switch](https://www.canadarobotix.com/1993), the one we carry in our shop for this project. This sensor consists of two terminals, VCC and GND. The VCC terminal of the float sensor can be connected to any digital pins on the Arduino Board and the GND terminal is connected to the ground of Arduino Board. It acts as a switch and the digital pin of Arduino reads the switch state for either being HIGH or LOW. 

## Parts
* [Water Level Float Switch](https://www.canadarobotix.com/1993)
* [Arduino Uno R3](https://www.canadarobotix.com/products/60)
* [Arduino IDE](https://www.arduino.cc/en/software)

## Wiring 
Connect the two wires to Arduino Uno. Both wires are the same, so you can connect either one to GND and digital pin. 

* Float Sensor **wire 1** -- Arduino **D2** pin 
* Float Sensor **wire 2** -- Arduino **GND** pin 

![](/img/docs/product_guide/1993_02.png)
![](/img/docs/product_guide/1993_03.png)

## Programming 
In the following code, we connected the sensor's wires to digital pin 2 and GND pin on Arduino. The sensor acts as a switch and D2 pin of Arduino reads the switch state for either being HIGH or LOW. We also used the built-in LED in pin 13 of Arduino as an indication for float and message of the switch state will be displayed in Serial Monitor. 

If you want to skip the steps,you can jump to the Full Code. 

**Step 1:** Define the connection pins

```c
#define float_sensor 2
#define internal_LED 13
```

**Step 2:** Create a variable for storing the sensor's output. In this case, the variable is set to HIGH because we pulled up the internal resistor for D2 pin that causes it to be HIGH at first.

```c
int state = 1;
```

**Step 3:** Set up serial communication between Arduino and float sensor and set the sensor as an input and internal led as an output. 

Noted that the internal LED is connected to D13 pin on Arduino. You do not need to connect to an extra LED. 

```c
void setup(){
  Serial.begin(9600);
  pinMode(float_sensor, INPUT_PULLUP);
  pinMode(internal_LED, OUTPUT);
}
```

**Step 4:** Read the sensor's output state.

```c
void loop(){
  state = digitalRead(float_sensor);
```

**Step 5:** If the sensor's state is LOW, the bulb is raised up to the water level. The internal led will be turned on and "WATER LEVEL - HIGH" will be showed on the Serial Monitor. Otherwise, the internal led will be turned off and "WATER LEVEL - LOW" will be showed on the Serial Monitor.

```c
  if (state == LOW){
    digitalWrite(internal_LED, HIGH);
    Serial.println("WATER LEVEL - HIGH");
  }
  else{
    digitalWrite(internal_LED, LOW);
    Serial.println("WATER LEVEL - LOW");
  }
}
```

## Full Code

```c
#define float_sensor 2
#define internal_LED 13

int state = 1;

void setup(){
  Serial.begin(9600);
  pinMode(float_sensor, INPUT_PULLUP);
  pinMode(internal_LED, OUTPUT);
}

void loop(){
  state = digitalRead(float_sensor);
  if (state == LOW){
    digitalWrite(internal_LED, HIGH);
    Serial.println("WATER LEVEL - HIGH");
  }
  else{
    digitalWrite(internal_LED, LOW);
    Serial.println("WATER LEVEL - LOW");
  }
}
```

## Output
Test by hand!

When the bulb is low, the internal led is turned off and the state is LOW. Vice versa, when the bulb is held up, the internal led is turned on and the state is HIGH. 

![](/img/docs/product_guide/1993_04.png)

The internal led will go on and off according to the state of the switch. The internal led is right next to pin 13 on Arduino. 

![](/img/docs/product_guide/1993_01.gif)

Serial Monitor: 

![](/img/docs/product_guide/1993_05.png)

When it is in water

![](/img/docs/product_guide/1993_02.gif)
![](/img/docs/product_guide/1993_06.png)

Serial Monitor: 

![](/img/docs/product_guide/1993_07.png)

When there is not enough water

![](/img/docs/product_guide/1993_08.png)
![](/img/docs/product_guide/1993_09.png)

Serial Monitor: 

![](/img/docs/product_guide/1993_10.png)