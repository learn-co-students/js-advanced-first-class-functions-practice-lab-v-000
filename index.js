function logDriverNames(drivers){
    drivers.forEach(function(driver){
        console.log(`${driver.name}`);
    });
}


function logDriversByHometown(drivers, hometown){
    drivers.forEach(function(driver){
        if (driver.hometown === hometown)
            console.log(`${driver.name}`);
    });
}

function driversByRevenue(drivers){
    const copyDrivers = [...drivers];
    const sortedDrivers = function(driver1, driver2){
     return driver1['revenue'] - driver2['revenue'];
    };
    return copyDrivers.sort(sortedDrivers);
}

function driversByName(drivers){
    const copyDrivers = [...drivers];
    const sortedDrivers = function(driver1, driver2){
     return driver1['name'].localeCompare(driver2['name']);
    };
    return copyDrivers.sort(sortedDrivers);
}

function totalRevenue(drivers){
    let total = 0;
    drivers.forEach(function(driver){
      total += driver.revenue;
    });
    return total;
  }


function averageRevenue(drivers){
   return totalRevenue(drivers) / drivers.length;
  }
  
  