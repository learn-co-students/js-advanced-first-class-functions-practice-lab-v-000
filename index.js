// Code your solution in this file!

const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown){
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(drivers) {
  const newDrivers = [...drivers]
  newDrivers.sort(function(driver1, driver2) {
    return driver1.revenue - driver2.revenue
  });
  return newDrivers
};

const driversByName = function(drivers) {
  newDrivers = [...drivers]
  newDrivers.sort(function(driver1, driver2) {
    return driver1.name.localeCompare(driver2.name)
  });
  return newDrivers
};

const totalRevenue = function(drivers) {
  return drivers.reduce(function(total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
};
