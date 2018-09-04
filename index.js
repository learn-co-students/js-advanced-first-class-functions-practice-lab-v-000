// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function (driver, i, arr){
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, hometown){
   drivers.map(function(driver) {
    if (driver.hometown === hometown){
      console.log(driver.name);
    };
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a, b){
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers){
  return drivers.slice().sort(function(a, b){
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers){
  const callback = function (agg, driver, i, arr){
    return agg + driver.revenue;
  }
  return drivers.reduce(callback, 0)
}


function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length
}
