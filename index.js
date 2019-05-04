
function logDriverNames(drivers){
  drivers.forEach(function(driver){ console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown){
  drivers.filter(driver => driver.hometown === hometown)
  .forEach(function(driver){
    console.log(driver.name)
  })
}

function driversByRevenue(drivers){
  return drivers.map(driver => driver)
  .sort((a, b) => (a.revenue > b.revenue ? 1 : -1))
}

function driversByName(drivers){
  return drivers.map(driver => driver)
  .sort((a,b) => (a.name > b.name) ? 1 : -1)
}

function totalRevenue(drivers){
  return drivers.reduce(function(total, driver){
    return total + driver.revenue;
  }, 0);
}

function averageRevenue(drivers){
  totalRevenue = drivers.reduce(function(total, driver){
    return total + driver.revenue;
  }, 0);
  return (totalRevenue/drivers.length)
}
