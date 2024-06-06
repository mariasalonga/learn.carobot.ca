---
title: "Infrared Extra-Long-Range Proximity Sensor"

sidebar_position: 7
---

# How to use an Infrared Proximity Sensor (Extra-Long-Range)

The sharp infrared distance proximity sensor is a sensor for distance measurements. This sensor is typically used for measuring larger ranges(approximately 100 – 500 cm(39″ to 197″)), although it is quite accurate. 

![](/img/docs/product_guide/1758(1).jpg)

## How it works
The component uses a specific light sensor to detect a light wavelength in the Infrared (IR) wave spectrum. The intensity of the light is received when an object is close to the sensor. The light bounces off the object and into the light sensor, which results in a change to the intensity.

![](/img/docs/product_guide/1758(2).jpg) ![](/img/docs/product_guide/0350(3).jpg)

## Wiring

* **Red Wire**: connected to 5V
* **Blue Wire**: connected to 5V
* **Black Wire**: connected to ground 
* **Yellow Wire**: connect to ground
* **Green Wire**: connect to an analog pin

![](/img/docs/product_guide/1758(4).jpg) 

## Parts
* [Sharp Infrared Long-Range Proximity Sensor (Analog 100-500cm)](https://www.canadarobotix.com/products/1758)
* [Arduino Uno R3](https://www.canadarobotix.com/products/60)
* [BreadBoard](https://www.canadarobotix.com/products/223)
* [10 kΩ resistor](https://www.canadarobotix.com/products/1765)
* [Jumper wires](https://www.canadarobotix.com/products/922)
* [Arduino IDE](https://www.arduino.cc/en/software)


## Wiring Guide 

* Connect the Voltage and Ground Wires to the breadboard
* Connect the component wire (green wire) to an analog pin (ex: A0)
* Follow the code provided
* Under the Tools folder select you board and pick the port you are using to upload the code onto the Arduino
* Watch the change in data from the Serial Monitor found under the Tools tab


![](/img/docs/product_guide/1758(3).jpg)

## Programming
<!-- ![](/img/docs/product_guide/2290(4).jpg) -->

The following code demonstrates how the short proximity sensor works and measures the distance when the sensor is moved
towards or away from an object, within the range of 100-500cm. If you want to skip the steps, you can jump to the Full Code. 

**Step 1:** Create variables for the sensors pin and a variable to store the data that is collected 

```c
int sensor = A0; //sensor pin connection
```

**Step 2:** Set up serial communication, set the **sensor** pin as an **INPUT**. 

```c
void setup() {
 Serial.begin(9600); // start the serial port
 pinMode(sensor, INPUT); //setting the pin to the Arduino
}
```

**Step 3:** Read the data from the **sensor**, and convert the data into a volts measurement

```c
void loop() {

 //5V
 float volts = analogRead(sensor)*0.0048828125;  // value from sensor * (5/1024)
```

**Step 4:** Now convert the volts measurement into distance, a measurement we understand.
**This calculation is found in the datasheet gragh of the component and can be found [here!](https://cdn.shopify.com/s/files/1/0015/7571/4865/files/datasheet_gp2y0a02yk_e.pdf?292)**
```c
int distance = 13*pow(volts, -1); // worked out from datasheet graph
 delay(1000); // slow down serial port 
```

**Step 5:** Finally use the distance we calculated and display ONLY when the distance is less than or equal to its max limit.
```c
if (distance >= 100 && distance <= 500){
   Serial.println(distance);   // prints the distance
 }
}
```

## Full Code

```c
int sensor = A0; //sensor pin connection

void setup() {
 Serial.begin(9600); //start the serial port
 pinMode(sensor, INPUT); //setting the pin to the Arduino
}

void loop() {

 //5V
 float volts = analogRead(sensor)*0.0048828125;  // value from sensor * (5/1024)
 int distance = 13*pow(volts, -1); // worked out from datasheet graph
 delay(1000); // slow down serial port 
 
 if (distance >= 100 && distance <= 500){
   Serial.println(distance);   // prints the distance
 }
}
```

## Output
Serial Monitor will display distance that is measure from the proximity sensor, only if the distance measure is greater than or equal to 100 and less than or equal to the max limit which is 500cm for this exact component.


<!-- ![](/img/docs/product_guide/1072_01.gif)
![](/img/docs/product_guide/1072_04.png) -->