// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

function logDriversByHometown(drivers, hometown) {
  return drivers.filter(function(driver){
    return driver.hometown === hometown;
  }).filter(function(driver) {console.log(driver.name);
  });
};

function driversByRevenue(drivers) {
  let driversClone = [...drivers];
  return driversClone.sort(function(a, b) {
    return a.revenue - b.revenue; });
};

function driversByName(drivers) {
  let driversClone = [...drivers];
  return driversClone.sort(function(a, b){
    return a.name.localeCompare(b.name)});
  };

function totalRevenue(drivers) {
  return drivers.reduce(function(agg, el, i, arr) {
    return agg + el.revenue;}, 0);
};

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
};

