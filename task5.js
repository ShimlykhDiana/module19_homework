class Electric {
    constructor(name,powerConnection){
    this.name = name,
    this.type = 'electronic device',
    this.powerConnection = powerConnection
  }
    getPower() {
      console.log(`The appliance takes ${this.powerConnection} kW per month`)
    }
    showKeyProperty() {
        for (let key in this) {
            if (this.hasOwnProperty(key))
                console.log(`${key}: ${this[key]}`)
        }
    }
}
    class Hairdryer extends Electric{
        constructor(name,powerConnection,manifacture){
            super(name,powerConnection),
            this.manifacture = manifacture
        }
    }

    class Screwdriver extends Electric{
        constructor(name,powerConnection,weight) {
            super(name,powerConnection)
            this.weight = weight
        }
    }
//     function appliances(lowPower,type,wireless){
//       this.lowPower = lowPower,
//       this.type = 'electronic device',
//       this.wireless = wireless
//     }
  
//   Electric.prototype = new electric()
  
//   electric.prototype.steps = function () {
//     return this.powerConnection ? `Your device is a ${this.name} connected to the socket`: `Your device a ${this.name} is unplugged`;
//   }
  
      const hairdryer = new Hairdryer('Braun', '12','Germany'); //создается новый объект 
      const screwdriver = new Screwdriver('Xiaomi','10','500g');
    
    
      hairdryer.getPower()
      screwdriver.showKeyProperty()