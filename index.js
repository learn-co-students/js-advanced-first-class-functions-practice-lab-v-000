function logDriverNames(drivers) {
    drivers.forEach(function(driver) {console.log(driver.name)})
}

function logDriversByHometown(drivers, location) {
    drivers.forEach(function(driver) {if (driver.hometown === location) {console.log(driver.name)}})
}

function driversByRevenue(drivers) {
    let sortedDrivers = drivers.slice(0);
    sortedDrivers.sort(function(a, b) {return a.revenue - b.revenue;})
    return sortedDrivers;
}

function driversByName(drivers) {
    let sortedDrivers = drivers.slice(0);
    sortedDrivers.sort(function(a, b) {return a.name.localeCompare(b.name)});
    return sortedDrivers;
}

function totalRevenue(drivers) {
    return drivers.reduce((sum, driver) => sum + driver.revenue, 0);
}

function averageRevenue(drivers) {
    return totalRevenue(drivers)/drivers.length;
}
