function logDriverNames(drivers) {
  drivers.forEach((driver, i, drivers) => console.log(driver.name));
}

function logDriversByHometown(drivers, location) {
  drivers.forEach((driver, i, drivers) => {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  return [...drivers].sort((a,b) => a.revenue - b.revenue);
}

function driversByName(drivers) {
  return [...drivers].sort((a,b) => a.name.localeCompare(b.name));
}

function totalRevenue(drivers) {
  return drivers.reduce((sum, driver) => sum + driver.revenue, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
