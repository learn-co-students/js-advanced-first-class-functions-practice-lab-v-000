function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
}

const totalRevenue = function (drivers) {
  let totalRevenue = 0;
  
  drivers.forEach(function (driver) {
    totalRevenue += driver.revenue;
  });
  return totalRevenue;
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length; 
}