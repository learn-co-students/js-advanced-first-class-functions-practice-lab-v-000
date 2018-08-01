// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver) {console.log(driver.name);})
}

function logDriversByHometown(drivers, hometown) {
  drivers.filter(function (driver) {if (driver.hometown === hometown) {console.log(driver.name);}})}

function driversByRevenue(drivers) {
  return [...drivers].sort( function(a,b) {return a.revenue - b.revenue})
}

function driversByName(drivers) {

  return [...drivers].sort( function(a,b) {return a.name.localeCompare(b.name)})
}

const reduceDriverRevenues = function (acc, el, i, arr) { return acc + el.revenue }

function totalRevenue(drivers) {
  return drivers.reduce(reduceDriverRevenues, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
