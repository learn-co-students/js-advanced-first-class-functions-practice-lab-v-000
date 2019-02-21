function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, location) {
  drivers.filter(function(driver) {
    return driver.hometown === location;
  }).map(function(driver) {
    console.log(driver.name);
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort((a, b) => a.revenue - b.revenue);
}

function driversByName(drivers) {
  return drivers.slice().sort((a, b) => a.name.localeCompare(b.name));
}

function totalRevenue(drivers) {
  return drivers.reduce((total, driver) => total + driver.revenue, 0);
}

let averageRevenue = (drivers) => totalRevenue(drivers) / drivers.length;
