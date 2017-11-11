// Code your solution in this file!
function logDriverNames (drivers) {
  drivers.map(function (driver) {console.log(driver.name);});
}

function logDriversByHometown (drivers, hometown) {

  const filteredDrivers = drivers.filter(function (driver) {return driver.hometown === hometown});
  return filteredDrivers.map(function (driver) {console.log(driver.name);});

}

function driversByRevenue (drivers) {
  const comparator = function(a,b) {
    return a.revenue - b.revenue;
  };

  const arrayTwo = drivers.map(function(driver) {return driver;});
  return arrayTwo.sort(comparator);
}

function driversByName (drivers) {
  const driversSorted = drivers.map(function (driver) {return driver;})

  return driversSorted.sort(function (a,b) {
    return a.name.localeCompare(b.name);
  });

}

//console.log('-----------------------------------');

function totalRevenue (drivers) {
  revenue = 0
  drivers.map(function (driver) {return revenue += driver.revenue});
  return revenue;
}

function averageRevenue (drivers) {
  const revenueTotal = totalRevenue(drivers)
  return (revenueTotal / drivers.length);
}
