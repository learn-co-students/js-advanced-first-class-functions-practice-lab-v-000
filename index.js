function logDriverNames(drivers){
  drivers.forEach(function(obj, index){
    console.log(obj.name)
  }
 )
}

function logDriversByHometown(drivers, location){
  const filteredByHometown = drivers.filter(function(driver){return driver.hometown === location})
  filteredByHometown.forEach(function(obj){console.log(obj.name)})
}

function driversByRevenue(drivers){
  const copyOfDrivers = [...drivers]
  return copyOfDrivers.sort(function(a, b){return a.revenue - b.revenue})
}

function driversByName(drivers){
  const copyOfDrivers = [...drivers]
  return copyOfDrivers.sort(function(a,b){
    if(a.name > b.name){
      return 1
    } else if(a.name < b.name){
      return -1
    } else {
      return 0
    }
  })
}

function totalRevenue(drivers){
  return drivers.reduce(function(rev, driver){return rev += driver.revenue}, 0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}
