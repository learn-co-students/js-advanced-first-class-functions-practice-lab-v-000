// Code your solution in this file!
const logDriverNames = function (drivers) {
    drivers.forEach(function (driverElement) {
      console.log(driverElement.name);
    });
};

const logDriversByHometown = function (drivers, town) {
    drivers.forEach(function (driverElement) {
      if (driverElement.hometown == town) {
        console.log(driverElement.name);          
      }
    });
};


const driversByRevenue = function (drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
      return driverOne.revenue - driverTwo.revenue;
    });
  };

const driversByName = function (drivers) {
return  drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
    });
};


const totalRevenue = function (drivers) {
    return drivers.reduce(genericReduce, 0);
};

const genericReduce = function (total, currentDriver) {
return currentDriver.revenue + total;
}

const averageRevenue = function (drivers) {
    return totalRevenue(drivers) / drivers.length;
}