// Code your solution in this file!
const logDriverNames = function(drivers) {
  for (const driver of drivers) {
    console.log(driver.name);
  }
};

const logDriversByHometown = function(drivers, city) {
  const matchingDrivers = drivers.filter(function(driver) {
    return driver.hometown === city;
  });
  matchingDrivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

const driversBy = function(property, drivers) {
  let newDrivers = drivers.slice(0);
  newDrivers.sort( function(driver1, driver2) {
    return driver1[property] > driver2[property];
  });

  return newDrivers;
};

const driversByRevenue = function(drivers) {
  return driversBy('revenue', drivers);
};

const driversByName = function(drivers) {
  return driversBy('name', drivers);
};

const reducingFunc = ((total, driver) => {
  console.log(total, driver.revenue);
  return total + driver.revenue;
}, 0);

const totalRevenue = function(drivers) {
  return drivers.reduce((total, driver) => {
    return total + driver.revenue;
  }, 0);
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / (drivers.length);
};
