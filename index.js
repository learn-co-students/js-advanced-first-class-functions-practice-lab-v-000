
function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)
  });
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver){
    if (driver.hometown === hometown){
      console.log(driver.name)
    };
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  let totalRevenue = 0;
  drivers.forEach(function (driver) {
    totalRevenue += driver.revenue;
  });
  return totalRevenue
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
