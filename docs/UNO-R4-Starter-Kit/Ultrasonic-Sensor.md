# Ultrasonic Sensor
This tutorial will teach you how to use the ultrasonic sensor. The ultrasonic sensor calculates the distance of an object based on the reflected sound waves. Ultrasonic sensors have countless applications like obstacle detection, proximity sensing, and distance measurement.

## Materials
| Component                                   | Image                                                                                          |
|---------------------------------------------|------------------------------------------------------------------------------------------------|
| Breadboard                                  | <img src="/img/docs/UNO-R4-Starter-Kit/breadboard.webp" width="200" height="150" />        |
| Jumper wires                                | <img src="/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp" width="200" height="150" />        |
| Arduino Uno R4 Minima                       | <img src="/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp" width="190" height="150" />        |
| HC-SRO4 Ultrasonic Sensor                   | <img src="/img/docs/UNO-R4-Starter-Kit/ultrasonic-sensor.webp" width="200" height="200" />                    |

## Instructions

1. Make the following connections with the breadboard and jumper wires.
#### Connections
- Vcc on the HC-SR04 to 5V
- Trig to pin 12
- Echo to pin 13
- Gnd to GND
<img src="/img/docs/UNO-R4-Starter-Kit/ultrasonic-sensor.png" width="600" height="350" />

2. Create a new file in the same folder as your main Arduino sketch to contain the SR04 sensor code. Paste the following code into the new file and save it as "SR04.h":
```cpp
#ifndef SR04_H
#define SR04_H

#if defined(ARDUINO) && ARDUINO >= 100
	#include "Arduino.h"
#else
	#include "WProgram.h"
#endif

#include <inttypes.h>

#define PULSE_TIMEOUT 150000L	// 100ms
#define DEFAULT_DELAY 10
#define DEFAULT_PINGS 5

class SR04 {
public:
	SR04(int echoPin, int triggerPin);
	long Distance();
	long DistanceAvg(int wait=DEFAULT_DELAY, int count=DEFAULT_PINGS);
	void Ping();
	long getDistance();

private:
	long MicrosecondsToCentimeter(long duration);
	long _currentDistance;
	int _echoPin, _triggerPin;
	long _duration, _distance;
	bool _autoMode;
};

#endif
```
3. In your main Arduino sketch, paste the following code to include the SR04 library and create an instance of the SR04 class:
```cpp
#include "SR04.h"

#define TRIG_PIN 12
#define ECHO_PIN 11

SR04 sr04(ECHO_PIN, TRIG_PIN);
long distance;

void setup() {
   Serial.begin(9600);
   delay(1000);
}

void loop() {
   distance = sr04.Distance();
   Serial.print(distance);
   Serial.println(" cm");
   delay(10);
}
```

4. Upload the code to your Arduino board.

5. Open the Arduino IDE's serial monitor to view the distance readings from the SR04 sensor as you move objects closer or farther away from it.