class SwitchButton {
    lamp;

    connectToLamp(ElectricLamp) {
        this.lamp = ElectricLamp;
    }


    switchOff() {
        this.lamp.turnOff();
    }

    switchOn() {
        this.lamp.turnOn();
    }

    checkStatus() {
        return this.lamp.light();
    }
}
