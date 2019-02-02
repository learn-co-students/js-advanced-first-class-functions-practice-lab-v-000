// Code your solution in this file!
function logDriverNames(array) {
    array.forEach(element => {
        console.log(element.name)
    });
}

function logDriversByHometown(array, town) {
    array.forEach(function (element) {
        if (element.hometown === town) {
            console.log(element.name)
        };
    });
}

function driversByRevenue(array) {
    let newArray = [...array]
    return newArray.sort(function(a,b) { 
        return a.revenue - b.revenue; 
    });
}

function driversByName(array) {
    let newArray = [...array] 
    return newArray.sort(function (a,b) {
        return a.name.localeCompare(b.name)
    });
}

function totalRevenue(array) {
    let newArray = [...array]
    return newArray.reduce(
        (function(agg, el, i, arr) {
            return agg += el.revenue;
    }), 0);
}



function averageRevenue(array) {
    return totalRevenue(array)/array.length
}