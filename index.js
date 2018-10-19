const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    };
  });
}

const driversByRevenue = function(drivers) {
  return (drivers.slice().sort((driverA, driverB) => driverA.revenue - driverB.revenue));
}

const driversByName = function(drivers) {
  return (drivers.slice().sort((driverA, driverB) => driverA.name.localeCompare(driverB.name)));
}

const totalRevenue = function(drivers) {
  return (drivers.reduce((total, driver) => total + driver.revenue, 0));
}

const averageRevenue = function(drivers) {
  return (totalRevenue(drivers) / drivers.length);
}
