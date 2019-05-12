// Code your solution in this file!
const logDriverNames = function (drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

const logDriversByHometown = function (drivers, town){
  drivers.forEach(function(driver){
    if (driver.hometown == town){
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function (drivers){
  let newdrivers = [...drivers]
  newdrivers.sort( function (a, b) {
    return a.revenue - b.revenue
  })
   return newdrivers
}

const driversByName = function(drivers){
  let drivernames = [...drivers]
  drivernames.sort((a, b) => a.name.localeCompare(b.name))
  return drivernames
}

const totalRevenue = function(drivers){
   return drivers.map(driver => driver.revenue).reduce((total, amount) => total + amount)
}

const averageRevenue = function(drivers){
   return totalRevenue(drivers)/drivers.length
}
