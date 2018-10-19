// Code your solution in this file!

function logDriverNames(driver) {
  driver.forEach(function (driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(driver, location){
  driver.sort(function (driver){
    if (driver.hometown === location)
    console.log(driver.name)
  })
}

//  at first wanted to do something like.... this.driversByRevenue.sort((a,b) => b.revenue < a.revenue ? 1 : -1)

const driversByRevenue = function(driver) {
  return driver.slice().sort(function(a,b){
    return a.revenue - b.revenue
  })
}

const driversByName = function(driver){
  return driver.slice().sort(function(a,b){
    return  a.name.localeCompare(b.name)
  })
}

const totalRevenue = function(driver){
  return driver.reduce(function(a,b){
    return a + b.revenue}, 0)
}

const averageRevenue = function(driver){
  return totalRevenue(driver)/driver.length
}
