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

function totalRevenue(drivers) {
    
    const revenueArray = drivers.map(driver => driver.revenue)
    console.log(revenueArray)
    const reducer = (currentValue, driver.revenue) => { return currentValue + revenue ;}
    //console.log(drivers.reduce(reducer));
}

//function totalRevenue(drivers) {
//const totalRevenue = (drivers.revenue + totalRevenue)
//return drivers.reduce((revenue, totalRevenue) => {
    //return totalRevenue + drivers.revenue;
//});
//};

