const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      return console.log(driver.name)};
  });
};

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driver, anotherDriver) {
    return driver.revenue - anotherDriver.revenue;
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driver, anotherDriver) {
    return driver["name"].localeCompare(anotherDriver["name"]);
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (lara, tree) {
      return lara + tree.revenue; // HOW DOES IT KNOW THAT lara IS agg AND tree IS el? 
  }, 0);
};
