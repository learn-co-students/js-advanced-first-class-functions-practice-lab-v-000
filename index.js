// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver["name"])
  })
}

function logDriversByHometown(drivers, location) {
  drivers.map(function(driver) {
    if (driver["hometown"] === location) {
      console.log(driver["name"])
    }
  })
}

function driversByRevenue(drivers) {
 let newDrivers = Object.create(drivers)
 return newDrivers.sort(function(a, b) {
   return a.revenue - b.revenue
 })
}

function driversByName(drivers) {
  let newDrivers = Object.create(drivers)
  return newDrivers.sort(function(a, b) {
    return a["name"].localeCompare(b["name"])
  })
}

function totalRevenue(drivers) {
  let newDrivers = Object.create(drivers.map(function(driver) {return driver["revenue"]}))
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return newDrivers.reduce(reducer)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
