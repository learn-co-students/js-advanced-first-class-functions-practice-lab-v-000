const logDriverNames = function (drivers) {
  drivers.forEach(function (el, i, arr) {
      console.log(el.name);
  });
}

const logDriversByHometown = function (drivers, location) {
  const filteredDrivers = drivers.filter(function (driver) {
    return driver.hometown === location;
  });

  return logDriverNames(filteredDrivers);
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  })
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = function (drivers) {
  return drivers.reduce(getSumRevenue, 0);
}

const getSumRevenue = function (agg, el, i, arr) {
  return agg + el.revenue;
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
