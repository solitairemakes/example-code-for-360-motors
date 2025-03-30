input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CW, 20)
    basic.pause(1000)
    kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
})
input.onButtonPressed(Button.AB, function () {
    kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
    kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CCW, 20)
    basic.pause(1000)
    kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (sonarswitch == 0) {
        sonarswitch = 1
        basic.showIcon(IconNames.Yes)
    } else {
        sonarswitch = 0
        basic.showIcon(IconNames.No)
    }
    sonarswitch = 1
})
let distance = 0
let sonarswitch = 0
sonarswitch = 0
basic.showIcon(IconNames.Chessboard)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    serial.writeValue("distance", distance)
    if (sonarswitch == 1) {
        if (input.buttonIsPressed(Button.A) && (distance > 15 && distance < 30)) {
            kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CCW, 20)
            basic.pause(1500)
            kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
            basic.showNumber(3)
        } else if (input.buttonIsPressed(Button.A) && (distance >= 7 && distance <= 15)) {
            kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CCW, 20)
            basic.pause(500)
            kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
            basic.showNumber(3)
        }
        basic.showIcon(IconNames.Yes)
    }
})
