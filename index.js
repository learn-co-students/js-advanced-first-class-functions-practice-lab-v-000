// Code your solution in this file!

function logDriverNames(drivers) {
  const callback = function(el, i, arr){
    console.log(el.name);
  }
  return drivers.forEach(callback);
}

function logDriversByHometown(drivers, location){
  const callback = function(el, i, arr){
    if (el.hometown === location) {
      console.log(el.name);
    }
  }
  return drivers.forEach(callback);
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
};

function driversByName(drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  });
};

function totalRevenue(drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
