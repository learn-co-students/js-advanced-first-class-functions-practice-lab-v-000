// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}
  
function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })  
}
  
function driversByRevenue(drivers) {
  sortedDrivers = drivers.slice()
  
  return sortedDrivers.sort(function (driverA, driverB) {
    return driverA.revenue - driverB.revenue;
  })
}

function driversByName(drivers) {
  sortedDrivers = drivers.slice()
  
  return sortedDrivers.sort(function (driverA, driverB) {
      return driverA.name.localeCompare(driverB.name);
  })
}


function totalRevenue(drivers) {
  return drivers.reduce(function(total, driver){
    return total + driver.revenue
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/ drivers.length
}
