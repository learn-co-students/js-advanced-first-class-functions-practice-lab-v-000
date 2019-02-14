// const drivers = [
//   { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//   { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//   { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
//   { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//   { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
// ];


// Logs the name attribute of each driver to the console.
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

// Logs the name attribute of each driver whose hometown matches.
const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
    console.log(driver.name);
    };
  });
}

// Returns NEW drivers array sorted by revenue from low to high.
// slice() makes a copy and doesn't destruct original drivers array
const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

// Returns new array of driver objects sorted A-Z.
const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
}

// Returns the sum of the revenue earned by each driver.
const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

// Returns the average revenue earned by each driver.
const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
