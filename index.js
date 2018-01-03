// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function(a,b) {
    return a.revenue > b.revenue;
  });
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function(a,b) {
    return a.name > b.name;
  });
}

const revenues = function sumRevenue(total, driver) {
  return total + driver.revenue;
}

function totalRevenue(drivers) {
  return drivers.reduce(revenues, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
