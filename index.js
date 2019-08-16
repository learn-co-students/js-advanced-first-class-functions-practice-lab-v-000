// Code your solution in this file!
//function logDriverNames(drivers) {
//    const cb = function (driver, i, drivers) {
//        console.log(driver.name)
//    }
//    return drivers.forEach(cb);
//}

const logDriverNames = function (drivers) {
    drivers.forEach(function(driver){
        console.log(driver.name);
    })
}

const logDriversByHometown = function (drivers, location) {
    drivers.forEach(function(driver) {
        if (driver.hometown === location) {
            console.log(driver.name);
        }
    })
}

const revenueSorter = function (driver1,driver2) {
    return driver1.revenue - driver2.revenue;
}

const driversByRevenue = function (drivers) {
    return drivers.slice().sort(revenueSorter);
}

const nameSorter = function (a,b) {
    return a.name.localeCompare(b.name);
}

const driversByName = function (drivers) {
   return drivers.slice().sort(nameSorter);
}

const totalRevenue = function (drivers) {
    let totalRevenue = 0;

    drivers.forEach(function (driver) {
        totalRevenue += driver.revenue;
    });
    return totalRevenue;
}

const averageRevenue = function (drivers) {
    return totalRevenue(drivers) / drivers.length;
}
