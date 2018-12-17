// Code your solution in this file!
function logDriverNames(drivers) {
    return drivers.forEach(function(el, i, arr) {
        console.log(el.name) 
    });
};

function logDriversByHometown(drivers, town) {
    drivers.forEach(function(el, i, arr) {
        if (el.hometown === town) {
            console.log(el.name);
        };
    });
};

function driversByRevenue(drivers) {
    return [...drivers].sort(function(a, b) { 
        const revenueA = a.revenue;
        const revenueB = b.revenue;
        return revenueA - revenueB;
    });
};

function driversByName(drivers) {
    return [...drivers].sort(function(a, b) {
        const nameA = a.name;
        const nameB = b.name;
        return nameA.localeCompare(nameB);
    })
};

function totalRevenue(drivers) {
    return drivers.reduce(function(agg, el, i, arr) {
        return agg + el.revenue;
    }, 0);
};

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
}
