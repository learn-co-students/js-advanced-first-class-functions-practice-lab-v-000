function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name))
};

function logDriversByHometown(drivers, hometown) { //going to filter due to "match" keyword
  return logDriverNames(drivers.filter(driver => driver.hometown === hometown));
}

function driversByRevenue(drivers) {
  const revDrivers = drivers.slice(); //using .slice to return a new array
  return revDrivers.sort(function(a, b) {
    return a.revenue - b.revenue
  });
};

function driversByName(drivers) {
  const nameDrivers = drivers.slice();
  return nameDrivers.sort(function(a, b) {
    return (a.name).localeCompare(b.name)
  });
};

function totalRevenue(drivers) {
  return drivers.reduce(function(total, driver) {
    return driver.revenue + total
  }, 0);
};

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length //divide total by how many drivers.
};
