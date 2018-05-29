function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, hometown) {
  logDriverNames(drivers.filter(driver => driver.hometown === hometown))
}

function driversByRevenue(drivers) {
  return drivers.slice().sort((a, b) => a.revenue - b.revenue)
}

function driversByName(drivers) {
  return drivers.slice().sort((a, b) => a.name.localeCompare(b.name))
}

function totalRevenue(drivers) {
  return drivers.reduce((total, driver) => driver.revenue + total, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
