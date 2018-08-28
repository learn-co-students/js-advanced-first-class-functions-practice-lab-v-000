// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach( driver => console.log(driver.name));
}

function logDriversByHometown(drivers, town) {
  drivers.forEach( function (driver) {
    if (driver.hometown === town) console.log(driver.name);
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort( (a,b) => a.revenue - b.revenue );
}

function driversByName(drivers) {
  return drivers.slice().sort( (a,b) => a.name.localeCompare(b.name));
}

function totalRevenue(drivers) {
  const sumUpRevenue = function (total, driver) {
    return total + driver.revenue;
  };
  return drivers.reduce ( sumUpRevenue, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
}
