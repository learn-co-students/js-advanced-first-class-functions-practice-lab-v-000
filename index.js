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
    return drivers.sort(function (lowest, highest){
        return lowest.revenue - highest.revenue 
    });
};

const driversByName = function (drivers){
    return drivers.sort(function (first, last){
        return first.name.localeCompare(last.name);
    });
};



