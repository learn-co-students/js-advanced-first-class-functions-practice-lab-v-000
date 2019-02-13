// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, location) {
  const qualifiedDrivers = drivers.filter(driver => driver.hometown === location);
  logDriverNames(qualifiedDrivers);
}

function driversByRevenue(drivers) {
  const numberSorter = function ( num1, num2) {
    return num1.revenue - num2.revenue;
  }

  drivers_copy = drivers.slice(0)
  return drivers_copy.sort(numberSorter)
}

function driversByName(drivers){
  drivers_copy = drivers.slice(0);
  return drivers_copy.sort(function (a,b) {
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(drivers) {
  let totalRevenue = 0;

  drivers.forEach(function(driver){
    totalRevenue += driver.revenue;
  });

  return totalRevenue;
}


function averageRevenue(drivers) {
    let totalRev = 0;
    let averageRevenue = 0;
    let totalDrivers = drivers.length

    return averageRevenue += (totalRev += totalRevenue(drivers) / totalDrivers)
}
