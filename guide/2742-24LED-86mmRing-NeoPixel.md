---
title: NeoPixel Compatible (24 LED 86mm Ring)
sidebar_position: 9
---

# How to use The 24 LED 86mm NeoPixel

The 24 LED 86mm NeoPixel is a version of the NeoPixel series that includes 24 LEDs in a 86mm ring format. In this guide, we will be using the [NeoPixel Compatible WS2812 5050 RGB LED (24 LED 86mm Ring)](https://www.canadarobotix.com/products/2742) from our store.

![](/img/docs/product_guide/2742_01.png)

## Parts
* [NeoPixel Compatible WS2812 5050 RGB LED (24 LED 86mm Ring)](https://www.canadarobotix.com/products/2742)
* [M/F Jumper wires](https://www.canadarobotix.com/collections/cables-wires-and-connectors/products/1162)
* [Arduino Uno R3](https://www.canadarobotix.com/products/60)
* [Arduino IDE](https://www.arduino.cc/en/software)
* [Soldering Iron](https://www.canadarobotix.com/products/2852)
* [Lead Free Solder](https://www.canadarobotix.com/products/964)

## Wiring Guide
|NeoPixel|Arduino|
|---|---|
|5V|5V|
|GND|GND|
|DI|Pin 6|

Soldering is **_required_** to wire everything properly. Use jumper wires to connect the NeoPixel with the Arduino.

## Programming

**Step 1:** Before we start coding, we first have to download the needed libraries.
![](/img/docs/product_guide/2737_01.png)

**Step 2:** Enter `NeoPixel` and install the highlighted search.

![](/img/docs/product_guide/2631_03.png)

**Step 3:** Declare your libraries

```c
#include "Adafruit_NeoPixel.h"
```

**Step 4:** Declare an object using `Adafruit_NeoPixel`.

```c
Adafruit_NeoPixel pixels(24, 6, NEO_GRB + NEO_KHZ800);
```

:::info Adafruit_NeoPixel();
Adafruit_NeoPixel pixels(# of LEDS, digital pin #, LED type + LED type);
:::

**Step 5:** Initialize the NeoPixel project.

```c
void setup(){
    pixels.begin();
}
```

Now that everything has been initialized, you can code whatever you want.

## Example

Here are a few commands you can use to control the NeoPixel:

```c
object.setBrightness(0-255); //sets the brightness of the NeoPixels
```

```c
object.clear(); //clears all the pixels
```

```c
object.setPixelColor(pixel#, object.Color(R, G, B)); //sets a color for a specific pixel
```
:::info RGB
The (R, G, B) can go from (0, 0, 0) to (255, 255, 255)
:::

```c
object.show(); //shows whatever pixel you have updated with setPixelColor
```

Here is an example of how to use the 24 LED 86mm Ring NeoPixel.

**Step 1:** Initialize the NeoPixel.

```c
#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
    #include <avr/power.h> // this is required for 16 MHz Adafruit Trinket
#endif

int PIN = 6;
int NUMPIXELS = 24;

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup(){
    pixels.begin();
    pixels.setBrightness(10);
}
```

**Step 2:** Let's start by clearing the NeoPixel to make sure there is nothing on the LEDs.

```c
void loop(){
    pixels.clear();
}
```

**Step 3:** Let's create a for loop that makes one LED light up after the other every second.

```c
for(int i = NUMPIXELS; i >= 0; i--){
    pixels.setPixelColor(i, pixels.Color(i*10, 255, 255)); //this should cause a white color to slowly turn into blue
    pixels.show();
    delay(100);
}
```

### Full Code

```c
#include "Adafruit_NeoPixel.h"
#ifdef __AVR__
    #include <avr/power.h> // this is required for 16 MHz Adafruit Trinket
#endif

int PIN = 6;
int NUMPIXELS = 24;

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup(){
    pixels.begin();
    pixels.setBrightness(10); //to not ruin my eyes
}

void loop(){
    pixels.clear();
    for(int i = NUMPIXELS; i >= 0; i--){
        pixels.setPixelColor(i, pixels.Color(i*10, 255, 255)); //this should cause a white color to slowly turn into pink
        pixels.show();
        delay(100);
    }
}
```

## Output

![](/img/docs/product_guide/2742_01.gif)