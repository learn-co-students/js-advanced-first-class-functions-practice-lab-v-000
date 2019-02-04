// Code your solution in this file!
function logDriverNames(drivers) {
    // const printNames = function (el, i, arr) {
    //     console.log(el.name);
    // }
    
    // drivers.forEach(printNames);

    return drivers.forEach(function(driver) {
        console.log(driver.name);
    });
}

function logDriversByHometown(drivers, hometown){
    // const searchedDrivers = drivers.filter(function(driver) {
    //     return driver.hometown === hometown 
    // });

    // logDriverNames(searchedDrivers);

    drivers.forEach(function(driver) {
        if (driver.hometown === hometown) {
            console.log(driver.name);
        }
    });
};

function driversByRevenue(drivers) {
    // const byRevenue = function (dr1, dr2) {
    //     return dr1.revenue - dr2.revenue;
    // };    
    
    // const copiedDrivers = drivers.slice();

    // return copiedDrivers.sort(byRevenue);

    return drivers.slice().sort(function(a, b) {
        return a.revenue - b.revenue;
    });
};

function driversByName(drivers) {
    // const byName = function (dr1, dr2) {
    //     a = dr1.name.toUpperCase();
    //     b = dr2.name.toUpperCase();

    //     if (a < b) {
    //         return -1;
    //     } else if (a > b) {
    //         return 1;
    //     }
    //     return 0;
    // };    

    // const copiedDrivers = drivers.slice();
    // return copiedDrivers.sort(byName);

    return drivers.slice().sort(function (driver1, driver2) {
        return driver1.name.localeCompare(driver2.name);
    });
};

function totalRevenue(drivers) {
    // const totalRevenues = function(agg, el, i, arr) {
    //     return agg + el.revenue;
    // }

    // return drivers.reduce(totalRevenues, 0);

    return drivers.reduce(function (total, currentDriver) {
        return total + currentDriver.revenue;
    }, 0);
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
}