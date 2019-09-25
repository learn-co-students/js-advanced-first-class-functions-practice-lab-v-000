// Code your solution in this file!
function logDriverNames (drivers) {
  drivers.forEach(function (driver) {console.log(driver.name);});
}

function logDriversByHometown (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (hometown === driver.hometown) {
      console.log(driver.name);
    }
  });
}

const revenueSorter = function (driver1, driver2) {
  return driver1.revenue - driver2.revenue;
}

function driversByRevenue (drivers) {
  const sortedDrivers = [...drivers];
  return sortedDrivers.sort(revenueSorter);
}

const nameSorter = function (driver1, driver2) {
  return driver1.name.localeCompare(driver2.name);
}

function driversByName (drivers) {
  const sortedDrivers = [...drivers];
  return sortedDrivers.sort(nameSorter);
}

const revenueTotaler = function (aggregateRevenue, driver) {return aggregateRevenue += driver.revenue};

function totalRevenue (drivers) {
  return drivers.reduce(revenueTotaler, 0);
}

function averageRevenue (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
