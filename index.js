// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach( function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, hometown) {
  const hometownDrivers = drivers.filter( function (driver) {
    return driver.hometown === hometown;
  });
  logDriverNames(hometownDrivers);
};

const driversByRevenue = function (drivers) {
  const driversSortedByRevenue = Object.assign([], drivers);
  return driversSortedByRevenue.sort(function (a,b) {
  	return a.revenue - b.revenue;
  });
};

const driversByName = function (drivers) {
  const driversSortedByName = Object.assign([], drivers);
  return driversSortedByName.sort( function (a,b) {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce( function (agg, el, i, drivers) {
    return agg + el.revenue;
  }, 0);
}

const averageRevenue = function (drivers) {
   return totalRevenue(drivers)/drivers.length;
};
