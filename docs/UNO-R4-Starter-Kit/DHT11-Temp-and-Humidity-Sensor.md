# DHT11 Temperature and Humidity Sensor
This tutorial will help you learn how ouse the temperature and humidity sensor. 

## Materials
| Component                                   | Image                                                                                          |
|---------------------------------------------|------------------------------------------------------------------------------------------------|
| Breadboard                                  | <img src="/img/docs/UNO-R4-Starter-Kit/breadboard.webp" width="200" height="150" />        |
| Jumper wires                                | <img src="/img/docs/UNO-R4-Starter-Kit/jumper-wires.webp" width="200" height="150" />        |
| Arduino Uno R4 Minima                       | <img src="/img/docs/UNO-R4-Starter-Kit/arduino-r4-minima.webp" width="190" height="150" />        |
| DHT11 Temperature and Humidity Sensor       | <img src="/img/docs/UNO-R4-Starter-Kit/DHT11-Sensor.jpg" width="200" height="200" />                    |

## Instructions

1. Make the following connections to using the dreadboard and jumper wires.
#### Connections
- Vcc to 5V
- Signal to pin 2
- Gnd to GND
<img src="/img/docs/UNO-R4-Starter-Kit/DHT11.png" width="400" height="300" />

2. Download the DHT sensor library by Adafruit on the Arduino library manager.

3. Make sure that the DHT.h file is within the same directory as you main Arduino sketch.

4. In your main Arduino sketch, paste the following code:
```cpp
#include <DHT.h>

#define DHT_SENSOR_PIN 2
#define DHT_SENSOR_TYPE DHT11

DHT dht_sensor(DHT_SENSOR_PIN, DHT_SENSOR_TYPE);

void setup() {
  Serial.begin(9600);
  dht_sensor.begin();
}

void loop() {
  float temperature = dht_sensor.readTemperature();
  float humidity = dht_sensor.readHumidity();

  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.print(" °C, Humidity: ");
  Serial.print(humidity);
  Serial.println(" %");

  delay(2000); // Wait for 2 seconds before reading again
}
```

5. Upload your code to your arduino using a USB-C cable and run it.

6. Test! Open the serial monitor and watch the temperature and humidity vary depending on nearby objects!

