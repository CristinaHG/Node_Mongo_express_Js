'use strict'

var house={
    windows: 2,
    numberOfWindows: function () {
        console.log('house has '+this.windows+ ' windows' )
    }
}

function Car() {
    this.wheels=4
    this.numberOfWheels=function () {
        console.log('car has '+this.wheels+ ' wheels')
    }

}

house.numberOfWindows()

setTimeout(house.numberOfWindows.bind(house),1000)

var car=new Car()
car.numberOfWheels()
setTimeout(car.numberOfWheels.bind(car),1000)

