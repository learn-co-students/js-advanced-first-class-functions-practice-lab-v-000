// Code your solution in this file!

const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(driver) {
    if(driver.hometown === location) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(drivers) {
  return drivers.slice().sort((a, b) => a.revenue - b.revenue);
};

const driversByName = function(drivers) {
  return drivers.slice().sort((a, b) => a.name.localeCompare(b.name));
};

const totalRevenue = function(drivers) {
  return drivers.reduce(function(agg, driver) {
    return agg + driver.revenue;
  }, 0);
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
};
