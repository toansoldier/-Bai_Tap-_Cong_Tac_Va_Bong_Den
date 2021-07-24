let electricLamp = new ElectricLamp();
let switchButton = new SwitchButton();

switchButton.connectToLamp(electricLamp);
switchButton.switchOn();
switchButton.switchOff();

switchButton.checkStatus();



