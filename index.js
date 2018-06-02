// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver) { console.log(driver.name); });
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  const driversCopy = drivers.slice();

  return driversCopy.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  const driversCopy = drivers.slice();

  return driversCopy.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  const revenues = drivers.map(function(driver) { return driver.revenue; });

  return revenues.reduce(function(agg, revenue) {
    return agg + revenue;
  });
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / Object.keys(drivers).length;
}

