// Code your solution in this file!

function logDriverNames(drivers) {
    drivers.forEach(function (driver) {
        console.log(driver.name);
    });
}

function logDriversByHometown(drivers, location) {
    drivers.forEach(function (driver) {
        if (driver.hometown === location) {
            console.log(driver.name);
        }
    })
}

const driversByRevenue = function (drivers) {
    const driversRevSort = [...drivers];
    return driversRevSort.sort(function (a, b) {
        return a.revenue - b.revenue;
    });
}

const driversByName = function (drivers) {
    const driversNameSort = [...drivers];
    return driversNameSort.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
}

const totalRevenue = function (drivers) {
    return drivers.reduce( function (agg, element) {
        return agg + element.revenue;
    }, 0);
}

const averageRevenue = function (drivers) {
    return totalRevenue(drivers)/drivers.length;
}