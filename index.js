// Code your solution in this file!
function logDriverNames(driver) {
  driver.forEach(function(item, index) {
    console.log(item.name)
  } )
}

function logDriversByHometown(driver, location) {
  driver.forEach(function(item, index) {
    if (item.hometown === location) {
      console.log(item.name)
    }
  })
}

function driversByRevenue(driver) {
  let driversCopy = driver.slice()
  return driversCopy.sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

function  driversByName(driver) {
  let driversCopy = driver.slice()
  return driversCopy.sort(function (a , b) {
     return a.name.localeCompare(b.name)
  })
}

function totalRevenue(driver) {
  return driver.map(function(dr) {
    return dr.revenue
  }).reduce(function(total, rev){
    return total + rev
  })
}

function averageRevenue(driver) {
  return driver.map(function(dr) {
    return dr.revenue
  }).reduce(function(total, rev){
    return total + rev
  })/driver.length
}
