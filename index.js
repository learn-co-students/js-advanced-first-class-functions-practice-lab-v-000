const logDriverNames = function(drivers) {
  drivers.forEach(driver => console.log(driver.name));
};

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach((driver) => {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(drivers) {
  return drivers.slice()
    .sort((driverOne, driverTwo) => {
      return driverOne.revenue - driverTwo.revenue;
    });
};

const driversByName = function(drivers) {
  return drivers.slice()
    .sort((driverOne, driverTwo) => {
      return driverOne.name.localeCompare(driverTwo.name);
    });
};

const totalRevenue = function(drivers) {
  return drivers.reduce((total, currentDriver) => {
    return total + currentDriver.revenue;
  }, 0);
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
};
