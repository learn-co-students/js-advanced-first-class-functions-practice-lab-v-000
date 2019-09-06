// Code your solution in this file!

function logDriverNames(drivers) {
    drivers.forEach(function(driver) {
        console.log(driver.name);
    });
}

function logDriversByHometown(drivers, hometown) {
    let driverList = drivers.filter(driver => driver.hometown === hometown);
    driverList.forEach(function(driver) {console.log(driver.name)});
}

function driversByRevenue(drivers) {
    let revByDrivers = [...drivers];
    revByDrivers.sort(function (a, b) {
        return a.revenue - b.revenue;
    });
    return revByDrivers;
}

function driversByName(drivers) {
    let sortedDrivers = [...drivers];
    sortedDrivers.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        } 
        if (a.name > b.name) {
            return 1;
        }
          return 0;
        });
    return sortedDrivers;
}

function totalRevenue(drivers) {
    var initialValue = 0;
    var sum = drivers.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.revenue;
    },initialValue)

    return sum;
}

function averageRevenue(drivers) {
    let avg = totalRevenue(drivers) / drivers.length;
    return avg;
}