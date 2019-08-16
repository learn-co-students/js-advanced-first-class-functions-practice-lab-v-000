// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, town) {
  drivers.forEach(function(driver) {
    if(driver.hometown === town) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  const copy = [...drivers];
  const numSorter = function(driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  }
  return copy.sort(numSorter);
}

function driversByName(drivers) {
  const copy = [...drivers];
  const nameSorter = function(driver1, driver2) {
    return driver1.name.localeCompare(driver2.name)
  }
  return copy.sort(nameSorter);
}

function totalRevenue(drivers) {
  return drivers.reduce(function(total, currentVal) {
    return total + currentVal.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
