// Code your solution in this file!
const logDriverNames = function(drivers){
    drivers.forEach(function(el, i, ar){
        console.log(el.name);
    });
}

const logDriversByHometown = function(drivers, hometown){
    drivers.forEach(function (el, i, ar){
        if (el.hometown === hometown){
            console.log(el.name);
        }
    });
}

const driversByRevenue = function(drivers){
    const sortedDrivers = [...drivers];
    return sortedDrivers.sort(function(d1, d2){
        return d1.revenue - d2.revenue;
    });
}

const driversByName = function(drivers){
    const sortedDrivers = [...drivers];
    return sortedDrivers.sort(function (d1, d2){
        return d1.name.localeCompare(d2.name);
    });
}

const totalRevenue = function(drivers){
    return drivers.reduce(
        function(agg, el, i, arr){
            return agg + el.revenue;
        },
        0
    );
}

const averageRevenue = function(drivers){
    return totalRevenue(drivers) / drivers.length;
}