---
title: Programming
sidebar_position: 3
---

# How to Program Chassis Robot Motors with Arduino
## Development Tools Needed
* [Arduino IDE](https://www.arduino.cc/en/software)

## Programming
**Step 1:** Include the following libraries so we can communicate with the motors of the Chassis. Write out these variable which we will use later on in the program.
```c
#include <Wire.h>
#include <Adafruit_MotorShield.h>

int maxSpeed = 150;
uint8_t i;
```

**Step 2:** Create an object for each motor so that we have an object to reference to when communicating with the motors
```c
// Create the motor shield object 
Adafruit_MotorShield AFMS = Adafruit_MotorShield(); 

// Create an object for each motor with a corresponding 1-4 in the 
// brackets to indicate which motor is which
Adafruit_DCMotor *myMotor1 = AFMS.getMotor(1);
Adafruit_DCMotor *myMotor2 = AFMS.getMotor(2);
Adafruit_DCMotor *myMotor3 = AFMS.getMotor(3);
Adafruit_DCMotor *myMotor4 = AFMS.getMotor(4);
```

**Step 3:** In the step up we will specify the speed and direction the motors of the chassis shall travel in
**NOTE:** the motors that will be the 'back' of the robot will have to set as moving backwards in order for the robot to travel forwards and vice versa to travel backwards.
```c
void setup(){
  Serial.begin(9600); // access to serial monitor
  
  AFMS.begin();  // create with the default frequency 1.6KHz
  
  // Set the speed to start, from 0 (off) to 255 (max speed)
  // Front wheel
  myMotor1->setSpeed(150);
  myMotor1->run(FORWARD);

  // Back wheel
  myMotor2->setSpeed(150);
  myMotor2->run(BACKWARD);

  // Back wheel
  myMotor3->setSpeed(150);
  myMotor3->run(BACKWARD);

  // Front wheel
  myMotor4->setSpeed(150);
  myMotor4->run(FORWARD);

  // turn on motor
  myMotor1->run(RELEASE);
  myMotor2->run(RELEASE);
  myMotor3->run(RELEASE);
  myMotor4->run(RELEASE);
}

```

**Step 4:** Lets create functions for commands we want our robot to perform. Mess around with the value of 'i' in the for loops to change the degree the robot will turn.
```c
//MOVE FORWARDS
void move_forward(){
  //sets direction the motor should move
  myMotor1->run(FORWARD);
  myMotor2->run(BACKWARD);
  myMotor3->run(BACKWARD);
  myMotor4->run(FORWARD);
  // runs motor at set speed
  myMotor1->setSpeed(maxSpeed);  
  myMotor2->setSpeed(maxSpeed);  
  myMotor3->setSpeed(maxSpeed);  
  myMotor4->setSpeed(maxSpeed);  
  
}

//MOVE BACKWARDS
void move_backward(){
  //sets direction the motor should move
  myMotor1->run(BACKWARD);
  myMotor2->run(FORWARD);
  myMotor3->run(FORWARD);
  myMotor4->run(BACKWARD);
  // runs motor at set speed
  myMotor1->setSpeed(maxSpeed);  
  myMotor2->setSpeed(maxSpeed);  
  myMotor3->setSpeed(maxSpeed);  
  myMotor4->setSpeed(maxSpeed);  
}

//TURN RIGHT
void turn_right(){
  myMotor1->run(BACKWARD);
  myMotor2->run(FORWARD);
  myMotor3->run(BACKWARD);
  myMotor4->run(FORWARD);
  // runs motor at set speed
  for (i=0; i<maxSpeed; i++) {
    myMotor1->setSpeed(i);  
    myMotor2->setSpeed(i);  
    myMotor3->setSpeed(i);  
    myMotor4->setSpeed(i);  
    delay(10);
  }
  // runs motor at set speed
  for (i=maxSpeed; i!=0; i--) {
    myMotor1->setSpeed(i);  
    myMotor2->setSpeed(i);  
    myMotor3->setSpeed(i);  
    myMotor4->setSpeed(i);  
    delay(10);
  }
}

//TURN LEFT
void turn_left(){
  myMotor1->run(FORWARD);
  myMotor2->run(BACKWARD);
  myMotor3->run(FORWARD);
  myMotor4->run(BACKWARD);
  // runs motor at set speed
  for (i=0; i<maxSpeed; i++) {
    myMotor1->setSpeed(i);  
    myMotor2->setSpeed(i);  
    myMotor3->setSpeed(i);  
    myMotor4->setSpeed(i);  
    delay(10);
  }
  // runs motor at set speed
  for (i=maxSpeed; i!=0; i--) {
    myMotor1->setSpeed(i);  
    myMotor2->setSpeed(i);  
    myMotor3->setSpeed(i);  
    myMotor4->setSpeed(i);  
    delay(10);
  }
}
```

**Step 5:** Finally, we can now call our functions in the loop() method and have our robot move in a way we want.
```c
/// the robot will move forwards for 10 seconds and them will turn to the right
// then the robot will move backwards for 5 seconds and then turn to the left
void loop(){
  move_forward();
  delay(10000);//will run forwards for 10 seconds
  turn_right();
  move_backward();
  delay(5000); // will run backwards for 5 seconds
  turn_left();
}
```

## Full Code
```c
#include <Wire.h>
#include <Adafruit_MotorShield.h>

int maxSpeed = 150;
uint8_t i;

// Create the motor shield object 
Adafruit_MotorShield AFMS = Adafruit_MotorShield(); 

// Create an object for each motor with a corresponding 1-4 in the 
// brackets to indicate which motor is which
Adafruit_DCMotor *myMotor1 = AFMS.getMotor(1);
Adafruit_DCMotor *myMotor2 = AFMS.getMotor(2);
Adafruit_DCMotor *myMotor3 = AFMS.getMotor(3);
Adafruit_DCMotor *myMotor4 = AFMS.getMotor(4);

void setup(){
  Serial.begin(9600); // access to serial monitor
  
  AFMS.begin();  // create with the default frequency 1.6KHz
  
  // Set the speed to start, from 0 (off) to 255 (max speed)
  // Front wheel
  myMotor1->setSpeed(150);
  myMotor1->run(FORWARD);

  // Back wheel
  myMotor2->setSpeed(150);
  myMotor2->run(BACKWARD);

  // Back wheel
  myMotor3->setSpeed(150);
  myMotor3->run(BACKWARD);

  // Front wheel
  myMotor4->setSpeed(150);
  myMotor4->run(FORWARD);

  // turn on motor
  myMotor1->run(RELEASE);
  myMotor2->run(RELEASE);
  myMotor3->run(RELEASE);
  myMotor4->run(RELEASE);
}

//MOVE FORWARDS
void move_forward(){
  //sets direction the motor should move
  myMotor1->run(FORWARD);
  myMotor2->run(BACKWARD);
  myMotor3->run(BACKWARD);
  myMotor4->run(FORWARD);
  // runs motor at set speed
  myMotor1->setSpeed(maxSpeed);  
  myMotor2->setSpeed(maxSpeed);  
  myMotor3->setSpeed(maxSpeed);  
  myMotor4->setSpeed(maxSpeed);  
  
}

//MOVE BACKWARDS
void move_backward(){
  //sets direction the motor should move
  myMotor1->run(BACKWARD);
  myMotor2->run(FORWARD);
  myMotor3->run(FORWARD);
  myMotor4->run(BACKWARD);
  // runs motor at set speed
  myMotor1->setSpeed(maxSpeed);  
  myMotor2->setSpeed(maxSpeed);  
  myMotor3->setSpeed(maxSpeed);  
  myMotor4->setSpeed(maxSpeed);  
}

//TURN RIGHT
void turn_right(){
  myMotor1->run(BACKWARD);
  myMotor2->run(FORWARD);
  myMotor3->run(BACKWARD);
  myMotor4->run(FORWARD);
  // runs motor at set speed
  for (i=0; i<maxSpeed; i++) {
    myMotor1->setSpeed(i);  
    myMotor2->setSpeed(i);  
    myMotor3->setSpeed(i);  
    myMotor4->setSpeed(i);  
    delay(10);
  }
  // runs motor at set speed
  for (i=maxSpeed; i!=0; i--) {
    myMotor1->setSpeed(i);  
    myMotor2->setSpeed(i);  
    myMotor3->setSpeed(i);  
    myMotor4->setSpeed(i);  
    delay(10);
  }
}

//TURN LEFT
void turn_left(){
  myMotor1->run(FORWARD);
  myMotor2->run(BACKWARD);
  myMotor3->run(FORWARD);
  myMotor4->run(BACKWARD);
  // runs motor at set speed
  for (i=0; i<maxSpeed; i++) {
    myMotor1->setSpeed(i);  
    myMotor2->setSpeed(i);  
    myMotor3->setSpeed(i);  
    myMotor4->setSpeed(i);  
    delay(10);
  }
  // runs motor at set speed
  for (i=maxSpeed; i!=0; i--) {
    myMotor1->setSpeed(i);  
    myMotor2->setSpeed(i);  
    myMotor3->setSpeed(i);  
    myMotor4->setSpeed(i);  
    delay(10);
  }
}


// the robot will move forwards for 10 seconds and them will turn to the right
// then the robot will move backwards for 5 seconds and then turn to the left
void loop(){
  move_forward();
  delay(10000);//will run forwards for 10 seconds
  turn_right();
  move_backward();
  delay(5000); // will run backwards for 5 seconds
  turn_left();
}
```



## Next Steps
Now that you have the basic functions needed to move your robot, you can try on your own to modify the code to make the robot move in different ways.

