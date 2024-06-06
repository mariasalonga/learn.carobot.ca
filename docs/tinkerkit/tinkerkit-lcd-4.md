---
title: TinkerKit LCD Local (No Arduino)
sidebar_position: 5
slug: tinkerkit-lcd-tutorial-04-lcd-local-no-arduino
---

# TinkerKit LCD - LCD Local Without Arduino

The [TinkerKit LCD module](https://www.canadarobotix.com/products/1654) can also be used by itself, **without Arduino** or TinkerKit! shield. That’s because it mounts the same microcontroller as the Arduino Leonardo; thanks to its micro-usb connector, it can be plugged straight into your computer and programmed from the software just like a regular Arduino Leonardo.

## Verify Requirement

If you didn’t do it already, download the [TKLCD library](https://github.com/carobot/TKLCD-Library). Once downloaded, place TKLCD in the libraries folder inside your sketchbook.

How to install the library:

1. unzip the downloaded file
2. move the TKLCD folder inside the “libraries” folder, usually located in **Documents\Arduino\libraries** (if it’s not there, just create it)
3. close the Arduino software, if it’s open, then relaunch it
4. to verify the installation, open the software and from the top menu click on sketch->import library. You should be able to see the TKLCD element in the list

## Connect the TinkerKit LCD directly with USB

In this tutorial we’re not using the serial port, for this reason we don’t have to upload the firmware. Let’s begin by connecting the LCD module with a [micro USB cable](https://www.canadarobotix.com/products/1488), then open the Arduino software. In top menu, under Tools->Board select Arduino Leonardo.

First of all we have to include all the libraries required by the LCD module: **TKLCD, LiquidCrystal** and **Wire**. The last two don’t need to be downloaded, they’re included in the Arduino software and are selectable just like the other libraries from **Sketch->Import Library**.

Now we have to create a LCD object in the globals, like every other module. There are two different classes for the TinkerKit! module, we have to declare it as **TKLCD_Serial** or **TKLCD_Local** according if we are using it via serial or via USB.

```c
TKLCD_Local lcd = TKLCD_Local();
```

Then we have to initialize it in the `setup()`:

```c
lcd.begin();
```

Let’s start by writing something on our LCD screen: inside the `setup()` write

```c
lcd.print("Hello World!");
```

Now load it into the module, you should see this on the LCD:

![](/img/docs/tinkerkit/lcd-thumb-294x294.jpg)

Every time that we want to print something new on the screen, we have to “refresh” it with the `clear()` function. To write “Hello World!” but with the two words alternating every second on the screen, we have to type:

```c
lcd.clear();
lcd.print("Hello");
delay(1000);
 
lcd.clear();
lcd.print("World!");
delay(1000);
```

Load it into the module and you should see "Hello" and "World" fleshing.

## Read Input and More Code

Now let’s use it to read the value of an input. Connect a thermistor to one of the connectors, then we’ll use the LCD screen to read its values. Don’t forget to include the normal TinkerKit! Library if you’re using modules other than the LCD. The name of the LCD ports are slightly different from the TinkerKit! shield; here the inputs have the prefix A and the outputs D. In our example we’re connecting the thermistor to the A1 port.

```c
TKThermistor therm(A1);
```

Our loop function is now:

```c
//read the temperature sensor
int temp = ldr.celsius();
 
//print the values on the lcd
lcd.clear();
lcd.print("Temp: ")
lcd.print(temp);
delay(20);
```

Now take a look at all the [examples](https://github.com/carobot/TKLCD-Library/tree/master/TKLCD/examples) included in the [TKLCD library](https://github.com/carobot/TKLCD-Library) to discover more functions.