---
title: AM2320 Temperature and Humidity Sensor
sidebar_position: 1
---

# Using the AM2320 Temperature and Humidity Sensor with ESP-Wroom 32

## Introduction
In this tutorial, you will learn how to use an AM2320 temperature and humidity sensor with an ESP32 board. The AM2320 is a simple to use, high-performance sensor that can measure temperature and humidity over a long distance up to 20 meters. It has high accuracy and stability and can be used in various applications such as HVAC, dehumidifiers, weather stations, home appliances, etc. The sensor communicates with the ESP32 using either a single-wire or an I2C interface.

<a href="/img/docs/product_guide/0000.jpeg"><img 
src="/img/docs/product_guide/0343-Temperature-Sensor-0002.jpg" alt="Wiring Diagram" width="50%" height="100%" /></a>

## Materials
To follow this tutorial, you will need the following materials:

- [ESP WROOM 32](https://www.canadarobotix.com/products/2594)
- [AM2320 Temperature Sensor](https://www.canadarobotix.com/products/2873)
- [BreadBoard](https://www.canadarobotix.com/products/223)
- [Jumper wires](https://www.canadarobotix.com/products/922)
- [Arduino IDE](https://www.arduino.cc/en/software)

## Wiring and Setup
The wiring and setup of the AM2320 sensor and the ESP32 board depend on the communication mode you choose: single-wire or I2C. In this tutorial, we will use the I2C mode, which requires two resistors as pull-up for the SDA and SCL lines²³. The wiring diagram is shown below:


<a href="/img/docs/product_guide/0000.jpeg"><img src="/img/docs/product_guide/0343-Temperature-Sensor-0001.jpg" alt="Wiring Diagram" width="70%" height="100%" /></a>


Below are the pinouts for each module:

- [AM2320 Pinout](http://localhost:3000/img/docs/product_guide/AM2320.jpg)
- [ESP32 Pinout](http://localhost:3000/img/docs/product_guide/esp.jpg)

### Step 1: Wiring Connections 

The AM2320 temperature sensor is connected to an ESP-WROOM-32 microcontroller using the following pin configuration:

| AM2320 Temperature Sensor | ESP-WROOM-32 Pin |
|--------------------------|------------------|
| VCC | 3.3V |
| GND | GND |
| SDA |  GPIO21 (SDA) |
| SCL | GPIO22 (SCL) |

To set up the Arduino IDE for the ESP32 board, you need to follow these steps:

### Step 2: Install Board

In order to interact with the ESP Wroom 32 Using the Arduino IDE, you must install the following board:

- ESP32 By Espressif (Within IDE)

Click [here](https://support.arduino.cc/hc/en-us/articles/5145457742236-Add-libraries-to-Arduino-IDE) for instructions how to install boards within the arduino application.

### Step 3: Install Libraries

  The libraries that are used are:
- [Adafruit_Sensor](https://github.com/adafruit/Adafruit_Sensor) (ZIP file, Unavailable Within IDE)
- Adafruit AM2320 Sensor Library (Within IDE)

Click [here](https://support.arduino.cc/hc/en-us/articles/5145457742236-Add-libraries-to-Arduino-IDE) for instructions to install libraries within the arudino application, and [here](https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries)
 to add library through ZIP file.

## Full Code
The full code for reading temperature and humidity from the AM2320 sensor and printing them to the serial monitor is shown below. You can copy and paste it into your Arduino IDE and upload it to your ESP32 board.

```c
#include "Adafruit_Sensor.h"
#include "Adafruit_AM2320.h"

Adafruit_AM2320 am2320 = Adafruit_AM2320();

void setup() {
  Serial.begin(9600);
  while (!Serial) {
    delay(10); // hang out until serial port opens
  }

  am2320.begin();
}

void loop() {
  Serial.print("Temp: ");
  Serial.print(am2320.readTemperature());
  Serial.print(" C");
  Serial.print("\t\t");
  Serial.print("Humidity: ");
  Serial.print(am2320.readHumidity());
  Serial.println(" \%");

  delay(2000);
}
```

## Programming & Logic
Let's go through the logic of the code line by line:

1. These lines include the necessary libraries for using the Adafruit sensor and AM2320 temperature and humidity sensor.

```arduino
#include "Adafruit_Sensor.h"
#include "Adafruit_AM2320.h"
```

2. Here, an instance of the Adafruit_AM2320 class is created and named am2320. This object will be used to interact with the sensor.

```arduino
Adafruit_AM2320 am2320 = Adafruit_AM2320();
```

3. The setup() function is called once at the start of the program. In this function:

- Serial.begin(9600); initializes the serial communication with a baud rate of 9600 bits per second.
- The while loop is used to wait until the serial port is opened before proceeding.
- am2320.begin(); initializes the AM2320 sensor.

```arduino
void setup() {
  Serial.begin(9600);
  while (!Serial) {
    delay(10); // hang out until serial port opens
  }

  am2320.begin();
}

```

4. The loop() function is called repeatedly after the setup() function. In this function:

- Serial.print("Temp: "); and Serial.print("Humidity: "); are used to print descriptive labels for the temperature and humidity readings.

- Serial.print(am2320.readTemperature()); and Serial.print(am2320.readHumidity()); retrieve the temperature and humidity readings from the AM2320 sensor, respectively, and print them using the Serial.print() function.
- Serial.print(" C"); and Serial.println(" \%"); are used to print the units of temperature (Celsius) and humidity (%), respectively.

- delay(2000); pauses the program for 2000 milliseconds (2 seconds) before repeating the loop.

```arduino
void loop() {
  Serial.print("Temp: ");
  Serial.print(am2320.readTemperature());
  Serial.print(" C");
  Serial.print("\t\t");
  Serial.print("Humidity: ");
  Serial.print(am2320.readHumidity());
  Serial.println(" \%");

  delay(2000);
}
```

## Troubleshooting 

### Hardware Tips
1. Make sure the AM2320 sensor is properly connected to your Arduino board. Double-check the wiring to ensure the correct pins are connected between the sensor and the Arduino.

2. Ensure that your Arduino board has the necessary I2C communication capabilities. Most Arduino boards have built-in I2C support, but if you're using a different board or module, make sure it supports I2C communication.

3. Provide stable and regulated power supply to the Arduino board and the sensor. Fluctuations in power can affect the sensor readings and the stability of the communication.

### Software Tips
1. Confirm that you have installed the required libraries, namely `Wire` and `AM2320`, in your Arduino IDE. You can install them by going to "Sketch" -> "Include Library" -> "Manage Libraries" and searching for the library names.

2. Check if you have the correct versions of the libraries installed. Incompatibilities between library versions can cause errors or unexpected behavior.

3. Before uploading the code to your Arduino board, ensure that the correct board and port are selected in the Arduino IDE under "Tools" -> "Board" and "Tools" -> "Port," respectively.

4. If you encounter issues with the sensor readings or communication, consider adding additional debugging statements to the code to print intermediate values or error codes. This can help you identify the problem more effectively.

5. If you plan to use the code in a larger project, consider implementing error handling and recovery mechanisms in case of sensor failures or communication errors. This could involve retrying the sensor reading, implementing timeouts, or providing feedback to the user.

## Output

If everything works as expected, you should see something like this on your serial monitor :

```c
Temp: 25.3 C		Humidity: 54.8 %
Temp: 25.4 C		Humidity: 54.7 %
Temp: 25.5 C		Humidity: 54.6 %
Temp: 25.4 C		Humidity: 54.5 %

...
```
<a href="/img/docs/product_guide/0000.jpeg"><img src="/img/docs/product_guide/0343-Temperature-Sensor-0002.jpg" alt="Wiring Diagram" width="50%" height="100%" /></a>

## Conclusion

In this guide, you learned how to use an AM2320 temperature and humidity sensor with an ESP32 board in I2C mode. You learned how to wire and set up the sensor and the board, how to write and upload code to read data from the sensor, how to explain the programming logic of the code, how to troubleshoot potential issues, and how to view the output on the serial monitor. You can use this knowledge to create your own projects that involve temperature and humidity sensing with ESP32