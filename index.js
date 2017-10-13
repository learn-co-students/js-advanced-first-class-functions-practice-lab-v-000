// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function (el, i, arr) {console.log(`${el.name}`)})
}

function logDriversByHometown(drivers, location) {
  return drivers.forEach(function (el, i, arr) { if (el.hometown === location) {console.log(`${el.name}`)}})
}

function driversByRevenue(drivers) {
  let newdrivers = drivers.slice()
  return newdrivers.sort(function(a, b) {
  return a.revenue - b.revenue;
});
}

function driversByName(drivers) {
  return drivers.slice().sort(function (a,b) {return a.name.localeCompare(b.name)})
}

 function totalRevenue(drivers) {
  let newdrivers = drivers.slice()
  return newdrivers.reduce(function(agg, driver, i, drivers ) {return agg += driver.revenue}, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}