function logDriverNames(drivers) {
  drivers.forEach( driver => {
    console.log(driver.name);
  })
};

function logDriversByHometown(drivers, hometown) {
  return drivers.filter( driver => driver.hometown === hometown).forEach( driver => console.log(driver.name))
}

function driversByRevenue(drivers) {
  return [...drivers].sort( (a, b) => a.revenue - b.revenue )
}

function driversByName(drivers) {
  return [...drivers].sort( (a, b) => a.name.localeCompare(b.name));
}

function totalRevenue(drivers) {
  return drivers.reduce((accumulator, driver) => accumulator + driver.revenue, 0);
}

function averageRevenue(drivers) {
  return drivers.reduce((accumulator, driver) => accumulator + driver.revenue, 0) / drivers.length;
}
