// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(element) { console.log(element.name)});
}

function logDriversByHometown(drivers, location) {
  const filteredDrivers = drivers.filter (function(driver) {return driver.hometown === location });
  logDriverNames(filteredDrivers);
}

function driversByRevenue(drivers) {
  return drivers.slice(0).sort(function (a, b) {
  return a.revenue - b.revenue; });
}

function driversByName(drivers) {
  return drivers.slice(0).sort( (a, b) => (a.name).localeCompare(b.name));
}

function totalRevenue(drivers) {
  return drivers.slice(0).reduce(function (agg, el, i, arr) {
    return agg + el.revenue
    }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/(Object.keys(drivers).length)
}