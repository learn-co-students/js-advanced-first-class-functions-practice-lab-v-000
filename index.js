// Code your solution in this file!
const logDriverNames = function (drivers) {
    drivers.forEach(function (driver) {
    console.log(driver.name);
    })
};

const logDriversByHometown = function (drivers, location) {
    drivers.forEach((driver) => {
        if (location === driver.hometown) {
        console.log(driver.name)};
    });
};

const driversByRevenue = function (drivers) {
  // console.log(drivers)
  //   const driversRevArray = [];
  return [...drivers].sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
};

const driversByName = function (drivers) {
    
   return [...drivers].sort(function (driverA, driverB) {
        return driverA.name.localeCompare(driverB.name);
    });
};

const totalRevenue = function (drivers) {
     return drivers.reduce(function (accRev, currDriRev) {
         return accRev + currDriRev.revenue;
    }, 0);
    
};

const averageRevenue = function (drivers) {
    return drivers.reduce(function (accRev, currDriRev) {
      return accRev + currDriRev.revenue;
    }, 0) / drivers.length;
};