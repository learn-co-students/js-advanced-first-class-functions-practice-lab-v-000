// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.map(driver=> console.log(driver.name))
}

function logDriversByHometown(drivers, hometown) {
  return drivers.filter(driver => driver.hometown === hometown).map(driver => console.log(driver.name))
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  })
  }


function driversByName(drivers){
  return drivers.slice().sort(function(a, b){
    return a.name.localeCompare(b.name)
  })
}


function totalRevenue(drivers) {
  const reduceRevenue = function (agg, driver, i, arr) {
  return agg + driver.revenue;
}

  return drivers.reduce(reduceRevenue, 0)

}
function averageRevenue(drivers) {
  const reduceRevenue = function (agg, driver, i, arr) {
    return agg + driver.revenue / drivers.length
  }
  return drivers.reduce(reduceRevenue, 0)
}
