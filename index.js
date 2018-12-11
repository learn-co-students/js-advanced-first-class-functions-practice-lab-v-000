// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function(driver){ console.log(driver.name);});
}

function logDriversByHometown(drivers, location) {
  logDriverNames(drivers.filter(driver => driver.hometown === location));
}

function driversByRevenue(drivers) {
  let newDriversArray = [...drivers];
  return newDriversArray.sort(function(a, b){
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers){
  let newDriversArray = [...drivers];
  return newDriversArray.sort(function(a,b){return a.name.localeCompare(b.name);});
}

function totalRevenue(drivers){
  return drivers.reduce(function(a,b){return a + b.revenue;}, 0)
};

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length;
}
