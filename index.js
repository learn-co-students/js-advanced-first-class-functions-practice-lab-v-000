// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
}

function driversByRevenue(drivers) {
  const newDrivers = drivers.slice()
  const sortDrivers = newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
    return sortDrivers;
}

function driversByName(drivers) {
  const newDrivers = drivers.slice(0)
  const sortDrivers = newDrivers.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
    return sortDrivers;
}

const cb = function (agg, el, i, arr) {
  return agg + el.revenue
}

function totalRevenue(drivers) {
  const tot = function(agg, el, i, arr) {
    return agg + el.revenue;
  }
  return drivers.reduce(tot, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
