// Code your solution in this file!
const logDriverNames = function (drivers) {
    drivers.forEach(driver => console.log(driver.name))
};

const logDriversByHometown = function (drivers, hometown) {
    drivers.forEach(function (driver) {
        if (driver.hometown === hometown) {
            console.log(driver.name)
        };
    });
};

const driversByRevenue = function(drivers) {
    return drivers.slice().sort(function (a, b) {
        return a.revenue - b.revenue
      })
}

function driversByName(drivers) {
    return drivers.slice().sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }

  function totalRevenue(drivers) {
      let totalRevenue = 0 

      drivers.forEach(driver => totalRevenue += driver.revenue)

      return totalRevenue
  }

  function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length
  }