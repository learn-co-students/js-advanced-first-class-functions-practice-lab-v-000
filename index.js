// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function (drivers, location) {
  const hometownDrivers = drivers.filter(function (driver) { return driver.hometown === location });
  return logDriverNames(hometownDrivers);
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(byRevenue);
}

const byRevenue = function (driver1, driver2) {
  return driver1.revenue - driver2.revenue
}

const driversByName = function (drivers) {
  return drivers.slice().sort(byName);
}

const byName = function (driver1, driver2) {
  return driver1.name.localeCompare(driver2.name);
}

const totalRevenue = function (drivers) {
  return drivers.reduce(reduceTotalRevenue, 0)
}

const reduceTotalRevenue = function (agg, el, i, arr) {
  return agg + el.revenue;
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
