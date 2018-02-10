// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach(function(driver) {console.log(driver.name);});
}

function logDriversByHometown(drivers, city) {
    drivers.forEach(function(driver) {
        if (driver.hometown === city) {
            console.log(driver.name);
        }
    })
}

function driversByRevenue(drivers) {
    const copydrivers = [...drivers];
     return copydrivers.sort(function (a, b) {
      return a.revenue - b.revenue;
    })
}

function driversByName(drivers) {
    const copydrivers = [...drivers];
    
    return copydrivers.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    })
}

function totalRevenue(drivers) {
    const reducer = (totalrevenue, currentvalue) => totalrevenue + currentvalue.revenue;
    return drivers.reduce(reducer, 0);
}

function averageRevenue(drivers) {
    const number = drivers.length;
    return totalRevenue(drivers)/number ;
}