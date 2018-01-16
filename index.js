// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.map(driver => console.log(driver.name));
}

function logDriversByHometown(drivers, hometown) {
  logDriverNames(drivers.filter(driver => driver.hometown === hometown));
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(revenueSorter);
}

const revenueSorter = function (driver1, driver2) {
  return driver1.revenue - driver2.revenue;
};

function driversByName(drivers) {
  return drivers.slice().sort(nameSorter);
}

const nameSorter = function (driver1, driver2) {
  return driver1.name.localeCompare(driver2.name);
}

function totalRevenue(drivers) {
  return drivers.reduce(revenueAdder, 0);
}

const revenueAdder = function (agg, el) {
  return agg + el.revenue;
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
