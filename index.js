// Code your solution in this file!
function logDriverNames(arr){
    arr.forEach(function(driver){
        console.log(driver.name);
    });
}

function logDriversByHometown(arr, town){
    const matching = arr.filter(function(driver){
        return driver.hometown == town;
    });
    logDriverNames(matching);
}

function driversByRevenue(arr){
    const copy = arr.slice();
    const rev = copy.sort(function(d1, d2){
        return d1.revenue - d2.revenue;
    });
    return rev;
}

function driversByName(arr){
    const copy = arr.slice();
    return copy.sort(function(a,b){
        return a.name.localeCompare(b.name);
    });
}

function totalRevenue(arr){
    const copy = arr.slice();
    const totaler = function(agg, el, ind, arr){
        return agg + el.revenue;
    }
    return copy.reduce(totaler, 0)
}

function averageRevenue(arr){
    const copy = arr.slice();
    return totalRevenue(copy) / copy.length; 
}