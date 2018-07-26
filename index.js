// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(driver => console.log(driver.name));
}

function logDriversByHometown(drivers, hometown) {
  return logDriverNames(drivers.filter(driver => driver.hometown === hometown));
}

function driversByRevenue(drivers) {
  return drivers.slice(0).sort((a, b) => a.revenue - b.revenue);
}

function driversByName(drivers) {
  return drivers.slice(0).sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());
}

function totalRevenue(drivers) {
  return drivers.slice(0).map(driver => driver.revenue).reduce((a, b) => a + b);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
}
