// Code your solution in this file!
const logName = function(el, i, arr) {
    console.log(el.name);
};

function logDriverNames(drivers) {
    drivers.forEach(logName);
};

function logDriversByHometown(drivers, location) {
    const filteredDrivers = drivers.filter(function (driver) { return driver.hometown.toLowerCase() === location.toLowerCase(); });
    filteredDrivers.forEach(logName);
};

function driversByRevenue(drivers) {
    const sortedDrivers = drivers.slice().sort(revenueSorter);
    return sortedDrivers;
};

const revenueSorter = function(a, b) {
    return a.revenue - b.revenue;
};

function driversByName(drivers) {
    const sortedDrivers = drivers.slice().sort(nameSorter);
    return sortedDrivers;
};

const nameSorter = function(a, b) {
    return a.name.localeCompare(b.name);
};

function totalRevenue(drivers) {
    return drivers.reduce(reduceRevenue, 0);
};

const reduceRevenue = function(agg, el, i, arr) {
    return agg + el.revenue;
}

function averageRevenue (drivers) {
    return totalRevenue(drivers)/drivers.length;
}