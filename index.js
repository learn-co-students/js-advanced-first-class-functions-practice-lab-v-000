// Code your solution in this file!
const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
   });
}

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function(drivers){
  const sortedDrivers = drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  });
  return sortedDrivers;
}

const driversByName = function(drivers){
  const sortedDriversByName = drivers.slice().sort(function (a, b){
    return a.name.localeCompare(b.name);
  });
  return sortedDriversByName;
}

const totalRevenue = function(drivers){
  let driverTotalRevenue = 0
  drivers.forEach(function(driver){
    driverTotalRevenue = driverTotalRevenue + driver.revenue;
    return driverTotalRevenue;
  });
  return driverTotalRevenue;
}

const averageRevenue = function(drivers){
  let driverTotalCalcRevenue = totalRevenue(drivers);
  let noOfDrivers = 0;
  let calculatedAverageRev = 0;
  drivers.forEach(function(driver){
    noOfDrivers = noOfDrivers + 1;
    return noOfDrivers
  });
  calculatedAverageRev = driverTotalCalcRevenue / noOfDrivers;
  return calculatedAverageRev;
}
