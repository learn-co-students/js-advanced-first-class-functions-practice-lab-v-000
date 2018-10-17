function logDriverNames (drivers) {
  const callback = function (el, i, arr) {
    console.log(el.name);
  }
  drivers.forEach(callback);
}

function logDriversByHometown(drivers, hometown) {

  const callback = function (el, i, arr) {
    if (el.hometown === hometown) {
      console.log(el.name);
    }
  }
  drivers.forEach(callback);
}

function driversByRevenue(drivers) {
  const revenueSorter = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  };
  const newArrayForDrivers = [...drivers];
  return newArrayForDrivers.sort(revenueSorter);
}

function driversByName(drivers) {
  const comparator = function(driver1, driver2) {
      return (driver1.name).localeCompare(driver2.name);
  }
  const newArrayForDrivers = [...drivers];
  return newArrayForDrivers.sort(comparator);
}

function totalRevenue(drivers) {
  const getTotalRevenue = function (agg, el, i, arr) {
    return agg + el.revenue;
  };

  return drivers.reduce(getTotalRevenue, 0);

}

function averageRevenue(drivers) {

  const getTotalRevenue = function (agg, el, i, arr) {
    return agg + el.revenue;
  };

  const totalRevenue = drivers.reduce(getTotalRevenue, 0);
  return totalRevenue/drivers.length;
}
