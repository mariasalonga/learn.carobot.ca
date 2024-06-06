---
title: RFID/NFC Card Reader Kit

sidebar_position: 11
---

# How to use The RFID/NFC Card Reader Kit

The NFC controller is based on a collection of microcontrollers that allow for contactless communication of around 13.56 MHz. The batteryless and powerless NFC tags and cards send radio waves that activate the antenna of the receiving device. This device only works around a short distance of around 4 inches. 

![](/img/docs/product_guide/2072(1).jpg)

## How it works
The RFID sends radio waves to the active tags, which then send radio waves back to the antenna of the RFID, where the data from the NFC tags and cards are received.

![](/img/docs/product_guide/2072(2).jpg) ![](/img/docs/product_guide/2072(3).jpg) 

## Wiring

* **GND** pin to ground 
* **VCC** pin to 5V
* **SDA** pin to 10
* **SCL** pin to 11

![](/img/docs/product_guide/2072(4).jpg) 

## Parts
* [RFID/NFC Card Reader Kit (13.56MHz, PN532, Module + Card + Key Chain)](https://www.canadarobotix.com/products/2072)
* [Diffused 10mm LED (Blue)](https://www.canadarobotix.com/products/1956)
* [220 Ohm Carbon Film Resistor](https://www.canadarobotix.com/products/1770)
* [Arduino Uno R3](https://www.canadarobotix.com/products/60)
* [BreadBoard](https://www.canadarobotix.com/products/223)
* [Jumper wires](https://www.canadarobotix.com/products/922)
* [Arduino IDE](https://www.arduino.cc/en/software)


## Wiring Guide 

* Use the provided 4 pin, right angled male header, and solder it to the GND, VCC, SDA and SCL pins
* Now connect each pin to its appropriate locations on the Arduino board (check our wiring) 
* Connect the positive led of the LED to the resistor, and then the resistor to pin 13 on the Arduino and connect the negative led pin to ground
* Follow the provided code and watch the LED light up when it detects a card!!

![](/img/docs/product_guide/2072(5).jpg) 

<!-- ![](/img/docs/product_guide/1124(6).jpg) -->

## Programming
<!-- ![](/img/docs/product_guide/2290(4).jpg) -->

The following code demonstrates how read the RFID and NFC cards or keys and receive the ID number.

**Step 1:** Include the libraries needed for this program. You can down load the zip files from onlien and add the zip files to 
the library under **Sketech** and then under **Include Library**.

```c
#include <SoftwareSerial.h>
#include <PN532_SWHSU.h>
#include <PN532.h>
```

**Step 2:** Create objects for **SoftwareSerial**, **PN532_SWHSU** and **PN532**. 

```c
SoftwareSerial SWSerial( 10, 11 ); // RX, TX
PN532_SWHSU pn532swhsu( SWSerial );
PN532 nfc( pn532swhsu );
```

**Step 3:** Set the following varibales to store **data** and to store the **pin number** of the LED. 

```c
int ledPin = 13; 


void setup(void) {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  nfc.begin();
  uint32_t versiondata = nfc.getFirmwareVersion();
```

**Step 4:** Creating an if statement to reconize whether any data was found from the scan, and whether any scan was recieved.
```c
if (! versiondata) {
    Serial.print("Didn't Find PN53x Module");
    while (1); // Halt
  }

  // Got valid data, print it out!
  // Configure board to read RFID tags
  nfc.SAMConfig();
  Serial.println("Waiting for an ISO14443A Card ...");
}
```

**Step 5:** Next, we will create an array to store the card or key ID from the scan. We will also store the length of the ID if the scane was successful.
```c
void loop(void) {

  boolean success;
  uint8_t uid[] = { 0, 0, 0, 0, 0, 0, 0 };  // Buffer to store the returned UID
  uint8_t uidLength;                       // Length of the UID (4 or 7 bytes depending on ISO14443A card type)
  success = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A, &uid[0], &uidLength);

```

**Step 6:** Then, when we are sure that the scan was successful, we will load the array up with the digits of the ID.
```c
if (success) {
    Serial.println("Found A Card!");
    digitalWrite(ledPin, HIGH);
    Serial.print("UID Length: ");Serial.print(uidLength, DEC);Serial.println(" bytes");
    Serial.print("UID Value: ");
```

**Step 7:** Finally, we can print out the ID from the scaned card or key.
```c
    for (uint8_t i=0; i < uidLength; i++) {
      Serial.print(" ");Serial.print(uid[i], DEC);
    }
    Serial.println("");
    // 2 second halt
    delay(1000);
    digitalWrite(ledPin, LOW);
  }
}
```

## Full Code

```c
#include <SoftwareSerial.h>
#include <PN532_SWHSU.h>
#include <PN532.h>
SoftwareSerial SWSerial( 10, 11 ); // RX, TX
PN532_SWHSU pn532swhsu( SWSerial );
PN532 nfc( pn532swhsu );

int ledPin = 13; 


void setup(void) {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  nfc.begin();
  uint32_t versiondata = nfc.getFirmwareVersion();
  if (! versiondata) {
    Serial.print("Didn't Find PN53x Module");
    while (1); // Halt
  }

  // Got valid data, print it out!
  // Configure board to read RFID tags
  nfc.SAMConfig();
  Serial.println("Waiting for an ISO14443A Card ...");
}

void loop(void) {

  boolean success;
  uint8_t uid[] = { 0, 0, 0, 0, 0, 0, 0 };  // Buffer to store the returned UID
  uint8_t uidLength;                       // Length of the UID (4 or 7 bytes depending on ISO14443A card type)
  success = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A, &uid[0], &uidLength);

  if (success) {
    Serial.println("Found A Card!");
    digitalWrite(ledPin, HIGH);
    Serial.print("UID Length: ");Serial.print(uidLength, DEC);Serial.println(" bytes");
    Serial.print("UID Value: ");

    for (uint8_t i=0; i < uidLength; i++) {
      Serial.print(" ");Serial.print(uid[i], DEC);
    }

    Serial.println("");
    // 2 second halt
    delay(1000);
    digitalWrite(ledPin, LOW);
  }


}
```

## Output
Serial Monitor will display the ID number that is received from the Card or key that was scaned.

![](/img/docs/product_guide/2072(6).jpg)  ![](/img/docs/product_guide/2072(7).jpg) 

<!-- ![](/img/docs/product_guide/1072_01.gif)
![](/img/docs/product_guide/1072_04.png) -->