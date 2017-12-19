function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, htown) {
  drivers.forEach(function(driver) {
    if (driver.hometown == htown) {
      console.log(driver.name);
    } 
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (driverA, driverB) {
    return driverA.revenue - driverB.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function(driverA, driverB) {
    return driverA.name.localeCompare(driverB.name);
  }); 
}

function totalRevenue(drivers) {
  return sumTotal = drivers.reduce(function(acc, element) {
    return acc + element.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  let averageRevenue = drivers.reduce(function(acc, element) {
    return acc + element.revenue;
  }, 0);

  return averageRevenue / drivers.length;
}