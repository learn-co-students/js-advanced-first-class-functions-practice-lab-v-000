function logDriverNames(drivers) {
    drivers.forEach(function (driver) {
        return console.log(driver.name);
    });
};
function logDriversByHometown(drivers, location) {
    hometownDrivers = drivers.filter(function (driver) {
        return driver.hometown === location;
    });
    
    return logDriverNames(hometownDrivers);
};
function driversByRevenue(drivers) {
    const revenueDrivers = drivers.slice();
    return revenueDrivers.sort(function (a, b) {
       return a.revenue - b.revenue;
    });
};
function driversByName(drivers) {
    const nameDrivers = drivers.slice();
    return nameDrivers.sort(function (a, b) {
       return a.name.localeCompare(b.name);
    });
};
function totalRevenue(drivers) {
    const driverRev = drivers.map(function (driver) {
        return driver.revenue;
    })
    return driverRev.reduce((agg, val) => agg + val);
};
function averageRevenue(drivers) {
    return totalRevenue(drivers)/drivers.length;
};
