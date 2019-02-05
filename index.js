// Code your solution in this file!

function logDriverNames(drivers) {

  const driver = function(driver){
    console.log(driver.name)
  }
  return drivers.forEach(driver)
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
      if (driver.hometown === hometown) {
          console.log(driver.name)
      }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice(0).sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
    return drivers.slice(0).sort(function (a, b) {
        return a.name.localeCompare(b.name)
    })
}

function totalRevenue(drivers) {

  const reduceRevenue = function(total, driver){
    return total + driver.revenue
  }

  return drivers.reduce(reduceRevenue, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
