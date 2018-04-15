const logDriverNames = function (drivers) {
  drivers.forEach(function (driver){
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
};

const driversByRevenue = function (drivers) {
  const newDrivers = drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  });
  return newDrivers;
};

const driversByName = function (drivers) {
  const newDrivers = drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return newDrivers;
};

const totalRevenue = function (drivers) {
  let sum = drivers.reduce(
    (totalRevenue, driver) => totalRevenue + driver.revenue, 0
  );
  return sum;
};

const averageRevenue = function (drivers) {
  let average = totalRevenue(drivers) / drivers.length;
  return average;
}
