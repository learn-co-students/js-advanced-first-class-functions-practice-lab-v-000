const logDriverNames = function(drivers) {
    drivers.forEach(function(el, i, arr) {
        console.log(arr[i].name)
    })
}

const logDriversByHometown = function(drivers, location) {
    drivers.forEach(function(el, i, arr) {
        if (el.hometown === location) {
            console.log(el.name);
        }
    })
}

const driversByRevenue = function(drivers) {
   const revDrivers = [...drivers]
    return revDrivers.sort(function (a, b) {
        return a.revenue - b.revenue
    })
}

const driversByName = function(drivers) {
    const nameDrivers = [...drivers];
    return nameDrivers.sort(function(a, b) {
        return (a.name).localeCompare(b.name);
    });
}

const totalRevenue = function(drivers) {
    return drivers.reduce(function(agg, el, i, arr) {
        return el.revenue + agg
    }, 0)
}

const averageRevenue = function(drivers) {
    return totalRevenue(drivers)/drivers.length

}
