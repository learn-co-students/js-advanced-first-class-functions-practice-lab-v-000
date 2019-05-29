// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach(function(e) {
        console.log(e.name)
    })
}

function logDriversByHometown(drivers,location) {
      drivers.forEach(function(e) {
        if (e.hometown === location) {
            console.log(e.name)
        }
    })  
}

function driversByRevenue(drivers) {
    const drivers2 = [...drivers];
    return drivers2.sort(function(a,b) {
        //console.log(a);
        return a.revenue - b.revenue;
    })
}

function driversByName(drivers) {
    const drivers2 = [...drivers];
    return drivers2.sort(function(a,b) {
        return a.name.localeCompare(b.name);
    })
}

function totalRevenue(drivers) {
    return drivers.reduce(function(agg, el, i, arr) {
         return agg + el.revenue;
    },0)
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length
}