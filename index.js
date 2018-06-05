function logDriverNames(drivers){
    drivers.forEach(function(driver){
        console.log(driver.name);
    })
};

function logDriversByHometown(drivers, town){
    drivers.forEach(function (driver){
        if (driver.hometown === town)
        console.log(driver.name); 
    })
};

function driversByRevenue(drivers){
    const newDrivers = drivers.slice()
        newDrivers.sort(function (a, b){
        return a.revenue - b.revenue;
    })
    return newDrivers;
};

function driversByName(drivers){
    const newDrivers = drivers.slice()
        return newDrivers.sort(function (a, b){
            return (a.name).localeCompare(b.name);
        })
};

function totalRevenue(drivers){
    return drivers.reduce((a, b) => a + b.revenue, 0)
};

function averageRevenue(drivers){
    return totalRevenue(drivers) / drivers.length;
};