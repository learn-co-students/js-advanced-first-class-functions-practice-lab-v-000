// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach(d => console.log(d.name));
}

function logDriversByHometown(drivers, location) {
    drivers.forEach(driver => {
        if (driver.hometown === location) {
            console.log(driver.name)
        }
    })
}

function driversByRevenue(drivers) {
    return [...drivers].sort((driverOne, driverTwo) => {
        return driverOne.revenue - driverTwo.revenue;
    })
}

function driversByName(drivers) {
    return [...drivers].sort((driverOne, driverTwo) => {
        return driverOne.name.localeCompare(driverTwo.name);
    })
}

function totalRevenue(drivers) {
    return drivers.reduce((total, currentDriver) => { 
        return currentDriver.revenue + total 
    }, 0);
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
}