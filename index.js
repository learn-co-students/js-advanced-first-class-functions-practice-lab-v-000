// Code your solution in this file!


function logDriverNames(drivers) {
  return drivers.forEach(function(driver) {
  console.log(driver.name);
 });
}


function logDriversByHometown(drivers, hometown) {
  return drivers.forEach(function(driver) {
    if (driver.hometown === hometown)
      console.log(driver.name);
    });
  }

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a,b) {
      return a.revenue - b.revenue;
    });
  }

function driversByName(drivers) {
  return drivers.slice().sort(function(a,b) {
      return a.name.localeCompare(b.name);
    });
  }

  function totalRevenue(drivers) {
      return drivers.reduce((total, currentDriver) => {
        return total + currentDriver.revenue;
      }, 0);
    }

    function averageRevenue(drivers) {
        return drivers.reduce((total, currentDriver) => {
          return total + currentDriver.revenue;
        }, 0) / drivers.length;}
