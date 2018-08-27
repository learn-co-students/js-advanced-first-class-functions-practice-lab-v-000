// Code your solution in this file!

const logDriverNames = function(drivers){
  drivers.forEach(function(element) {
    console.log(element.name)
  })
}

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function(element) {
    if(element.hometown === location){
      console.log(element.name)
    }
  })
}

const driversByRevenue = function(drivers){
  return drivers.slice().sort(function(driverA, driverB){
    return driverA.revenue - driverB.revenue
    })
  }

  const driversByName = function(drivers){
    return drivers.slice().sort(function(driverA, driverB){
      return driverA.name.localeCompare(driverB.name)
      })
    }

    const totalRevenue= function(drivers){
      return drivers.reduce(function(sum, driver){
        return sum + driver.revenue
      }, 0);

    }

    const averageRevenue = function(drivers){
      return totalRevenue(drivers) / drivers.length
    }
