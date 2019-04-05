function logDriverNames(drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
};

function logDriversByHometown(drivers, hometown) {
  const filteredDrivers = drivers.filter(function(driver) {
    return driver.hometown === hometown
  });
  logDriverNames(filteredDrivers);
};

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a,b) {
    return a.revenue - b.revenue;
  });
};

function driversByName(drivers) {
  return drivers.slice().sort(function(a,b) {
    return a.name.localeCompare(b.name);
  });
};

function totalRevenue(drivers) {
  return drivers.reduce(function(total, current) {
    return total + current.revenue;}, 0);
};

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
