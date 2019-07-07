// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach( function (element) {
    console.log(element.name);
  });
}

function logDriversByHometown(drivers, hometown) {
  return drivers.forEach(function(driver) {
    if (driver.hometown == hometown) {
    console.log(driver.name)}
  });
}

function driversByRevenue(drivers) {
  var newArray = [...drivers];
  return newArray.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  var newArray = [...drivers];
  return newArray.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function(total, driver) {
    return driver.revenue + total;
  }, 0);
}

function averageRevenue(drivers) { 
  return totalRevenue(drivers) / drivers.length;
}