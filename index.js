// Code your solution in this file!

function logDriverNames(drivers) {
    drivers.map(driver => console.log(driver['name']));
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers, revenue) {
  const comparator = function(a, b) {
    return a.revenue - b.revenue;
  };
  const newDrivers = drivers.map(function (driver) {return driver;
  });
  return newDrivers.sort(comparator);
}

function driversByName(drivers) {
  const newDriver = drivers.map(function (driver) {return driver;
  });
  return newDriver.sort(function (first, second) {
    return first.name.localeCompare(second.name);
  });
}

const totalRevenue = function(drivers) {
  return drivers.reduce(function (totalRevenue, driver) {
    return driver.revenue + totalRevenue;
  }, 0);
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}
