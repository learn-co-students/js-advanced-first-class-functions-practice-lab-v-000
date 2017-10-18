// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(x){
      console.log(x.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(x){
    if (x.hometown === hometown) {
        console.log(x.name)
    }
  })
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName = function(drivers) {
  return drivers.slice().sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  })
}

const totalRevenue = function(drivers) {
  return drivers.reduce(function(total, driver) {
    return driver.revenue + total;
  }, 0);
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}
