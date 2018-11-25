// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}
 function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  })
}
 function driversByRevenue(drivers) {
  return drivers.slice().sort(function(driverA, driverB) {
    return driverA.revenue - driverB.revenue;
  })
}
 function driversByName(drivers) {
  return drivers.slice().sort(function(driverA, driverB) {
    return driverA.name.localeCompare(driverB.name);
  })
}
 function totalRevenue(drivers) {
  let totalRevenue = 0;
   drivers.forEach(function(driver) {
    totalRevenue += driver.revenue;
  })
   return totalRevenue;
}
 function averageRevenue(drivers) {
  let avgRevenue   = totalRevenue(drivers) / drivers.length
   return avgRevenue;
}
