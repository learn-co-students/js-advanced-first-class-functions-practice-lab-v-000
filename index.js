// Code your solution in this file!
const logDriverNames = function(array){
  array.forEach(function(driver){
    console.log(driver.name)
  })
}

const logDriversByHometown = function(array, string){
  array.forEach(function(driver){
    if (driver.hometown === string){
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function(array){
  let newDrivers = [...array]
  return newDrivers.sort(function(a,b){
    return a.revenue - b.revenue
  })
}

const driversByName = function(array){
  let newDrivers = [...array]
  return newDrivers.sort(function(a, b){
    return a.name.localeCompare(b.name)
  })
}

const totalRevenue = function(array){
  return array.map(driver=> driver.revenue).reduce(function(driver1, driver2) {
     return driver1 + driver2
   })
}

const averageRevenue = function(array){
  return totalRevenue(array)/array.length
}
