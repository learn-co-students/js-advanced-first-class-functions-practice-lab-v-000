// Code your solution in this file!
const logDriverNames = (drivers => {
  drivers.forEach(driver => {console.log(driver.name)});
});

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

function driversByRevenue (drivers) {
  const sortedByRevenue = drivers.slice();
  return sortedByRevenue.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
};

function driversByName (drivers) {
  const sortedByName = drivers.slice();
  return sortedByName.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
};

function totalRevenue (drivers) {
  const reducedRevenue = function (agg, el) {
  return agg + el.revenue;
};
  return drivers.reduce(reducedRevenue, 0);
};

function averageRevenue (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
