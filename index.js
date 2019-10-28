// Code your solution in this file!
// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, location){
  return drivers.forEach(function(driver){
    if(location === driver.hometown){
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers){
  const sortedDrivers = [...drivers]
  return sortedDrivers.sort(function(driverA, driverB) {return driverA.revenue - driverB.revenue
  })
}

function driversByName(drivers){
  const sortedDrivers = [...drivers]
  return sortedDrivers.sort(function(driverA, driverB){
    return driverA.name.localeCompare(driverB.name)
  })
}

function totalRevenue(drivers){
  return drivers.reduce(function(accu, currentDriver){
    return accu + currentDriver.revenue;
  }, 0)
}


function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
