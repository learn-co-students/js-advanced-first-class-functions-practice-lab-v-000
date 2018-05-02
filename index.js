const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) { console.log(driver.name)})
}

const logDriversByHometown = function (drivers, location) {
  logDriverNames(drivers.filter(driver => driver.hometown == location))
}

const driversByRevenue = function (drivers) {
  const newDrivers = Object.assign([], drivers)
  return newDrivers.sort(function(a,b){return a.revenue - b.revenue})
}
const driversByName = function (drivers) {
  const newDrivers = Object.assign([], drivers)
  return newDrivers.sort(function(a,b){return a.name.localeCompare(b.name)})
}

const totalRevenue = function (driver) {
  return driver.reduce(function(agg, el){return agg + el.revenue}, 0)
}

const averageRevenue = function (driver) {
  return totalRevenue(driver) / driver.length
}