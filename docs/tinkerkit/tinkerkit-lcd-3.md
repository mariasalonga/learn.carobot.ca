---
title: TinkerKit LCD Serial
sidebar_position: 4
slug: tinkerkit-lcd-tutorial-03-lcd-serial
---

# TinkerKit Arduino LCD - LCD Serial

In this tutorial we use the [TinkerKit LCD module](https://www.canadarobotix.com/products/1654) from the Serial port of the TinkerKit! shield.

## Verify Requirement

First of all let’s get all the tools we need: the [TKLCD library](https://github.com/carobot/TKLCD-Library) and a [four-connectors wire](https://www.canadarobotix.com/products/1168) or [4-pin jumper wire (Molex KK 2.54mm)](https://www.canadarobotix.com/products/1872).

To connect the LCD to the shield, we need a [four-connectors wire](https://www.canadarobotix.com/products/1168) or [4-pin jumper wire (Molex KK 2.54mm)](https://www.canadarobotix.com/products/1872); in fact it has four holes like the serial port, one more than the regular TinkerKit! connectors.

The TKLCD library is available [here](https://github.com/carobot/TKLCD-Library); if you don’t remember how to install a library, here’s a brief summary:

1. unzip the downloaded file
2. move the TKLCD folder inside the “libraries” folder, usually located in **Documents\Arduino\libraries** (if it’s not there, just create it)
3. close the Arduino software, if it’s open, then relaunch it
4. to verify the installation, open the software and from the top menu click on sketch->import library. You should be able to see the TKLCD element in the list

With this library we can generally work with the module, both as independent or connected to the TinkerKit! shield through the serial port. We want to use it with the serial, so we have to do one more step: upload the firmware.

The firmware is nothing more than a particular Arduino sketch and it’s inside the examples of the TKLCD library. You can open it from File->Examples->TKLCD->SerialFirmware Mind that this firmware must be uploaded on the LCD module, and not on the Arduino Board. Connect the module using the USB cable, (the Arduino software recognizes it as an Arduino Leonardo) then load the firmware. You don’t have to upload the firmware every time, just remember to reload it if you upload something else on the module, and then you want to use it again from the serial.

## Connect the TinkerKit LCD

Now, connect the LCD module to the TinkerKit! shield’s SERIAL port and let’s see what we can do with this module.

![](/img/docs/tinkerkit/ways-1.jpg)

First of all we have to include all the libraries required by the LCD module: TKLCD, LiquidCrystal and Wire. The last two don’t need to be downloaded, they’re included in the Arduino software and are selectable just like the other libraries from Sketch->Import Library. Now create a LCD object in the globals, like every other module.

```c
TKLCD_Serial lcd = TKLCD_Serial();
```

Then we have to initialize it in the `setup()`:

```c
lcd.begin();
```

Let’s start by writing something on our LCD screen: inside the `setup()` write

```c
lcd.print("Hello World!");
```

and load it into the Arduino, you should see this on the LCD:

![](/img/docs/tinkerkit/hello-world.jpg)

Every time that we want to print something new on the screen, we have to “refresh” it with the `clear()` function. To write “Hello World!” but with the two words alternating every second on the screen, we have to type:

```c
lcd.clear();
lcd.print("Hello");
delay(1000);

lcd.clear();
lcd.print("World!");
delay(1000);
```

## Read Input and More Code

Now let’s use it to read the value of an input. Connect a light sensor to the TinkerKit! shield, then we’ll use the LCD screen to read its values. Don’t forget to include the normal TinkerKit! Library if you’re using modules other than the LCD.

Our loop function is now:

```c
//read the light sensor
int val = ldr.read();
 
//print the values on the lcd
lcd.clear();
lcd.print("Light: ")
lcd.print(val);
delay(20);
```

Now take a look at all the [examples](https://github.com/carobot/TKLCD-Library/tree/master/TKLCD/examples) included in the [TKLCD library](https://github.com/carobot/TKLCD-Library) to discover more functions.