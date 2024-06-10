# Digital Input
This will teach you about digital inputs using buttons and LEDs. This is really important for user input interactions, sensors, and communication!

## Materials
| Component                                   | Image                                                                                          |
|---------------------------------------------|------------------------------------------------------------------------------------------------|
| Breadboard                                  | <img src="/img/docs/UNO-R4-Starter-Kit/breadboard.webp" width="200" height="150" />       |
| Jumper wires                                | <img src="/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp" width="200" height="150" />       |
| Arduino Uno R4 Minima                       | <img src="/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp" width="190" height="150" />               |
| LED (white, red, blue, or green)            | <img src="/img/docs/UNO-R4-Starter-Kit/LED.jpg" width="150" height="100" />                    |
| Resistor (220 ohms for the LED, optional if using internal pull-up resistors for buttons) | <img src="/img/docs/UNO-R4-Starter-Kit/resistors.webp" width="190" height="150" />              |
| 2 push buttons                              | <img src="/img/docs/UNO-R4-Starter-Kit/push-button.webp" width="190" height="150" />            |



## Instructions
1. Make the following connections using the jumper wires:
#### Connections
- LED: Connect the anode (longer leg) to digital pin 5 and the cathode (shorter leg) to ground through a 220-ohm resistor.
- Button A: Connect one leg to digital pin 9 and the other leg to ground.
- Button B: Connect one leg to digital pin 8 and the other leg to ground.
<img src="/img/docs/UNO-R4-Starter-Kit/Digital-Input/Digital-Input.png" width="300" height="300" />

2. Once wired, upload the following code to your Arduino IDE:
```cpp
int ledPin = 5;
int buttonApin = 9;
int buttonBpin = 8;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonApin, INPUT_PULLUP);  
  pinMode(buttonBpin, INPUT_PULLUP);  
}

void loop() {
  if (digitalRead(buttonApin) == LOW) {
    digitalWrite(ledPin, HIGH);
    Serial.println("ON");
  } else if (digitalRead(buttonBpin) == LOW) {
    digitalWrite(ledPin, LOW);
    Serial.println("OFF");
  }
}
```
3. Test! Play around with the buttons and customize the digital inputs.

