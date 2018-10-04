// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (hometown == driver.hometown){
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue ;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort((a, b) =>  a.name.localeCompare(b.name));
}

function totalRevenue(drivers) {
  const reduceDriversRevenue = function (agg, el, i, arr) {
    return agg + el.revenue;
  };
  return drivers.reduce(reduceDriversRevenue, 0);
}

function averageRevenue(drivers) {
  return (totalRevenue(drivers)/ drivers.length);
}
