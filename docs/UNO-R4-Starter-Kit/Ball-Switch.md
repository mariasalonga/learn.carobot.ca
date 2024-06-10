# Ball Switch
This tutorial will teach you to how to use "pull-up" to turn on an LED using a button.

## Materials
| Component                                   | Image                                                                                          |
|---------------------------------------------|------------------------------------------------------------------------------------------------|
| Breadboard                                  | <img src="/img/docs/UNO-R4-Starter-Kit/breadboard.webp" width="200" height="150" />       |
| Jumper wires                                | <img src="/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp" width="200" height="150" />       |
| Arduino Uno R4 Minima                       | <img src="/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp" width="190" height="150" />               |
| LED (white, red, blue, or green)            | <img src="/img/docs/UNO-R4-Starter-Kit/LED.jpg" width="150" height="100" />                    |
| Resistor (220 ohms for the LED, optional if using internal pull-up resistors for buttons) | <img src="/img/docs/UNO-R4-Starter-Kit/resistors.webp" width="190" height="150" />              |
| Tilt Sensor (ball switch)                   | <img src="/img/docs/UNO-R4-Starter-Kit/ball-switch.webp" width="190" height="150" />            |

## Instructions
1. Make the following connections using the breadboard and jumper wires:
- LED positive terminal to pin 13
- LED negative terminal to GND
Use male to female jumper wires for the following connections.
- One leg of the ball switch to pin 2
- The other leg of the ball switch to GND
<img src="/img/docs/UNO-R4-Starter-Kit/Ball-Switch.png" width="330" height="300" />

2. Paste the following code into the Arduino IDE.
```cpp
const int ledPin = 13; // the LED attached to pin 13
const int switchPin = 2; // the ball switch attached to pin 2

void setup() {
  pinMode(ledPin, OUTPUT); // initialize the ledPin as an output
  pinMode(switchPin, INPUT_PULLUP); // set pin 2 as an input with an internal pull-up resistor
}

void loop() {
  int switchState = digitalRead(switchPin); // read the state of the ball switch
  if (switchState == HIGH) {
    digitalWrite(ledPin, LOW); // turn the LED off if the switch is not tilted
  } else {
    digitalWrite(ledPin, HIGH); // turn the LED on if the switch is tilted
  }
}

```

3. Upload the code to the arduino and run the code.

4. Test the code! Tilt the ball switch and watch the LED turn off!