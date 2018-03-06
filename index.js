// Code your solution in this file!


const logDriverNames = function (drivers) {
  const names = [];

  drivers.forEach(function (driver) {
    console.log(driver.name);
    names.push(driver.name);
  })

  return names;
};

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (First, Second) {
    return First.revenue - Second.revenue;
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (First, Second) {
    return First.name.localeCompare(Second.name);;
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, driver) {return driver.revenue + total;}, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
