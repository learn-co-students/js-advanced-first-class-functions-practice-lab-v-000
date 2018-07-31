// Code your solution in this file!
const logDriverNamesCallback = function (el, i, arr){
    console.log(el.name);
}

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

/* MY ORIGINAL SOLUTION. IDK WHY IM HAVING ISSUES
function driversByRevenue(drivers){
    let byRev = [...drivers];
    byRev = drivers.sort(comparator);
    return byRev;
}

const comparator = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue
};

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
    return (drivers.reduce(reduceRev, 0))/ (drivers.length);
}

