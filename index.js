// Code your solution in this file!
const logDriverNamesCallback = function (el, i, arr){
    console.log(el.name);
}

// This works because we do not need to pass any function level variables across

function logDriverNames(drivers){
    drivers.forEach(logDriverNamesCallback);
};


     


function logDriversByHometown(drivers, hometown){
    drivers.forEach(function (driver){
        if (driver.hometown === hometown){
            console.log(driver.name);
        };
    });
}

//  MY ORIGINAL SOLUTION. WE HAVE TO INVOKE THE COMPARATOR FUNCTION WITH PARENTHESIS
/*
function driversByRevenue(drivers){
    let byRev = [...drivers];
    byRev = drivers.sort(comparator());
    return byRev;
}

function comparator(driver1, driver2) {
    return driver1.revenue - driver2.revenue
};

if comparator was a constant we wouldn't be able to pass the drivers array to it. 
*/
function driversByRevenue(drivers){
    let byRev = [...drivers];
    byRev.sort((a,b) => {return a.revenue - b.revenue})
    return byRev;
};


function driversByName(drivers){
    let byName = [...drivers];
    byName.sort((a,b) => {return a.name > b.name})
    return byName;
}

function totalRevenue(drivers){
   return drivers.reduce(reduceRev, 0);
}

const reduceRev = function (totalRev, driver, index, drivers){
    return totalRev + driver.revenue;
}

function averageRevenue(drivers){
    return totalRevenue(drivers) / drivers.length;
}

