// Code your solution in this file!
function logDriverNames(drivers) {
  const cb = function(driver, i, drivers) {
    console.log(driver.name);
  }
  return drivers.forEach(cb);
}

function logDriversByHometown(drivers, location) {
  const cb = function(driver, i, drivers) {
    if (driver.hometown == location) {
      console.log(driver.name);
    }
  }
  return drivers.forEach(cb);
}

function driversByRevenue(drivers) {
  const newDrivers = drivers.slice();
  const sortedDrivers = newDrivers.sort(function(a, b) {
    return a.revenue - b.revenue
  })
  return sortedDrivers;
}

function driversByName(drivers) {
  const newDrivers = drivers.slice();
  const sortedDrivers = newDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  });
  return sortedDrivers;
}

function totalRevenue(drivers) {
  const cb = function (agg, driver, index, drivers) {
    return agg + driver.revenue;
  };
  return drivers.reduce(cb, 0);
}

function averageRevenue(drivers) {
  const cb = function (agg, driver, index, drivers) {
    return agg + driver.revenue;
  };
  return (drivers.reduce(cb, 0)) / (drivers.length);
}
