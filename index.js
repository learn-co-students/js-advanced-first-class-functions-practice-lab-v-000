const logDriverNames = function (drivers) {
  drivers.forEach(function (driver, i, drivers) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver, i, drivers) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    };
  });
}

const driversByRevenue = function (drivers) {
  const arrayDriversByRevenue = [...drivers];
  return arrayDriversByRevenue.sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}

const driversByName = function (drivers) {
  const arrayDriversByName = [...drivers];
  return arrayDriversByName.sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  });
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, driver) {
    return total + driver.revenue;
  }, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
