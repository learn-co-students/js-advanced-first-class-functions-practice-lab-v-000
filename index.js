const logDriverNames = function (drivers) {
    drivers.forEach (function (driver) {
        console.log (driver.name);
    })
}

const logDriversByHometown = function (drivers, location) {
    drivers.forEach (function (driver) {
        if (driver.hometown === location) {
        console.log (driver.name)
        }
    })
}

const driversByRevenue = function (drivers) {
    newArray = [...drivers].sort(function (a,b) {
        return a.revenue - b.revenue;
    })
    return newArray;
}

const driversByName = function (drivers) {
    newArray = [...drivers].sort(function (a,b) {
        return a.name.localeCompare(b.name);
    })
    return newArray;
}

const totalRevenue = function (drivers) {
    return drivers.reduce (function (total, driver) {
        return driver.revenue + total;
    }, 0); 
    // The 0 provides an initial value, causing reduce to start at the first item in the array
}

const averageRevenue = function (drivers) {
    return totalRevenue(drivers) / drivers.length;
}