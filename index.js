// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    return console.log(driver.name);
  });
}

function logDriversByHometown(drivers, loc) {
  drivers.forEach(function (driver) {
    if (driver.hometown === loc) {
      return console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}