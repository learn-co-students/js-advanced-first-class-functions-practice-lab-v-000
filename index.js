const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
};

// Callback for driversByRevenue
const sortRevenue = function (a, b) { return a.revenue - b.revenue };

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(sortRevenue);
};

// Callback for driversByName
const sortByName = function (a, b) {
  return a.name.localeCompare(b.name)
};

const driversByName = function (drivers) {
  return drivers.slice().sort(sortByName);
};

// Callback for totalRevenue
const reduceRevenue = function (agg, el){
  return agg + el.revenue;
};

const totalRevenue = function (drivers) {
  return drivers.reduce(reduceRevenue, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
