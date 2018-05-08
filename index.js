// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
}

const driversByRevenue = function(drivers) {
  const sortedDrivers = drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  });

  return sortedDrivers;
}

const driversByName = function(drivers) {
  const sortedDrivers = drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })

  return sortedDrivers;
}

const totalRevenue = function (drivers) {
  const countRev = function (agg, el, i, arr) {
    return agg + el.revenue;
  }

  return drivers.reduce(countRev, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
