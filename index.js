// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, town) {
  drivers.forEach(function(driver){
    if (driver.hometown === town) {
      console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0)
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
