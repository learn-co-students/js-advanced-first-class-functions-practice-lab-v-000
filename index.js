// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(element){
    console.log(element.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver){
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice(0).sort(function(a,b){
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  return drivers.slice(0).sort(function(a,b){
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  let total = 0
  return drivers.reduce(function(total, current){
    return total += current.revenue
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
