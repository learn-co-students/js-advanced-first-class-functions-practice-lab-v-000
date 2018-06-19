// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, hometown) {
  logDriverNames(drivers.filter(function (driver) {
    return driver.hometown === hometown;
  }));
}

function driversByRevenue(drivers) {
  return [...drivers].sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}

function driversByName(drivers) {
  return [...drivers].sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function (total, driver) {
    return total + driver.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
