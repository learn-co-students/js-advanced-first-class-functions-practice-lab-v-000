// Code your solution in this file!
const logDriverNames = function (drivers) {
  let driverNames = []
   drivers.forEach(function (driver) {
     console.log(driver.name)
     driverNames.push(`${driver.name}`);
  });
  return driverNames
}

const logDriversByHometown = function(drivers, town) {
  drivers.forEach(function (driver) {
    if (driver.hometown === town)
    console.log(driver.name)
  });
}

const numberSorter = function (num1, num2) {
  return num1 - num2;
};

const driversByRevenue = function(drivers) {

  return drivers.slice().sort(function (first, second) {
    return first.revenue - second.revenue;
  });
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (firstDriver, secondDriver) {
    return firstDriver.name.localeCompare(secondDriver.name);
  });
};

const totalRevenue = function (drivers) {
  let allRevenue = 0
  for (const driver of drivers) {
  allRevenue += driver.revenue
  };
  return allRevenue
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}
