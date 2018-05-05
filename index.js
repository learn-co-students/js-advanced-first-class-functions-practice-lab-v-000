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
    drivers.slice().sort(function(dOne, dTwo) {
      return dOne.revenue - dTwo.revenue;
    });
};