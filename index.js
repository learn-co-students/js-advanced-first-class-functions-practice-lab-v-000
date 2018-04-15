// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  const driversFromTown = drivers.filter(function(driver) {
    return driver.hometown === hometown
  })

  logDriverNames(driversFromTown)
}

function driversByRevenue(drivers) {
  const driversCopy = drivers.slice()
  return driversCopy.sort(function(driver1, driver2) {
    return driver1.revenue - driver2.revenue
  })
}

function driversByName(drivers) {
  const driversCopy = drivers.slice()
  return driversCopy.sort(function(driver1, driver2) {
    return driver1.name > driver2.name
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function(agg, driver) {
    return agg += driver.revenue
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
