// Code your solution in this file!

const logDriverNames = function(drivers) {
    drivers.forEach(function(el) {
        console.log(el.name);
    });
};

const logDriversByHometown = function(drivers, location) {
    drivers.forEach(function(driver) {
        if (driver.hometown === location) {
            console.log(driver.name);
        }
    });
};

const driversByRevenue = function(drivers) {
    const revSorter = function(a,b) {
        return a.revenue - b.revenue;
    };

   return drivers.slice(0).sort(revSorter);
};

const driversByName = function(drivers) {
    const driverSorter = function(a,b) {
       return a.name.localeCompare(b.name);
    };

    return drivers.slice(0).sort(driverSorter);
};

const totalRevenue = function(drivers) {
    const revReducer = function(agg, el) {
        return agg + el.revenue;
    };

    return drivers.reduce(revReducer, 0);
};

const averageRevenue = function(drivers) {
    return totalRevenue(drivers) / drivers.length;
};