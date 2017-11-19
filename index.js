// Code your solution in this file!


function logDriverNames(drivers) {
  drivers.forEach(function(driver){console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  filteredDrivers = drivers.filter(function(driver){
    return driver.hometown === location
  })
  // debugger
  logDriverNames(filteredDrivers)
}

function driversByRevenue(drivers){
  const sortedDrivers = drivers.slice().sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue
  })
  return sortedDrivers
}

function driversByName(drivers){
  const sortedDrivers = drivers.slice().sort(function(driver1, driver2){
    const name1 = driver1.name
    const name2 = driver2.name
    return name1.localeCompare(name2)
  })
  return sortedDrivers
}

function reduceDriverRevenue(agg, el, i, arr){
  console.log(el.revenue)
  return agg + parseInt(el.revenue)
}

function totalRevenue(drivers){
  return drivers.reduce(reduceDriverRevenue, 0)
}


function averageRevenue(drivers){
  total = totalRevenue(drivers)
  return total / drivers.length
}
