// Code your solution in this file!
const logDriverNames = function (drivers) {
    drivers.forEach(function(driver) {
      console.log(driver.name)
    })
}

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
    console.log(driver.name) }
  })
}

const driversByRevenue = function(drivers) {
  return drivers = drivers.slice(0).sort(function(el1, el2) {
    return el1.revenue - el2.revenue;
  });
};

const driversByName = function(drivers) {
  return drivers = drivers.slice(0).sort(function(el1,el2) { return el1.name.localeCompare(el2.name);
  });
};

const totalRevenue = function(drivers) {
  return drivers.reduce(function(total, driver) {
     return total + driver.revenue}, 0 );
};
