// Code your solution in this file!
function logDriverNames(array){
  return array.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(array, hometown){
  return array.forEach(function(driver){
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(object){
  return object.slice().sort(function(a, b){
    return a.revenue - b.revenue
  })
}

function driversByName(driverObjs){
  return driverObjs.slice().sort(function(a, b){
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(driverObjs){
  return driverObjs.reduce(function(total, driver){
    return total + driver.revenue
  }, 0)
}

function averageRevenue(driverObjs){
  return totalRevenue(driverObjs) / driverObjs.length
}
