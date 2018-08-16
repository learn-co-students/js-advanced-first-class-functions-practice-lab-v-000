// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver){
  console.log(driver.name);
  });
};

function logDriversByHometown(drivers, location){
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
};

function driversByRevenue(drivers) {
  const driversCopy = [...drivers];
  driversCopy.sort(function(driver1, driver2) {
      return driver1.revenue - driver2.revenue;
  });
  return driversCopy
};

function driversByName(drivers) {
  const driversCopy = [...drivers];
  driversCopy.sort(function(driver1, driver2){
    return driver1.name.localeCompare(driver2.name);
  });
  return driversCopy;
};

function totalRevenue(drivers) {
  return drivers.reduce(function(value, driver) {
    return value + driver.revenue;
  }, 0);
};

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
