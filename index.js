function logDriverNames(drivers) {
  return drivers.forEach(function(el) {
    console.log(el.name);
  });
}

function logDriversByHometown(drivers, hometown) {
  return drivers.forEach(function(el) {
    if(el.hometown === hometown) {
      console.log(el.name);
    }
  });
}

function driversByRevenue(drivers) {
  newDrivers = drivers.slice();
  const comparator = function(driver1, driver2) {
    if (driver1.revenue < driver2.revenue)
      return -1;
    else if (driver1.revenue> driver2.revenue)
      return 1;
    else
      return 0;
    };
  return newDrivers.sort(comparator);
}

function driversByName(drivers) {
  newDrivers = drivers.slice();
  const comparator = function(driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  };
  return newDrivers.sort(comparator);
}

function totalRevenue(drivers) {
  const reducer = function(agg, driver) {
    return agg + driver.revenue;
  };
  return drivers.reduce(reducer, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
