// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  const hometownDrivers = [];

  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      hometownDrivers.push(driver);
    }
  });

  return logDriverNames(hometownDrivers);
}


function driversByRevenue(drivers) {
  const nonDestructiveDrivers = [...drivers];

  return nonDestructiveDrivers.sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}

function driversByName(drivers) {
  const nonDestructiveDrivers = [...drivers];

  return nonDestructiveDrivers.sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  });
}

function totalRevenue(drivers) {
  const driverRevenues = [];

  drivers.forEach(function (driver) {
    driverRevenues.push(driver.revenue);
  });

  return driverRevenues.reduce(function (total, rev) {
    return total + rev;
  });
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
