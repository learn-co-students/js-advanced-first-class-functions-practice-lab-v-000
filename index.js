// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (el, i, arr) {
    console.log(el.name);
  });
};

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (el, i, arr) {
    if (el.hometown === hometown) {
      console.log(el.name);
    }
  });
};

const driversByRevenue = function (drivers) {
  let newDrivers = [...drivers];
  return newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
};

const driversByName = function (drivers) {
  let newDrivers = [...drivers];
  return newDrivers.sort(function (a,b) {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, driver) {
    return total + driver.revenue;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
