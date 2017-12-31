// Code your solution in this file!
const logDriverNames = function (drivers) {
  for (const driver of drivers) {
  console.log(driver.name);
  }
};

const logDriversByHometown = function (drivers, selected_hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === selected_hometown) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function (drivers)  {
  const driversCopy = drivers.slice();
  return driversCopy.sort(function(a,b) {
    return a.revenue - b.revenue;
  });
};

const driversByName = function (drivers) {
  const driversCopy = drivers.slice();
  return driversCopy.sort(function(a,b) {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers)/drivers.length;
};
