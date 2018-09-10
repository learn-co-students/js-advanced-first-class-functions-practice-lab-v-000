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

const revenueSorter = function (driver1, driver2) {
  return driver1.revenue - driver2.revenue;
};

const nameSorter = function (driver1, driver2) {
  return driver1.name.localeCompare(driver2.name);
}

function driversByRevenue(drivers) {
  return drivers.concat().sort(revenueSorter);
}

function driversByName(drivers) {
  return drivers.concat().sort(nameSorter);
}

const reduceDriverRevenue = function (agg, el, i, arr) {
  return agg + el.revenue;
}

function totalRevenue(drivers) {
  return drivers.reduce(reduceDriverRevenue, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
