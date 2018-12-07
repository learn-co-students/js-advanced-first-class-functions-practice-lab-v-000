function logDriverNames(drivers) {
  drivers.forEach(function(driver) { console.log(driver.name); });
}

function logDriversByHometown(drivers, location) {
  const selectedDrivers = drivers.filter(function(driver) { return driver.hometown == location; });
  logDriverNames(selectedDrivers);
}

function driversByRevenue(drivers) {
  const driversCopy = [...drivers];
  const revenueSorter = function (driver, driver2) {
    return driver.revenue - driver2.revenue;
  };
  return driversCopy.sort(revenueSorter);
}

function driversByName(drivers) {
  const driversCopy = [...drivers];
  const compare = function(a, b) {
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();
    return name1.localeCompare(name2);
  };
  return driversCopy.sort(compare);
}

function totalRevenue(drivers){
  let total = 0;

  drivers.forEach(function(driver) {
    total += driver.revenue;
  });

  return total;
}

function averageRevenue(drivers) {
  let total = totalRevenue(drivers);
  return total / drivers.length;
}
