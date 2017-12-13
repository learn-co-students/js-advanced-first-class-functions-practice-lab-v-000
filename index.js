// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, hometown) {
  return drivers.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log (driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  const newDrivers = drivers.slice();
  return newDrivers.sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}

function driversByName(drivers) {
  const newDrivers = drivers.slice();
  return newDrivers.sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function(total, driver) {
    return total + driver.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
