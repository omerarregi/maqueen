maqueen.IR_callbackUser(function ({ myparam: message }) {
    if (message == 17) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 150)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
    if (message == 25) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 150)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 150)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (message == 20) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 150)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (message == 22) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
    if (message == 21) {
        maqueen.motorStopAll()
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
})
