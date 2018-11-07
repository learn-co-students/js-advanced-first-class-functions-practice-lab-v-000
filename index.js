//logDriverNames()
//logs the name of each driver ‣
//logDriversByHometown()
//logs the name of each driver whose hometown matches the #passed-in argument ‣
//driversByRevenue()
//uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest) ‣
//driversByName()
//uses the sort() method to return a new array of drivers ordered alphabetically by name (A to Z) ‣
//totalRevenue()
//uses the reduce() method to sum the revenue of every driver and return the total ‣
//averageRevenue()
//calculates the average revenue across all drivers
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
