// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach((driver) => console.log(driver.name));
}

function logDriversByHometown(drivers, hometown) {
  const matched = drivers.filter((driver) => hometown === driver.hometown);
  logDriverNames(matched);
}

function driversByRevenue(drivers) {
  return drivers.slice(0).sort((a, b) => a.revenue - b.revenue);
}

function driversByName(drivers) {
  return drivers.slice(0).sort((a, b) => a.name.localeCompare(b.name));
}

function totalRevenue(drivers) {
  return drivers.reduce((total, driver) => total + driver.revenue, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}