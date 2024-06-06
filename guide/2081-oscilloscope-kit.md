---
title: DSO138 Oscilloscope Kit
sidebar_position: 11
---

# How to use The DSO138 Oscilloscope Kit

Our DSO138 Oscilloscope Kit is designed for ease in assembly and operation as all the parts are pre-soldered and the MCU has been pre-programmed with no additional requirement for programming. It uses a 2.4 inch TFT LCD as its display element that will display nice clear waveforms. If you don't like the default program, you can also upgrade or hack it for your application.

![](/img/docs/product_guide/2081_01.jpg)

In this article, we will walk you through the set up and the operation with [Oscilloscope Kit](https://www.canadarobotix.com/2081). 

The kit comes with all the parts that have been soldered onto the PCB board, and 3 instructions manual. 

![](/img/docs/product_guide/2081_01.png)

## Parts
* [DSO138 Oscilloscope Kit](https://www.canadarobotix.com/2081)
* [12V Power Supply](https://www.canadarobotix.com/1157)

## Connections
**Power Supply:** Connect DC power supply to **J9** or **J10**. The power supply voltage must be in the range of 8V - 12V. 

**Noted that, the power supply voltage must not exceed 12V. Otherwise, the regulator will get hot and you might see some smoke!

![](/img/docs/product_guide/2081_02.png)

**Probe:** Connect the test probe to **J1**. The maximum allowable signal input voltage is 50Vpk (100Vpp) with the clip probe. 

![](/img/docs/product_guide/2081_03.png)

## Operations
**Press on [SEL] button:** Select parameter to be adjusted. The selected parameter will be highlighed

![](/img/docs/product_guide/2081_04.png)

**Press on [+] or[-] button:** Adjust the parameter selected by [SEL] button.

![](/img/docs/product_guide/2081_05.png)

**Press on [OK] button:** Freeze waveform refresh (entering HOLD state). Press on it again will re-freeze. 

![](/img/docs/product_guide/2081_06.png)

**Change [CPL] switch:** Set couple to **DC, AC,** or **GND.** When GND is selected the scope input is isolated from input signal and connected to ground (0V input).

![](/img/docs/product_guide/2081_07.png)

**Change [SEN1] or [SEN2] switch:** Adjust sensitivity. The product of **[SEN1]** and **[SEN2]** settings makes the actual sensitivity which is displayed at the lower-left corner of the panel. 

![](/img/docs/product_guide/2081_08.png)

**Press on [Reset] button:** Perform a system reset and re-boots the oscilloscope.

![](/img/docs/product_guide/2081_09.png)

## Test and Use
Let's test out the oscilloscope kit and see how it works. 

**Step 1:** Plug in a 9V power supply to **J10** or **J9**. You should see the LCD lights up and oscilloscope panel displayed. 

![](/img/docs/product_guide/2081_01.gif)
![](/img/docs/product_guide/2081_10.png)

**Step 2:** Press various buttons and move the switches to verify their functions. 

![](/img/docs/product_guide/2081_02.gif)
![](/img/docs/product_guide/2081_03.gif)

**Step 3:** Attach the probe to **J1.** Touch the red clip with your finger and see if there is any signal showing on the display. 

![](/img/docs/product_guide/2081_04.gif)
![](/img/docs/product_guide/2081_05.gif)

Now, you can connect the red and black clips to a circuit and test out the results, such as the voltage, current and more. 