// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach(function(driver) {
        console.log(driver.name);
      });
};

function logDriversByHometown(drivers, hometown) {
    drivers.forEach(function(driver) {
        if (hometown === driver.hometown) {
        console.log(driver.name);
        };
    });
};

function driversByRevenue(drivers) {
    return drivers.slice().sort(function(a, b) {
        return a.revenue - b.revenue;
    });
 };

 function driversByName(drivers) {
    return drivers.slice().sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        };
        if (nameA > nameB) {
          return 1;
        };
        // names must be equal
        return 0;
    });
 };

//takes in drivers array of objects
function totalRevenue(drivers) {
    //totalRevenue accumulates the total revenue of all drivers by adding each driver revenue to the total Revenue variable
    const totalRevenue = (currentValue, driver) => currentValue + driver.revenue;
    //returns the sum of the revenue earned by each driver.
    return drivers.reduce(totalRevenue, 0)
}

function averageRevenue(drivers) {
    return totalRevenue(drivers)/drivers.length
}
