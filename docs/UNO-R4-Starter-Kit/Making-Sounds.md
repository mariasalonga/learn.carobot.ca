# Making Sounds
Learning how to use a simple buzzer!

## Materials
| Component                                   | Image                                                                                          |
|---------------------------------------------|------------------------------------------------------------------------------------------------|
| Breadboard                                  | <img src="/img/docs/UNO-R4-Starter-Kit/breadboard.webp" width="200" height="150" />       |
| Jumper wires                                | <img src="/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp" width="200" height="150" />       |
| Arduino Uno R4 Minima                       | <img src="/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp" width="190" height="150" />               |
| Buzzer                                      | <img src="/img/docs/UNO-R4-Starter-Kit/Making-Sounds/buzzer.webp" width="150" height="150" /> |


## Instructions

1. Place the buzzer in the middle of the breadboard.

2. Connect the negative terminal to the ground and the postive terminal to pin 12.

<img src="/img/docs/UNO-R4-Starter-Kit/Making-Sounds/wiring-diagram.png" width="250" height="300" />

3. Paste the following code into your Arduino IDE:
```cpp
int buzzer = 12; // the pin of the active buzzer

void setup() {
  pinMode(buzzer, OUTPUT); // initialize the buzzer pin as an output
}

void loop() {
  int sound_duration = 500;
  for (int i = 0; i < 20; i++) {
    // use the if function to gradually shorten the interval of the sound
    if (i < 5) {
      sound_duration = 500;
    } else if (i < 10) {
      sound_duration = 300;
    } else if (i < 20) {
      sound_duration = 100;
    }
    // activate the active buzzer
    digitalWrite(buzzer, HIGH);
    delay(sound_duration); // wait for sound_duration ms
    // deactivate the active buzzer
    digitalWrite(buzzer, LOW);
    delay(sound_duration); // wait for sound_duration ms
  }
  // activate the active buzzer
  digitalWrite(buzzer, HIGH);
  delay(5000); // keep playing sound for 5 seconds
}
```
4. Upload the code and watch the buzzer sound!

