// Code your solution in this file!

const logDriverNames = (function(drivers){
    return drivers.forEach(function(driver){
        console.log(driver.name);
    });
});

const logDriversByHometown = (function(drivers, location){
    return drivers.forEach(function(driver){
        if (driver.hometown === location) {
            console.log(driver.name);
        }
    });
});

const driversByRevenue = (function(drivers){
    let sorted_drivers = drivers.slice();
    return sorted_drivers.sort(function(a, b){
        return a.revenue - b.revenue;
    });
});

const driversByName = (function(drivers){
    let sorted_drivers = drivers.slice();
    return sorted_drivers.sort(function(a, b){
        return a.name.localeCompare(b.name);
    });
});

const aggregateRevenue = (function(aggregate, driver, i, drivers){
        return aggregate + driver.revenue;
    });

const totalRevenue = (function(drivers){
    return drivers.reduce(aggregateRevenue, 0);
});

const averageRevenue = (function(drivers){
    return drivers.reduce(aggregateRevenue, 0) / drivers.length;
});