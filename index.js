// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, loc) {
  return drivers.forEach(function(driver){
    if (driver.hometown === loc) {
      console.log(driver.name);
    };
  });
}

function driversByRevenue(drivers) {
  const sortedDrivers = [...drivers];
  sortedDrivers.sort(function(a,b){
    return a.revenue - b.revenue;
  });
  return sortedDrivers;
}

function driversByName(drivers) {
  const sortedDrivers = [...drivers];
  debugger;
  sortedDrivers.sort(function(a,b){
    return (a.name).localeCompare(b.name);
  });
  return sortedDrivers;
}

function totalRevenue(drivers) {
  return drivers.map(driver => driver.revenue).reduce(function(revenue, currentValue){return revenue + currentValue});
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
}
