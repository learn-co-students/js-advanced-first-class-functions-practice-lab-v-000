// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, homeLocation){
  drivers.forEach(function(driver) {
    if (driver.hometown === homeLocation){
      console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers) {
  const driversCopy = [...drivers];
  const sortedDrivers = driversCopy.sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue;
  })
  return sortedDrivers;
}

function driversByName(drivers){
  const driversCopy = [...drivers];
  const driversName = driversCopy.sort(function(driver1, driver2){
    return driver1.name.localeCompare(driver2.name);
  })
  return driversName;
}

function totalRevenue(drivers){
  const totalDriversRevenue = drivers.reduce(function(agg, driver){
    return agg + driver.revenue;
  }, 0)
  return totalDriversRevenue;
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length;
}
