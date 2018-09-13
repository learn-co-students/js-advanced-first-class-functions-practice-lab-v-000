const logDriverNames = function(drivers) {
  [...drivers].forEach(function(driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, location) {
  [...drivers].forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
};

const driversByRevenue = function(array) {
  return [...array].sort(function(driver1, driver2) {
    if (driver1.revenue > driver2.revenue) return 1;
    if (driver1.revenue < driver2.revenue) return -1;
  });
};

const driversByName = function(array) {
  return [...array].sort(function(driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  });
};

const totalReducer = (acc, curr) => acc + curr.revenue;

const totalRevenue = function(array) {
  return array.reduce(totalReducer,0)
};

const averageReducer = (acc, curr, i, arr) => (acc + curr.revenue);

const averageRevenue = function(array) {
  return array.reduce(averageReducer,0)/array.length
};
