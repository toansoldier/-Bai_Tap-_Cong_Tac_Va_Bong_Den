class ElectricLamp {

    turnOff() {
        this.status = false;
    }

    turnOn() {
        this.status = true;
    }

    light() {
        if (this.status) {
            alert("bong den sang");
        } else {
            alert("bong den tat");
        }
    }
}