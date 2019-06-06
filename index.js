// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(`${driver.name}`);
  });
};

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if(driver.hometown === hometown) {
      console.log(`${driver.name}`);
  }});
};


function driversByRevenue(drivers) {
  const newDrivers = [...drivers];
  newDrivers.sort(function(driverA, driverB) {
    return driverA.revenue - driverB.revenue;
  });
  return newDrivers;
};

function driversByName(drivers) {
  const newDrivers = [...drivers];
  newDrivers.sort(function(driverA, driverB) {
    return driverA.name.localeCompare(driverB.name);
  });
  return newDrivers;
};

function addDriverRevenues(total, driver, i, array) {
  return total + driver.revenue;
};

function totalRevenue(drivers) {
  return drivers.reduce(addDriverRevenues, 0);
};

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
};
