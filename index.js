// returns the name of all drivers using forEach method
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver){
    console.log(driver.name);
  });
};

// returns the name of drivers whose hometown is equal to location provided, using forEach
const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver){
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
};

// returns the new array containing the names of drivers according to decreasing order of revenue.
const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
      return driver1.revenue - driver2.revenue;
  });
};

// returns the new array conatining names of drivers alphabetically
const driversByName = function ( drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  })
}

// returns the totalRevenue of all drivers.
const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, driver) {
    return total + driver.revenue;
  }, 0);
};

// returns the average revenue of all drivers.
const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}
