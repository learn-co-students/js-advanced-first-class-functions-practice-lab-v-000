// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}


const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function(driver){
    location === driver.hometown ? console.log(driver.name) : null
  })
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (a,b) {
    return a.revenue - b.revenue
  })
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (a,b) {
    return a.name > b.name
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (completeRevenue, driver){
    return driver.revenue + completeRevenue
    },0)
  }

  const averageRevenue = function (drivers) {
    return totalRevenue(drivers)/drivers.length
  }
