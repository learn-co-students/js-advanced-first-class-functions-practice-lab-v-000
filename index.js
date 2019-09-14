// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  });
};

const driversByRevenue = function(drivers) {
  const sortableDrivers = [...drivers];

  sortableDrivers.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
  return sortableDrivers;
};

const driversByName = function(drivers) {
  const sortableDrivers = [...drivers];
  sortableDrivers.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  return sortableDrivers;
};

const totalRevenue = function(drivers) {
  drivers.reduce(function(agg, el, i, arr) {
    console.log('The aggregate up to this point is:', agg);
    console.log('The index of the current element is:', i);
    console.log("The current element's revenue is:", el.revenue);
    console.log('----------------');
    console.log(agg + el.revenue);
  }, 0);
};
