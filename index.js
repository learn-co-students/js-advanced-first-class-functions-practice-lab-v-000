// Code your solution in this file!
function logDriverNames(drivers) {
  for (const el of drivers) {
    console.log (`${el.name}`)
  }
}

function logDriversByHometown(drivers, town) {
  drivers.forEach(function(driver) {
    if (driver.hometown === town) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a,b) {
    return a.revenue - b.revenue
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function (sum, driverRev) {
    return driverRev.revenue + sum;}, 0);
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a,b) {
    return a.name.localeCompare(b.name)
  })
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
