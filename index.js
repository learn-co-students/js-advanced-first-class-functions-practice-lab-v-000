// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach(function (driver) {
  return console.log(driver.name);
  });
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (driver) {
    if(driver.hometown === hometown) {
      return console.log(driver.name)
    };
  });
}

function driversByRevenue(drivers) {
  const sortedDrivers = [...drivers]
  const revSorter = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  };

  return sortedDrivers.sort(revSorter);
}

function driversByName(drivers) {
  let sortedDrivers = [...drivers]
  driverSorter = function (driver1, driver2) {
    if (driver1.name[0].toLowerCase() < driver2.name[0].toLowerCase()){
      return -1;
    }
    if (driver1.name[0].toLowerCase() > driver2.name[0].toLowerCase()){
      return 1;
    }
    if (driver1.name[0].toLowerCase() === driver2.name[0].toLowerCase()){
      return 0;
    }
  };
  return sortedDrivers.sort(driverSorter);
}

function totalRevenue(drivers) {
  let totalRev = 0;
  drivers.forEach(function (driver) {
    totalRev += driver.revenue;
  });
  return totalRev;
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
