const logDriverNames = function (drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
}

// Uses slice() to make it a nondestructive returned array.
const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(firstDriver, secondDriver) {
    return firstDriver.revenue - secondDriver.revenue;
  })
}

const driversByName = function(drivers) {
  return drivers.slice().sort(function(firstDriver, secondDriver) {
    return firstDriver.name.localeCompare(secondDriver.name);
  })
}

// reduce syntax: arr.reduce(callback[, initialValue]) 
const totalRevenue = function(drivers) {
  return drivers.reduce(function(total, driver) {return driver.revenue + total;}, 0);
}


const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
}