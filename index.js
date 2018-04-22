function logDriverNames(drivers) {
  drivers.forEach( function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.filter( function(driver) {
    return driver.hometown === location;
  }).forEach (function(matchedDriver) {
    console.log(matchedDriver.name);
  });
}

function driversByRevenue(drivers) {
  const toSortDrivers = drivers.slice();
  return toSortDrivers.sort( function(a,b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  const toSortDrivers = drivers.slice();
  return toSortDrivers.sort ( function(a,b) {
    aName = a.name;
    bName = b.name;
    return aName.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce (function(sum, driver){
    return sum + driver.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
