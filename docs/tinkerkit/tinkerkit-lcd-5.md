---
title: Arduino & 2 Wires
sidebar_position: 6
slug: tinkerkit-lcd-tutorial-05-arduino-2-wires
---

# TinkerKit Arduino LCD - Arduino & 2 Wires

The [TinkerKit LCD module](https://www.canadarobotix.com/products/1654) can be controlled **straight from the Arduino**, using the serial communication, **without any shield or other module**. Remember to **upload the SerialFirmware** into the LCD board, as we did in the four-cable serial tutorial. It’s located under **examples->TKLCD->SerialFirmware**

## Verify Requirement

If you didn’t do it already, download the [TKLCD library](https://github.com/carobot/TKLCD-Library). Once downloaded, place TKLCD in the libraries folder inside your sketchbook.

How to install the library:

1. unzip the downloaded file
2. move the TKLCD folder inside the “libraries” folder, usually located in **Documents\Arduino\libraries** (if it’s not there, just create it)
3. close the Arduino software, if it’s open, then relaunch it
4. to verify the installation, open the software and from the top menu click on sketch->import library. You should be able to see the TKLCD element in the list

For our tutorial we’ll be using an Arduino UNO and three jumpers to make the connections

## Connect the TinkerKit LCD directly with an Arduino Uno

For our tutorial we’ll be using an [Arduino UNO](https://www.canadarobotix.com/products/60) and [three M/F jumpers](https://www.canadarobotix.com/products/1162) to make the connections to the LCD board's Serial port.

![](/img/docs/tinkerkit/serial-tut.jpg)

The cables needed are male-female, that’s because the Arduino pins are female, while the LCD connectors are male.

Serial port’s layout:

![](/img/docs/tinkerkit/lcd-serial.png)

Connect the UNO board and the LCD board as following:

|LCD Board Serial Port|UNO Board Pin|
|---|---|
|TX |Not Connected|
|RX |Pin 1 (TX)|
|5V |5V |
|GND|GND|

![](/img/docs/tinkerkit/UNO-lcd-4.jpg)

## Example Code

Upload to the Arduino any sketch that uses the `TKLCD_Serial` and reset the Arduino manually by pressing the reset button after the upload is completed. In the following example we’re just writing “Hello World” on the board.

```c
#include <Wire.h>
#include <LiquidCrystal.h>
#include <matrix_lcd_commands.h>
#include <TKLCD.h>
 
TKLCD_Serial lcd = TKLCD_Serial();  
 
void setup() {
  lcd.begin();  
}
 
void loop() {
  lcd.clear();
  lcd.print("Hello");
  delay(1000);
   
  lcd.clear();
  lcd.print("World");
  delay(1000);
}
```

Now take a look at all the [examples](https://github.com/carobot/TKLCD-Library/tree/master/TKLCD/examples) included in the [TKLCD library](https://github.com/carobot/TKLCD-Library) to discover more functions.