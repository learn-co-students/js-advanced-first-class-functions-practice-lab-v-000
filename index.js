// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

function logDriversByHometown(drivers, hometown) {
	drivers.forEach(function (driver) {
    	if (driver.hometown === hometown) {
      		console.log(driver.name);
    }
  });
};

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (first, second) {
    return first.revenue - second.revenue;
  });
};

function driversByName(drivers) {
  return drivers.slice().sort(function (first, second) {
    return first.name.localeCompare(second.name);
  });
};

function totalRevenue(drivers) {
// first thing reduce does is the first argument and the second argument is the starting point
  return drivers.reduce(function (total, currentDriver) {return currentDriver.revenue + total;}, 0);
};

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
};