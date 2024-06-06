---
title: CAROBOT LCD Shield Kit
sidebar_position: 11
---

# How to use The LCD Shield Kit

LCD is widely used in applications to show characters and messages other than using the serial monitor. Our LCD shield kit makes it easy for you you to connect a LCD with an Arduino without using up any of the digital I/O pin except for the 2 I2C pins. As a result, you can connect more electronics into one shield, making it much easier to work with on the Arduino boards. 

## Part List
* [LCD Shield Kit](https://www.canadarobotix.com/2030)
* [Female to Male Header Pins](https://www.canadarobotix.com/143)
* [Arduino Uno R3](https://www.canadarobotix.com/products/60)
* [Arduino IDE](https://www.arduino.cc/en/software)

## Equipment List
* [Soldering Iron](https://www.canadarobotix.com/1557)
* [Wire cutter](https://www.canadarobotix.com/1897)
* [Solder lead-free](https://www.canadarobotix.com/0964)

**The LCD Shield Kit comes with the following parts.**

![](/img/docs/product_guide/2030_01.png)

## Assembly
If you have already assembled the board, you can jump to the Wiring Guide. 

## Soldering Technique:

**With your soldering iron heated up and ready, solder in both leads of the resistors. To do this, heat the round ring pad and the wire lead at the same time for 2 to 3 seconds, then dip the end of the solder into the heated joint to melt it in. Then remove the solder and the soldering iron. **

**Step 1:** Place the resistors onto the Circuit board. Bend the resistor into a 'staple' and slide it into the slot marked the corresponding ohms. Resistors do not have a direction to put it in either way, and it will work fine. After soldering the resistors, cut out the extra wire lead with a wire cutter.

![](/img/docs/product_guide/2030_01.gif)

This is what it should look like when you soldered your resistors onto the circuit board.

Front & Back:

![](/img/docs/product_guide/2030_02.png)
![](/img/docs/product_guide/2030_03.png)

**Step 2:** Place the button onto the circuit board and solder it from the back. 

![](/img/docs/product_guide/2030_02.gif)
![](/img/docs/product_guide/2030_03.gif)

Second Button: 

![](/img/docs/product_guide/2030_04.gif)
![](/img/docs/product_guide/2030_05.gif)

Front & Back: 

![](/img/docs/product_guide/2030_04.png)
![](/img/docs/product_guide/2030_05.png)

Repeat the steps for the other buttons. After you soldered all of them, it will look like this. 

![](/img/docs/product_guide/2030_06.png)
![](/img/docs/product_guide/2030_07.png) 

**Step 3:** Place the potentiometer and solder it from the back. 

![](/img/docs/product_guide/2030_06.gif)
![](/img/docs/product_guide/2030_07.gif)

Front & Back:

![](/img/docs/product_guide/2030_08.png)
![](/img/docs/product_guide/2030_09.png)

**Step 4:** Place the Chip and solder it from the back. 

![](/img/docs/product_guide/2030_10.png)
![](/img/docs/product_guide/2030_11.png)

**Step 5:** Place the Male header pins and solder it from the back. 

![](/img/docs/product_guide/2030_08.gif)
![](/img/docs/product_guide/2030_09.gif)

Front & Back:

![](/img/docs/product_guide/2030_12.png)
![](/img/docs/product_guide/2030_13.png)

**Step 6:** Place the LCD in the middle of the circuit board and solder it from the back.

![](/img/docs/product_guide/2030_10.gif)
![](/img/docs/product_guide/2030_11.gif)

Result:

![](/img/docs/product_guide/2030_14.png)
![](/img/docs/product_guide/2030_15.png)

**Step 7:** Place the Pins on the sides and solder it from the back.

![](/img/docs/product_guide/2030_12.gif)

Solder both sides

![](/img/docs/product_guide/2030_13.gif)
![](/img/docs/product_guide/2030_14.gif)

Front & Back:

![](/img/docs/product_guide/2030_16.png)
![](/img/docs/product_guide/2030_17.png)

## Final Build

![](/img/docs/product_guide/2030_18.png)

## Wiring Guide 
Simply stack the LCD Shield Kit onto Arduino Uno Board, then connect the board to your computer via a USB cable. 

![](/img/docs/product_guide/2030_15.gif)
![](/img/docs/product_guide/2030_19.png)
![](/img/docs/product_guide/2030_20.png)

**Wiring PinOut**
There are no connections to the Arduino since all the pins are connecting to the I2C chip. So, for example, telling the MCP23017 chip to set pin 1 high will set the GPA1 of the chip to high, which is connected to button A of the shield.

Noted that the pins are not referring to Arduino pins, it is referring to the **Shield's** pin. 

If you want to take a look at the [MCP23017 data sheet](https://ww1.microchip.com/downloads/en/devicedoc/20001952c.pdf) and have a better understanding of it. 

![](/img/docs/product_guide/2030_21.png)

|GPIO|Library Pin|Function|
|----|-----------|--------| 
|GPA0|0|Button A|
|GPA1|1|Button Right| 
|GPA2|2|Button Down|
|GPA3|3|Button Up|
|GPA4|4|Button Left|
|GPA5|5|Button B|
|GPA6|6|B/L Pri Red|
|GPA7|7|B/L Green|
|GPB0|8|B/L Blue|
|GPB1|9|LCD DB7|
|GPB2|10|LCD DB6|
|GPB3|11|LCD DB5|
|GPB4|12|LCD DB4|
|GPB5|13|LCD Enable|
|GPB6|14|LCD R/W|
|GPB7|15|LCD RS|

## Programming 
The following code demonstrates how the I2C chip works and is connected to the components on the shield. In addition, it will show a basic hello world display and button input for the RGB 16x2 LCD Shield. If you want to skip all the steps, you can jump to the Full Code. 

**Step 1:**  Download the library from [GitHub](https://github.com/carobot/CAROBOT-LCDShield). 

Click on "Code"

![](/img/docs/product_guide/2030_22.png)

A window will show, and click on "Download ZIP". Your computer should start downloading the ZIP file. 

![](/img/docs/product_guide/2030_23.png)

After downloading the ZIP file, open Arduino and go to **Sketch > Include Library > Add .ZIP Library**.

![](/img/docs/product_guide/2030_24.png)

A pop-up window will appear. Click on the "**CAROBOT-LCDShield-master**" file and click on **Choose**.

![](/img/docs/product_guide/2030_25.png)

As the window has closed, go to **Sketch > Include Library > Contributed libraries**.  There you will see the library has been added to your Arduino. 

![](/img/docs/product_guide/2030_26.png)

**Step 2:** Include libraries 

```c
#include <Wire.h>
#include <CAROBOT_LCDShield.h>
```

**Step 3:** Define lcd 

```c
CAROBOT_LCDShield lcd;
```

**Step 4:** Set up the lcd, print a message to the LCD and set the backlight on. 

```c
void setup(){
  lcd.begin();
  lcd.print("Hello World");
  lcd.setBacklight(LCD_BL_ON);
}
```

**Step 5:** Set the cursor to column 0 and line 1 and print the number of seconds. Noted that line 1 is the second line as the counting begins with 0.

```c
void loop(){
  lcd.setCursor(0,1);
  lcd.print(millis()/1000);
```

**Step 6:** Read the button inputs. 

```c
uint8_t buttons = lcd.readButtons();
```

**Step 7:** If the buttons are pressed, print out a message accordingly and change the backlight colour. 

```c
if (buttons){
    lcd.clear();
    lcd.setCursor(0,0);
    if (buttons & BUTTON_A){
      lcd.print("A ");
      lcd.setBacklight(LCD_BL_PURPLE);
    }
    if (buttons & BUTTON_RIGHT){
      lcd.print("RIGHT ");
      lcd.setBacklight(LCD_BL_BLUE);
    }
    if (buttons & BUTTON_DOWN){
      lcd.print("DOWN ");
      lcd.setBacklight(LCD_BL_YELLOW);
    }
    if (buttons & BUTTON_UP){
      lcd.print("UP ");
      lcd.setBacklight(LCD_BL_GREEN);
    }
    if (buttons & BUTTON_LEFT){
      lcd.print("LEFT ");
      lcd.setBacklight(LCD_BL_RED);
    }
    if (buttons & BUTTON_B){
      lcd.print("B ");
      lcd.setBacklight(LCD_BL_TEAL);
    }
  }
  
}
```

## Full Code

```c
#include <Wire.h>
#include <CAROBOT_LCDShield.h>

CAROBOT_LCDShield lcd;

void setup(){
  lcd.begin();
  lcd.print("Hello World");
  lcd.setBacklight(LCD_BL_ON);
}

void loop(){
  lcd.setCursor(0,1);
  lcd.print(millis()/1000);

  uint8_t buttons = lcd.readButtons();

  if (buttons){
    lcd.clear();
    lcd.setCursor(0,0);
    if (buttons & BUTTON_A){
      lcd.print("A ");
      lcd.setBacklight(LCD_BL_PURPLE);
    }
    if (buttons & BUTTON_RIGHT){
      lcd.print("RIGHT ");
      lcd.setBacklight(LCD_BL_BLUE);
    }
    if (buttons & BUTTON_DOWN){
      lcd.print("DOWN ");
      lcd.setBacklight(LCD_BL_YELLOW);
    }
    if (buttons & BUTTON_UP){
      lcd.print("UP ");
      lcd.setBacklight(LCD_BL_GREEN);
    }
    if (buttons & BUTTON_LEFT){
      lcd.print("LEFT ");
      lcd.setBacklight(LCD_BL_RED);
    }
    if (buttons & BUTTON_B){
      lcd.print("B ");
      lcd.setBacklight(LCD_BL_TEAL);
    }
  }
  
}
```

## Output
After uploading the code, the first row will be the message we code to print previously, and the second row will be the number of seconds. 

![](/img/docs/product_guide/2030_16.gif)

When "left" button is pressed 

![](/img/docs/product_guide/2030_17.gif)

When "right" button is pressed

![](/img/docs/product_guide/2030_18.gif)

When "up" button is pressed

![](/img/docs/product_guide/2030_19.gif)

When "down" button is pressed

![](/img/docs/product_guide/2030_20.gif)

When "A" button is pressed 

![](/img/docs/product_guide/2030_21.gif)

When "B" button is pressed 

![](/img/docs/product_guide/2030_22.gif)

When twisting the potentiometer for the brightness of the LCD display 

![](/img/docs/product_guide/2030_23.gif)

When "restart" button is pressed

![](/img/docs/product_guide/2030_24.gif)