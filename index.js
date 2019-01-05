function logDriverNames(driver){
  driver.forEach(function (driver){
    console.log(driver.name)
  })
}
function logDriversByHometown(driver, location){
  driver.forEach(function (driver){
    if (driver.hometown === location){
      console.log(driver.name)
    }
  })
}
function driversByRevenue(drivers){
  return drivers.slice().sort(function (d1, d2) {
    return d1.revenue - d2.revenue
  })
}
function driversByName(driver){
  return driver.slice().sort(function (d1, d2){
    return d1.name.localeCompare(d2.name)
  })
}
function totalRevenue(driver){
  return driver.reduce(function (total, current){
    return current.revenue + total
  }, 0)
}
function averageRevenue(driver){
  return totalRevenue(driver) / driver.length
}