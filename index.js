// Code your solution in this file!

const logDriverNames = function (drivers){
    drivers.forEach(function (driver) {
        console.log(driver.name);
    });
};

const logDriversByHometown = function (drivers, hometown){
    drivers.forEach(function (driver){
        if (driver.hometown === hometown) { 

            console.log(driver.name);
        }
    });
};

const driversByRevenue = function (drivers){
    return drivers.slice().sort(function (lowest, highest){
        return lowest.revenue - highest.revenue 
    });
};

const driversByName = function (drivers){
    return drivers.slice().sort(function (first, last){
        return first.name.localeCompare(last.name);
    });
};

const totalRevenue = function (drivers){
    var initialValue = 0;
    return drivers.reduce(function (sum, driver){
        return driver.revenue + sum;
    }, initialValue);
};

const averageRevenue = function (drivers){
        return totalRevenue(drivers) / drivers.length;
};




