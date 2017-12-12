// Code your solution in this file!

//logs the name of each driver
const logDriverNames = function (drivers) {
    drivers.forEach(function (driver) {
        console.log(driver.name);
    });
};

// logs the name of each driver whose hometown matches the passed-in argument
const logDriversByHometown = function (drivers, hometown) {
    drivers.forEach(function (driver) {
        if (driver.hometown === hometown) {
            console.log(driver.name);
        }
    });
};

// uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest)
const driversByRevenue = function (drivers) {
    return drivers.slice().sort(function (driver1, driver2) {
        return driver1.revenue - driver2.revenue;
    });
};

// uses the sort() method to return a new array of drivers ordered alphabetically by name (A to Z)
const driversByName = function (drivers) {
    return drivers.slice().sort(function (driver1, driver2) {
        return driver1.name.localeCompare(driver2.name);
    });
};

// uses the reduce() method to sum the revenue of every driver and return the total 
const totalRevenue = function (drivers) {
    return drivers.reduce(function (total, currentDriver) {
        return currentDriver.revenue + total;
    }, 0);
};

// calculates the average revenue across all drivers 
const averageRevenue = function (drivers) {
    return totalRevenue(drivers) /drivers.length;
};