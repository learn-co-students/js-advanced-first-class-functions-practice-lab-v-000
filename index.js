// Code your solution in this file!


const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown == location) {
    console.log(driver.name);
    }
  });
};



const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
}



const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (accumulator, driver) {
    return accumulator + driver.revenue;
  }, 0);
}


const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}

//averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.

//totalRevenue() — Receives an array of driver objects and returns the sum of the
// revenue earned by each driver.
//averageRevenue() — Receives an array of driver objects and returns the average
// revenue earned by each driver.

//driversByName() — Receives an array of driver objects and returns a new array
// of driver objects sorted by their name attribute from A to Z. Here, you may
// have to use the String.prototype.localeCompare() method.

//Receives an array of driver objects and returns a new array of driver objects
// sorted by their revenue attribute from lowest to highest.
