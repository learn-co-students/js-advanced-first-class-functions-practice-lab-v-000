// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach( function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach( function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers) {
  sortedDrivers = [...drivers];
  sortedDrivers.sort( function(a, b) {
    if (a.revenue < b.revenue) {
      return -1;
    } if (a.revenue > b.revenue) {
      return 1;
    } 
    return 0;
  })
  return sortedDrivers;
}

function driversByName(drivers) {
  sortedDrivers = [...drivers];
  sortedDrivers.sort( function(a, b) {
    return a.name.localeCompare(b.name);
  })
  return sortedDrivers;
}

function totalRevenue(drivers) {
  return drivers.map(function(driver) {
    return driver.revenue;
  }).reduce(function(agg, el) { 
    return agg + el; 
  })
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
}