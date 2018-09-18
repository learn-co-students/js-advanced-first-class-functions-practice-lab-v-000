// Code your solution in this file!
const logDriverNames = function(drivers){
  // drivers.forEach(driver => retrun console.log(driver.name));
  drivers.forEach(function(driver, i , drivers){
    return console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  let filteredList = drivers.filter(driver => driver.hometown === location);
  return logDriverNames(filteredList);
}

function driversByRevenue(drivers){
  const newDrivers = [...drivers];
  newDrivers.sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue;
  });
  return newDrivers;
}

function driversByName(drivers){
  const newDrivers = [...drivers];
  newDrivers.sort(function(driver1, driver2){
    return (driver1.name).localeCompare(driver2.name);
  });
  return newDrivers;
}

function totalRevenue(drivers) {
  return drivers.reduce(function(agg, el, i, arr){ return agg + el.revenue;}, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
}
