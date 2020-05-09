function logDriverNames(array){
  array.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(array, city){
  array.forEach(function(driver){
    if (driver.hometown === city)
      console.log(driver.name)
  })
}

const driversByRevenue = function(drivers){
  let newArray = drivers.slice(0)
  newArray.sort(function(a,b){
    return a.revenue - b.revenue;
  })
  return newArray
}

const driversByName = function(drivers){
  let newArray = drivers.slice(0)
  newArray.sort(function(a,b){
    return a.name.localeCompare(b.name)
  })
  return newArray
}

const totalRevenue = function(drivers){
  return drivers.reduce(function(a,b){
    return a + b.revenue
  }, 0)
}

const averageRevenue = function(drivers){
  return totalRevenue(drivers)/drivers.length
}
