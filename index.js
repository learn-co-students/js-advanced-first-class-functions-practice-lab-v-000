function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (first, second) {
    return first.revenue - second.revenue;
  });
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (first, second) {
    return first.name.localeCompare(second.name);
  });
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (totalRevenue, driver) {
    return driver.revenue + totalRevenue;
  }, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}

