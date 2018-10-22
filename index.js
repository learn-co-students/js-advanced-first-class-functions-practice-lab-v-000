function logDriverNames(list){
    return list.forEach(function(driver){console.log(driver.name);});
};


function logDriversByHometown(list, home){
    return list.forEach(function(driver){
        if (driver.hometown === home){
        console.log(driver.name);
        };
    });
};

// sorting numbers
function driversByRevenue(list){
    return list.slice().sort(function(driver1, driver2){
        return driver1.revenue - driver2.revenue;
    });
};

//sorting strings
const driversByName = function(list){
    return list.slice().sort(function(driver1, driver2){
        return driver1.name.localeCompare(driver2.name);
    });
};

const totalRevenue = function(list){
    return list.reduce(function(accumulator, driver){
        return accumulator + driver.revenue;
    }, 0);
};

const averageRevenue = function(list){
    return totalRevenue(list)/list.length;    
    };