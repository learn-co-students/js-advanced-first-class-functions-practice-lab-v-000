function logDriverNames(drivers) {
    drivers.forEach(function (driver) {
        console.log(driver.name);
    });
}

function logDriversByHometown(drivers, hometown) {
    drivers.forEach(function (driver) {
        if (driver.hometown === hometown) {
            console.log(driver.name);
        }
    });
}

function driversByRevenue(drivers) {
    sorted = [ ...drivers ]
    sorted.sort(function (a, b) {
        return a.revenue - b.revenue;
    });
    return sorted;
}

function driversByName(drivers) {
    sorted = [ ...drivers ];
    sorted.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    return sorted;
}

function totalRevenue(drivers) {
    total = drivers.reduce(function (agg, el, i, arr) {
        return agg + el.revenue;
    }, 0);
    return total;
}

function averageRevenue(drivers) {
    average = totalRevenue(drivers) / drivers.length;
    return average;
  }

