function logDriverNames(drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  const matchedDrivers = drivers.filter(function (driver){
    return driver.hometown === location;
  })
  matchedDrivers.forEach(function(driver){
    console.log(driver.name)
  })
}

function driversByRevenue(drivers) {
  const sortedDrivers = [...drivers]
  sortedDrivers.sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue
  })
  return sortedDrivers
}

function driversByName(drivers) {
  const sortedDrivers = [...drivers]
  sortedDrivers.sort(function(driver1, driver2) {
    return driver1.name.localeCompare(driver2.name)
  })
  return sortedDrivers
}

function totalRevenue(drivers) {
  const reducedDrivers = [...drivers]
  return reducedDrivers.reduce(function(agg, el) {
    return agg + el.revenue
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
