---
title: Introduction - What is Arduino?
sidebar_position: 1
---

# Introduction - What is Arduino?

[Arduino](arduino.cc) is an open source physical computing platform designed to make electronic project simple and fun. Arduino can be used as a standalone device or can be integrated with your computer to develop a bigger project.

The Arduino Uno in front of you (or on your desk) is one of several development boards based on the ATmega328. The ATmega by Atmel is the heart of the board. It has:
- 14 digital input/output pins (6 of which can be PWM outputs)
- 6 analog inputs
- a 16MHz crystal oscillator
- a USB connection
- a power jack
- an ICSP header
- a reset button
- a few more other headers

The latest revision of the board, R3, added the SDA (Serial Data) and SCL (Serial Clock) pins (for I2C Inter-Integrated Circuit communication) near the AREF pin (near the USB connection) and two other new pins placed near to the RESET pin (near the power jack). The new IOREF allows shields to adapt to the voltage provided from the Arduino. The second pin is not connected. The R3 also features a stronger RESET circuit and an ATmega16U2 replaced the 8U2 for better USB communication. The SMD (Surface-Mount Device) version of the Arduino Uno is exactly the same as the PTH (Plated Through-Hole) version in terms of functionality. The only difference is the size of the chip and its manufacturing process. The SMD version is less costly to manufacture because surface mount ICs are becoming more and more mainstream but you won’t be able to replace the chip without some hot air. However, the last time I replaced the ATmega was...never.

Enough with the backgrounds and let’s get started.