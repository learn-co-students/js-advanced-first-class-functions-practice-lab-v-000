function logDriverNames (drivers) {
  drivers.forEach( function (driver) {
    console.log(driver.name);
  });
};

function logDriversByHometown (drivers, location) {
  drivers.forEach( function (driver) {
    if (driver.hometown === location) console.log(driver.name);
  });
};

function driversByRevenue (drivers) {
  const sortedDrivers = [...drivers];

  return sortedDrivers.sort( function (a, b) {
    return a.revenue - b.revenue;
  });
};

function driversByName (drivers) {
  const sortedDrivers = [...drivers];

  return sortedDrivers.sort( function (a, b) {
    return a.name.localeCompare(b.name);
  });
};

function totalRevenue(drivers) {
  return drivers.reduce( function totaler (total, revenue, i, arr)  {
    return total + arr[i].revenue;
  }, 0);
};

function averageRevenue(drivers) {
  const total = drivers.reduce( function totaler (total, revenue, i, arr)  {
    return total + arr[i].revenue;
  }, 0);
  return total / drivers.length;
};
