// Code your solution in this file!
function logDriverNames(drivers){
  for(const driver of drivers){
    console.log(driver.name)
  }
}

function logDriversByHometown(drivers, town){
  drivers.forEach(function(driver){
    if (driver.hometown === town){
      console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(a,b){
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers){
  return drivers.slice().sort(function(a, b){
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(drivers){
  return drivers.reduce(function(a, b){
    return b.revenue + a
  },0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}
