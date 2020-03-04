// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(d1, d2) {
    return d1.revenue - d2.revenue;
  });
};

const driversByName = function(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
};


const totalRevenue = function(drivers) {
  return drivers.reduce(function (total, currentValue) {
    return currentValue.revenue + total;
  }, 0);
}

const averageRevenue = function(drivers) {
  return drivers.reduce(function (total, currentValue) {
    return currentValue.revenue + total;
  }, 0)/drivers.length;
}
