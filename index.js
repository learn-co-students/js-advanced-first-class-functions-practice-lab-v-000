// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function(el){
    console.log(el.name);
  });
}
const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(driver){
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

const driversByName = function(drivers, name) {
  return drivers.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = function(drivers) {
  let init = 0;
  return drivers.reduce(function(total, driver) {
    return total +  driver.revenue;
  }, init);
}

const averageRevenue = function(drivers) {
  let init = totalRevenue(drivers);
  return init / drivers.length;
}
