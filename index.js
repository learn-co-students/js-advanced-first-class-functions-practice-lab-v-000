// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function(driver) {
  console.log(driver.name)})
}

function logDriversByHometown(drivers, location) {
  matchingDrivers = drivers.filter(function(driver) {return driver.hometown === location})
  return logDriverNames(matchingDrivers)
}

const revenueSorter = function(driver1, driver2) {
  return driver1.revenue - driver2.revenue
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(revenueSorter)
}

const nameSorter = function(driver1, driver2) {
  return driver1.name.localeCompare(driver2.name)
}

function driversByName(drivers) {
  return drivers.slice().sort(nameSorter)
}

const add = function(sum, driver) {
  return driver.revenue + sum
}

function totalRevenue(drivers) {
  return drivers.reduce(add, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
