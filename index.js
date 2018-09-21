// Code your solution in this file!


const logDriverNames = function (drivers) {
  drivers.forEach (function (element) {
  console.log(element.name);
  });
};

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (element) {
    if (element.hometown === hometown) {
      console.log(element.name);
    }
  });
};

const driversByRevenue = function (drivers) {
  return drivers.slice().sort( function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = function (drivers) {
  return drivers.reduce( function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
