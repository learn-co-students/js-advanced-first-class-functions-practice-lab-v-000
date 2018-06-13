const callback = function (el, i, arr) {
  console.log(el.name);
}

function logDriverNames(driver) {
  driver.forEach(callback)
}

const logDriversByHometown = function (driver, hometown) {
  driver.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  })
}

const driversByRevenue = function (driver) {
  return driver.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  })
}

const driversByName = function (driver) {
  return driver.slice().sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (totalRev, driver) {
    return totalRev + driver.revenue;
  }, 0);
};

const averageRevenue= function (drivers) {
  return (totalRevenue(drivers))/drivers.length;
};
