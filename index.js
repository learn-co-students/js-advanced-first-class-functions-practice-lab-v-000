// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function(driver){
    return console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  return drivers.forEach(function(driver) {
    if(driver.hometown === location) {
      return console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  let newDrivers = drivers.slice(0)
  newDrivers.sort(function(a, b) {
    return (a.revenue - b.revenue)
  })
  return newDrivers
}

function driversByName(drivers) {
  let newDrivers = drivers.slice(0)
  newDrivers.sort(function(a, b) {
  return a.name.localeCompare(b.name)
  })
  return newDrivers
}

function totalRevenue(drivers) {
  return drivers.reduce(function(agg, el) {
    return el.revenue + agg
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
