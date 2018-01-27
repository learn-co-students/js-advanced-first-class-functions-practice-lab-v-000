function logDriverNames(drivers){
  drivers.forEach(driver => {
    console.log(driver.name)
  });
}

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

function driversByRevenue(drivers){
  return drivers.slice().sort(function (driver1, driver2){
  return (driver1.revenue - driver2.revenue)
  })
}

function driversByName(drivers){
  return drivers.slice().sort(function(driver1, driver2){
  return driver1.name.localeCompare(driver2.name)
  })
}
function totalRevenue(drivers) {
  return drivers.reduce(function (total, currentDriver){
    return total + currentDriver.revenue;
  }, 0)
}

function averageRevenue(drivers) {
  return drivers.reduce(function(total, currentDriver) {
    return total + currentDriver.revenue/drivers.length
  }, 0)
}

