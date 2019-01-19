function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, town) {
  const match = drivers.filter(function(driver) {
    return driver.hometown === town;
  });
  logDriverNames(match);
}

function driversByRevenue(drivers) {
  const copy = drivers.slice();
  const driver_revenue = copy.sort(function(d1, d2) {
    return d1.revenue - d2.revenue;
  });
  return driver_revenue
}

function driversByName(drivers) {
  const compare = drivers.slice();
  return compare.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  const driverRev = drivers.slice();
  const total = function (agg, el, i, drivers){
    return agg + el.revenue;
  }
  return driverRev.reduce(total, 0);
}

function averageRevenue(drivers) {
  const copy = drivers.slice();
  return totalRevenue(drivers) / copy.length;
}
