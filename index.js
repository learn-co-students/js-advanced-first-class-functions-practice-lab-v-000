// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  })
}

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if(driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

const driversByRevenue = function (drivers) {
  const driversCopy = drivers.slice()
  const sortedByRevenue = driversCopy.sort(function (a, b) {
    return a.revenue - b.revenue;
  })
  return sortedByRevenue;
}

const driversByName = function (drivers) {
  const driversCopy = drivers.slice()
  return driversCopy.sort(function (a,b) {
    return a.name.localeCompare(b.name);
  })
}

const totalRevenue = function (drivers) {
  const reduceTotalRevenue = function (agg, el, i, drivers) {
    return agg + el.revenue;
  }
  return drivers.reduce(reduceTotalRevenue, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers)/drivers.length
}
