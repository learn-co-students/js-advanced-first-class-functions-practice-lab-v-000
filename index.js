// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, town) {
  drivers.forEach(function(driver) {
    if (driver.hometown === town) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.concat().sort(function (a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  return drivers.concat().sort(function (a, b) {
    return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
  })
}

function totalRevenue(drivers) {
  return drivers.reduce((a, b) => ({revenue: a.revenue + b.revenue})).revenue
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
