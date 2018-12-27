// Code your solution in this file!


function logDriverNames(drivers) {
    drivers.forEach(function(driver){
        console.log(driver.name)
    });
}

function logDriversByHometown(drivers, hometown) {
     drivers.filter(function(driver) {
    return driver.hometown == hometown
    }).forEach(function(driver) {
      console.log(driver.name)
      })
  
    }

    function driversByRevenue(drivers) {
        var newArray = drivers.slice()
        return newArray.sort(function (driver_a, driver_b){
            return driver_a.revenue - driver_b.revenue
        });
    }

    function driversByName(drivers) {
         var newArray = drivers.slice()
        return newArray.sort(function(driver_a, driver_b){
            return driver_a.name.localeCompare(driver_b.name);
        })
    }


    const totalRevenue = function (drivers) {
        return drivers.reduce(function (sum, driver) {
          return sum + driver.revenue;
        }, 0);
      };


      const averageRevenue = function(drivers){
        return totalRevenue(drivers)/ drivers.length;
    };