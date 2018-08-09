// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(driver => console.log(driver.name));
};

const logDriversByHometown = function (drivers, location) {
  drivers.filter(function (driver) {
    return driver.hometown === location;
  })
  .forEach(driver => console.log(driver.name));
};

const revSorter = function (a, b){
  return a.revenue - b.revenue;
};

const driversByRevenue = function (drivers) {
  const newList = [...drivers];
  return newList.sort(revSorter);
};

const  driversByName = function (drivers) {
  const newList = [...drivers];
  return newList.sort(function (a, b) {
    return a['name'].localeCompare(b['name']);
  });
};

const reduceTotalRevenue = function (agg, driver, i, arr) {
  return agg + driver.revenue;
};

const totalRevenue = function (drivers) {
  return drivers.reduce(reduceTotalRevenue, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};

