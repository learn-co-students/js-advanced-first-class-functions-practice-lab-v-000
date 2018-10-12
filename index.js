// Code your solution in this file!
function logDriverNames(drivers){
  return drivers.forEach(function(driver){console.log(driver.name)})
}

function logDriversByHometown(drivers, town){
  return drivers.forEach(function (driver){
    if (driver.hometown === town) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  driversNew = [...drivers]
  return driversNew.sort(function(d1,d2){
    return d1.revenue - d2.revenue
  })
}

function driversByName(drivers){
  driversNew = [...drivers]
  return driversNew.sort(function(d1, d2){
    return d1.name.localeCompare(d2.name)
  })
}

function totalRevenue(drivers){
  return drivers.reduce(function(total, driver){
    return driver.revenue + total}, 0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
