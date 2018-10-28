// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(el) {
    return console.log(el.name);
  });
};

function logDriversByHometown(drivers, home) {
  drivers.forEach(function(el) {
    if(el.hometown === home){
      console.log(el.name);
    };
  });
};

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue;
  });
};

function driversByName(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
};

function totalRevenue(drivers) {
  return drivers.reduce(function(total, driver) {
    return total + driver.revenue;
  },0);
};

const averageRevenue = function(driver) {
  return totalRevenue(driver) / driver.length;
}
