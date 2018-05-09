function logDriverNames(drivers) {
  drivers.forEach( function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach (function(driver) {
    if (driver.hometown === hometown) {
        console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers) {
  const driversCopy = [...drivers];

  return driversCopy.sort( function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  const driversCopy = [...drivers];

  return driversCopy.sort( function(a, b) {
    return a.name > b.name;
  });
}

function totalRevenue(drivers) {

  function reduceDriverRevenue(aggregate, element, index, array) {
    return aggregate + element.revenue;
  };

  return drivers.reduce(reduceDriverRevenue, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
