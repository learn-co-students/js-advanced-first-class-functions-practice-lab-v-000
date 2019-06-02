// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
;  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name); }
  })
}

function driversByRevenue(drivers) {
  let newDriver = [...drivers]
  let sortedDrivers = newDriver.sort(function(high, low) {
    return high.revenue - low.revenue
  })
  return sortedDrivers
}

function driversByName(drivers) {
  let newDriver = [...drivers];
    
  let sortedDrivers = newDriver.sort(function(a, z) {
    return a.name.localeCompare(z.name);
  })
  return sortedDrivers;
}

const totalRevenue = function(drivers) {
  return drivers.reduce(function(total, driver) {
    return driver.revenue + total;}, 0)}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/ drivers.length;
}




