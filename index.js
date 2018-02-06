// Code your solution in this file!
function logDriverNames(drivers){
    drivers.forEach(function(driver){
        return console.log(driver.name)
    })
}

function logDriversByHometown(drivers, location){
    drivers.forEach(function(driver){
        if (driver.hometown === location)
            return console.log(driver.name)
    })
}

function driversByRevenue(drivers){
    return drivers.slice().sort(function(a,b){
        return a.revenue - b.revenue
    })
}

function driversByName(drivers){
    return drivers.slice().sort(function(a,b){
        return a.name.localeCompare(b.name)
    })        
}

const totalRevenue = function(drivers){
    return drivers.reduce(function(total, currentDriver){
        return total + currentDriver.revenue;
    }, 0)
}

const averageRevenue = function(drivers){
    return drivers.reduce(function(average, currentDriver){
        return average += currentDriver.revenue / drivers.length
    }, 0);
};
