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
    const sortedDrivers = function(driver1, driver2){
    return driver1['revenue'] - driver2['revenue'];
    };
    return drivers.sort(sortedDrivers);
}


// const numberSorter = function (num1, num2) {
//     return num1 - num2;
//   };
   
//   primes.sort(numberSorter);