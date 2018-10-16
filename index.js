// Code your solution in this file!

const logDriverNames = function(drivers) {
  drivers.forEach(function(el){
    console.log(el.name)
  })
}


const logDriversByHometown = function (drivers, loc) {
  drivers.forEach(function(el) {
    if (el.hometown === loc) {
    console.log(el.name)
  }
  })
}

const driverNamez = function(driv1, driv2) {
  return driv1.localeCompare(driv2)
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function(driv1, driv2) {
  return driv1.revenue - driv2.revenue 
  })
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driv1, driv2) {
  return driv1.name.localeCompare(driv2.name)
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function(amount, driver) {
  return driver.revenue + amount
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/(drivers.length)
}