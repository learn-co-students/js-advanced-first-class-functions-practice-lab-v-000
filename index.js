// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
};

const driversByRevenue = function (drivers) {
  const newDrivers = [...drivers]
   newDrivers.sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue
  });
  return newDrivers
}

const driversByName = function (drivers) {
   newDrivers = [...drivers]
   newDrivers.sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name)
  });
  return newDrivers
}

const totalRevenue = function (drivers) {
  const initialValue = 0;
  const totalish = drivers.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.revenue;
  },initialValue)
  return totalish
}

const averageRevenue = function (drivers) {
  var initialValue = 0;
  var totalish = drivers.reduce(function (accumulator, currentValue) {
      return (accumulator + currentValue.revenue);
  },initialValue) / drivers.length
  return totalish
}
