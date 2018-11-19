// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown.toLowerCase() === location.toLowerCase()) {
      console.log(driver.name)
    };
  });
};

const mapDrivers = function (drivers) {
  return drivers.map (function (drivers) {
    return drivers
  });
};

const driversByRevenue = function (drivers) {
  return mapDrivers(drivers).sort(function (driver1, driver2) {
      return driver1.revenue - driver2.revenue
    });
  };


const driversByName = function (drivers) {
  return mapDrivers(drivers).sort(function (driver1, driver2) {
      return driver1.name.localeCompare(driver2.name);
    });
  };


const totalRevenue = function (drivers) {
  let totalRev = 0;

  drivers.forEach(function (driver) {
    totalRev += driver.revenue;
  });

  return totalRev;
};


const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
