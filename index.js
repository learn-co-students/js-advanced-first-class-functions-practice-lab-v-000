import { doesNotReject } from "assert";

// Code your solution in this file!


function logDriverNames(drivers) {

    const displayName = function(el, i, array) {
        console.log(el.name)
    };

    return drivers.forEach(displayName);

};

function logDriversByHometown(drivers, hometown) {
// iterate over each element of the array
// inspect the element's hometown value and see if it matches the argument passed in.
// if it doesNotReject, then log the name of the driver.
    const displayName = function(el, i, array) {
        if (hometown === el.hometown) {
        console.log(el.name)
        }
    };

    return drivers.forEach(displayName);

};

function driversByRevenue(drivers) {
    // sort the drivers from highest to lowest by revenue earned
    const driversCompareFunction = function(a,b) {
        return a.revenue - b.revenue;
    }

    return [...drivers].sort(driversCompareFunction);
};

function driversByName(drivers) {
    const driversComparator = function(a,b) {
        return a.name.localeCompare(b.name);
    };

    return [...drivers].sort(driversComparator);
};

function totalRevenue(drivers) {
    const reducer = function (accumulator, currentValue) {
        return accumulator + currentValue.revenue;
    };

    return drivers.reduce(reducer, 0);
};

function averageRevenue(drivers) {
    return (totalRevenue(drivers)) / (driversByName(drivers).length) ;
};

