// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  })
}
function logDriversByHometown(drivers, location){
  drivers.forEach(function (driver){
    if (driver.hometown.toLocaleLowerCase() === location.toLocaleLowerCase() ) {
          console.log(driver.name);
    }
  })
}
function driversByRevenue(drivers){
  const newDrivers = [...drivers]
  return newDrivers.sort(function(driverA, driverB){
    return driverA.revenue-driverB.revenue;
  })
}
function driversByName(drivers){
  const newDrivers = [...drivers]
  return newDrivers.sort(function(driverA, driverB){
    return driverA.name.localeCompare(driverB.name);
  })
}
function totalRevenue(drivers){
  return drivers.map(function (driver){
                                        return driver.revenue
                                      }).reduce(function(total, revenue){
                                        return total+revenue
                                      })
}
function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
