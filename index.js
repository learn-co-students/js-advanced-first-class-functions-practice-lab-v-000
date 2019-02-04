// Code your solution in this file!
function logDriverNames(drivers) {
    const printNames = function (el, i, arr) {
        console.log(el.name);
    }
    
    drivers.forEach(printNames);
}

function logDriversByHometown(drivers, hometown){
    const searchedDrivers = drivers.filter(function(driver) {
        return driver.hometown === hometown 
    });

    logDriverNames(searchedDrivers);
}

function driversByRevenue(drivers) {
    const byRevenue = function (dr1, dr2) {
        return dr1.revenue - dr2.revenue;
    };    
    
    const copiedDrivers = drivers.slice();

    return copiedDrivers.sort(byRevenue);
}

function driversByName(drivers) {
    const byName = function (dr1, dr2) {
        a = dr1.name.toUpperCase();
        b = dr2.name.toUpperCase();

        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
        return 0;
    };    

    const copiedDrivers = drivers.slice();
    return copiedDrivers.sort(byName);
}

function totalRevenue(drivers) {
    const totalRevenues = function(agg, el, i, arr) {
        return agg + el.revenue;
    }

    return drivers.reduce(totalRevenues, 0);
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
}