// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown == hometown) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(drivers) {
  let driversCopy = [...drivers];
  let sortedByRevenue = function(a, b) {
    return a.revenue - b.revenue;
  };
  return driversCopy.sort(sortedByRevenue);
};

const driversByName = function(drivers) {
  let driversCopy = [...drivers];
  driversCopy.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  return driversCopy;
};

const totalRevenue = function(drivers) {
  let revenue = 0;
  drivers.forEach(function(driver) {
    revenue += driver.revenue;
  });
  return revenue;
};

const averageRevenue = function(drivers) {
  let revenue = 0;
  drivers.forEach(function(driver) {
    revenue += driver.revenue;
  });
  return revenue / drivers.length;
};
