// Code your solution in this file!
function logDriverNames(drivers) {
  for (const element of drivers) {
      console.log(element.name);
  }
};

function logDriversByHometown(drivers, location) {
  for (const element of drivers) {
    if (element.hometown === location) {
      console.log(element.name)
    }
  }
};

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a,b){
    return a.revenue - b.revenue;
  });
};

function driversByName(drivers) {
  return drivers.slice().sort(function (a,b) {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function(drivers) {
  return drivers.reduce(function(total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
};