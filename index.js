// Code your solution in this file!

function logDriverNames(drivers) {
    drivers.forEach(function (driver){
        console.log(driver.name);
    });
};

function logDriversByHometown(drivers, hometown) {
    drivers.forEach(function (driver){
        if (driver.hometown === hometown){
            console.log(driver.name);
        };
    });
};

function driversByRevenue(drivers) {
    let sortDriversByRevenue = drivers.slice();
        return sortDriversByRevenue.sort(function(a,b){
             return a.revenue - b.revenue;
        });
};

function driversByName(drivers) {
    let sortDriversByName = drivers.slice();
        return sortDriversByName.sort(function(a,b){
            return a.name.localeCompare(b.name);
    });
};

function totalRevenue(drivers) {
    return drivers.reduce(function(total, start){
        return total + start.revenue;}, 0);
};

function averageRevenue(drivers) {
    return totalRevenue(drivers)/drivers.length;
};