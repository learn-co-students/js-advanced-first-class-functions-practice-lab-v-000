const driverNamesCb = function (el, i, arr) {
  console.log(el.name);
}

const logDriverNames = function (drivers) {
  drivers.forEach (driverNamesCb);
}

const logDriversByHometown = function (drivers, location) {
  const driverHometownCb = function (el, i, arr) {
    if (el.hometown === location) {
      console.log (el.name);
    }
  }
  drivers.forEach (driverHometownCb);
}

const driversByRevenue = function (drivers) {
  const driverRevenueSorter = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  }

  const sortedDrivers = [...drivers].sort (driverRevenueSorter);
  return sortedDrivers;
}

const driversByName = function (drivers) {
  const driverNameSorter = function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  }

  const sortedDrivers = [...drivers].sort (driverNameSorter);
  return sortedDrivers;
}

const totalRevenue = function (drivers) {
  const totalPrice = function (agg, el, i, arr) {
    return agg + el.revenue
  }

  return drivers.reduce(totalPrice, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
