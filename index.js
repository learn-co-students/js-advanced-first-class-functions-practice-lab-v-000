// Code your solution in this file!
function logDriverNames(drivers) {
  for(const driver of drivers) {
    console.log(driver.name)
  }
}

function logDriversByHometown(drivers, location) {
  for(const driver of drivers) {
    if(driver.hometown === location) {
      console.log(driver.name)
    }
  }
}

function driversByRevenue(drivers) {
  sortedDrivers = [...drivers].sort(function (a, b) {
    return a.revenue - b.revenue
  });

  return sortedDrivers
}

function driversByName(drivers) {
  sortedDrivers = [...drivers].sort(function (a, b) {
    return a.name.localeCompare(b.name)
  });

  return sortedDrivers
}

function totalRevenue(drivers) {
  totalRevenue = drivers.reduce(function (agg, el, i, arr) {
    return agg + el.revenue
  }, 0);

  return totalRevenue
}

function averageRevenue(drivers) {
  averageRevenue = drivers.reduce(function (agg, el, i, arr) {
    return agg + el.revenue
  }, 0);

  return averageRevenue / drivers.length
}
