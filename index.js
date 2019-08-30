function logDriverNames(drivers) {
  return drivers.forEach(function(driver){
    return console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  return drivers.forEach(function(driver){
    if (driver.hometown === location) {
      return console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  const newDrivers = drivers.slice()
  return newDrivers.sort(function(driverA, driverB){
    return driverA.revenue - driverB.revenue
  })
}
//sort revenue attribute from lowest to highest
function driversByName(drivers) {
  const sortedDrivers = drivers.slice()
  return sortedDrivers.sort(function(driverA, driverB) {
    return driverA.name.localeCompare(driverB.name)
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function (total, driver) {return total + driver.revenue}, 0)
}

function averageRevenue(drivers) {
  return drivers.reduce(function (){ return totalRevenue(drivers)/drivers.length}, 0)
}
