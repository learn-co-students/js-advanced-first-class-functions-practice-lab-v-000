

function logDriverNames(drivers) {
  for (const driver of drivers) {
    console.log(driver.name);
  }
};

function logDriversByHometown(drivers, hometown) {
  for (const driver of drivers) {
    if (driver.hometown == hometown) {
      console.log(driver.name);
    }
  }
};

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  })
};

function driversByName(drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  })
};

const totalRevenue = function (drivers) {
  let totalRev = 0;
  for (const driver of drivers) {
    totalRev += driver.revenue;
  };
  return totalRev;
};

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
};
