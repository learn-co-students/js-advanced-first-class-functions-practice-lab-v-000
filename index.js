// Code your solution in this file!
const logDriverNames = function(list) {
  list.forEach(function(driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(list, location) {
  list.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
};

const driversByRevenue = function(list) {
  let sortedByRevenue = list.sort(function (driverA, driverB) {
    return driverA.revenue - driverB.revenue;
  });
  return sortedByRevenue;
};

const driversByName = function(list) {
  let sortedByName = list.sort(function (driverA, driverB) {
    return driverA.name.localeCompare(driverB.name);
  });
  return sortedByName;
};

const totalRevenue = function(list) {
  return list.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function(list) {
  return totalRevenue(list) / list.length;
}
