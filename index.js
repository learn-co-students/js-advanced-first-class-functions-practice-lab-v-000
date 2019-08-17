const logDriverNames = function (array) {
  array.forEach(function (object) {
    console.log(object.name);
  })
}

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (object) {
    if (object.hometown === location) {
      console.log(object.name);
    }
  })
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (first, second) {
    return first.revenue - second.revenue;
  });
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (first, second) {
    return first.name.localeCompare(second.name);
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, driver) {
    return total + driver.revenue;
  }, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers)/drivers.length;
}