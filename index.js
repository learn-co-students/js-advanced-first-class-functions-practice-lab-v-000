
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
};

function logDriversByHometown(drivers, location) {
  drivers.filter(function (driver) {
    return driver.hometown === location
  }).map(function (driver) {
    console.log(driver.name)
  })
};

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (x, y) {
    return x.revenue - y.revenue
  })
};

function driversByName(drivers) {
  return drivers.slice().sort(function (x, y) {
    return x.name.localeCompare(y.name)
  })
};

function totalRevenue(drivers) {
  return drivers.reduce(function (total, driver) {
    return total + driver.revenue
  }, 0)
};

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
};