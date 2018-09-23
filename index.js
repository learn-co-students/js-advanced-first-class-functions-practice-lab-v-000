// Code your solution in this file!
function logDriverNames(drivers) {
  for (const driver of drivers) {
    console.log(driver.name);
  }
}

function logDriversByHometown(drivers, location) {
  let filtered_drivers = drivers.filter(driver => driver.hometown === 'Pittsburgh');
  logDriverNames(filtered_drivers);
  // for (const driver of drivers) {
  //   if (driver.hometown === location) {
  //     console.log(driver.name);
  //   }
  // }
}

function driversByRevenue(drivers) {
  return [...drivers].sort(function(a, b) {
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers) {
  return [...drivers].sort(function(a, b) {
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function(total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0)
  // let rev = 0;
  // for (const driver of drivers) {
  //   rev += driver.revenue;
  // }
  // return rev;
}

function averageRevenue(drivers) {
  total = 0
  for (const driver of drivers) {
    total += driver.revenue;
  }
  return total / drivers.length;
}
