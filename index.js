const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function (drivers) {
    return drivers.slice().sort(function (first, second) {
      return first.revenue - second.revenue;
    });
  };

const driversByName = function (drivers) {
  return drivers.slice().sort(function (first, second) {
    return first.name.localeCompare(second.name);
  });
};

const totalRevenue = function(drivers) {
  return drivers.reduce(function (total, driver) {
    return driver.revenue + total;
  }, 0);
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
};
