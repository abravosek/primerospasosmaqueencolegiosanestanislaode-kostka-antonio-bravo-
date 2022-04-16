input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("C5 B A G F E D C ", 1503)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(500)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(500)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
})
