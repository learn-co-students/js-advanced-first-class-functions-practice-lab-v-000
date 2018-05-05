const logDriversCallback = function (el, i, arr) {
  console.log(el.name);
}

function logDriverNames(driver) {
  driver.forEach(logDriversCallback);
}


function logDriversByHometown(driver, location) {
  driver.forEach(function(d, i, arr) {
    if (d.hometown === location) {
      console.log(d.name);
    }
  });
}

const driversByRevenue = function (drivers) {
    return drivers.slice().sort(function(dOne, dTwo) {
      return dOne.revenue - dTwo.revenue;
    });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function())
}