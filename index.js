const logDriverNames = function(driversArray) {
  driversArray.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(driversArray, hometown) {
  driversArray.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function(driversArray) {
  // add .slice so that sort is non-destructive
  return driversArray.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
}

const driversByName = function(driversArray) {
  return driversArray.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
}

const totalRevenue = function (driversArray) {
  return driversArray.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0); // 0 is the second argument provided to reduce, the starting value that we are adding on to
};

const averageRevenue = function (driversArray) {
  return totalRevenue(driversArray) / driversArray.length;
};