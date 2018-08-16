// Code your solution in this file!

function logDriverNames(drivers){
   drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, town){
  drivers.forEach(function(driver){
    if (driver.hometown === town){
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers){
  let driversByRevenue = drivers.slice()
   return driversByRevenue.sort(function (a, b){
     return a.revenue - b.revenue
  });
}

function driversByName(drivers){
  let byName = drivers.slice()
  return byName.sort(function (a, b){
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers){
  return drivers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.revenue ;
  }, 0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
