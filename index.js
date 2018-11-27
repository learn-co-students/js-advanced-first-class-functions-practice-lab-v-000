// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach( function (driver, i, arr) {
    console.log(driver.name);
  });
}


function logDriversByHometown(drivers, loc) { 
  drivers.forEach( function (driver, i, arr) {
    if (driver.hometown === loc) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a,b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort( function (a,b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function (agg, el, i, arr) {
    return agg + el.revenue;
  }, 0
  );
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
}
