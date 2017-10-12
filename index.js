// Code your solution in this file!
function logDriverNames(drivers) {
  const callback = function(element, index, array) {
    console.log(element.name);
  }
  drivers.forEach(callback);
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function (a,b) {
    return a.name.localeCompare(b.name)
  });
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (revenue, driver) {
    return driver.revenue + revenue;
  }, 0);
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
