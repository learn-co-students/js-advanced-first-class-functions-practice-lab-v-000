// Code your solution in this file!
const logNames = function (driver) {
  console.log(`${driver.name}`);
}

const logDriverNames = function (drivers) {
  drivers.forEach(logNames);
  // drivers.forEach(function (driver) {
  //   console.log(`${driver.name}`);
  // });
}

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(`${driver.name}`);
    }
  });
}

const driversByRevenue = function (drivers) {
  const driversCopy = drivers.slice();

  return driversCopy.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return total += currentDriver.revenue;
  }, 0);
}
// total is the aggregator, defined by the initial value argument passed into .reduce(callback, inivitalValue)
// callback functions passed into reduce have 4 arguments:
// fn (accumulator, currentValue, currentIndex, array) {}

const averageRevenue = function (drivers) {
  return (totalRevenue(drivers) / drivers.length);
}
