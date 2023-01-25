function electric(name,type, powerConnection){
  this.name = name,
  this.type = 'electronic device',
  this.powerConnection = powerConnection
}
  electric.prototype.getPower = function(power){
    console.log(`The appliance takes ${power} kW per month`)
  }
  
  function appliances(lowPower,type,wireless){
    this.lowPower = lowPower,
    this.type = 'electronic device',
    this.wireless = wireless
  }

electric.prototype = new electric()

electric.prototype.steps = function () {
  return this.powerConnection ? `Your device is a ${this.name} connected to the socket`: `Your device a ${this.name} is unplugged`;
}

    const hairdryer = new electric('hairdryer', '12'); //создается новый объект 
    console.log(hairdryer.steps('hairdryer'),hairdryer.getPower('12'));

    const screwdriver = new electric('screwdriver','10');
    console.log(screwdriver.steps(),screwdriver.getPower('10'));