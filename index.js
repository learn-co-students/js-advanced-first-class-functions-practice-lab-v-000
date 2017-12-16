// Code your solution in this file!

function logDriverNames (drivers) {
  //recieves array of driver objects
  // logs the name attribure of each driver to console
  for (const driver of drivers) {
    console.log(driver.name);
  };
};

function logDriversByHometown (drivers, location) {
  // logs name of each driver whose hometown matches the string passed as location
  drivers.filter(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
};

function driversByRevenue (drivers) {
  // returns new array of driver objects sorted by revenue attr from lowest to highest
  const driverSorter = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  };

  return drivers.slice().sort(driverSorter);
};

function driversByName (drivers) {
  // returns a new array of diver objects sorted by name from a to z
  const driverSorter = function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  }
  return drivers.slice().sort(driverSorter);
};

function totalRevenue (drivers) {
  //returns sum of the revenue earned by each driver
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

function averageRevenue (drivers) {
  // returns average revenue earned by each driver
  total = totalRevenue(drivers);
  return total / drivers.length;
};
