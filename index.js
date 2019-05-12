const logDriverNames = function (drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function (drivers) {
  const revenueSorter = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  };

  sortedDrivers = drivers.slice().sort(revenueSorter);
  return sortedDrivers;
}

const driversByName = function (drivers) {
  const nameSorter = function (driver1, driver2) {
    return driver1['name'].toLowerCase().localeCompare(driver2['name'].toLowerCase());
  };

  sortedDrivers = drivers.slice().sort(nameSorter);
  return sortedDrivers;
}

const totalRevenue = function (drivers) {
  const reducer = function (accumulator, driver) {
    return accumulator + driver.revenue;
  }
  return drivers.reduce(reducer, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
