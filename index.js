// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach((driver) => console.log(driver.name));
};

function logDriversByHometown(drivers, location) {
  const matched = drivers.filter(driver => driver.hometown === location);
  logDriverNames(matched);
};

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a,b){
    return a.revenue - b.revenue;
  });
};

function driversByName(drivers){
  return drivers.slice().sort(function(a,b){
    return a.name.localeCompare(b.name);
  });
};

function callback(total, currentDriver){
  return currentDriver.revenue + total;
};

function totalRevenue(drivers) {
  return drivers.reduce(callback, 0);
};

function averageRevenue(drivers){
  return totalRevenue(drivers) / (drivers.length);
};
