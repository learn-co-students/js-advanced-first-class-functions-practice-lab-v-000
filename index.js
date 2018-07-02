function logDriverNames(driverArray) {
  driverArray.forEach(function (driver, index, arr) {
    console.log(driver.name);
  })
}

function logDriversByHometown(driverArray, location) {
  driverArray.forEach(function (driver, index, arr) {
    if (location === driver.hometown) {
      console.log(driver.name);
    }
  })
}

function driversByRevenue(driverArray) {
  return driverArray.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(driverArray) {
  return driverArray.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(driverArray) {
  return driverArray.reduce(function(a, b){
    return a + b.revenue;
  }, 0);
}

function averageRevenue(driverArray) {
  return totalRevenue(driverArray) / driverArray.length;
}
