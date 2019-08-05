function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  const reduceRevenue = function(agg, el, i, arr) {
    return agg + el.revenue;
  };
  return drivers.reduce(reduceRevenue, 0);
}

function averageRevenue(drivers) {
  const reducedRev = totalRevenue(drivers) / drivers.length;
  return reducedRev;
}
