// Code your solution in this file!
function logDriverNames(array) {
    const callback = function (el, i, arr) {
        console.log(el["name"])
    }
    array.forEach(callback)
}

function logDriversByHometown(array, string) {
    const callback = function (el, i, arr) {
        if (el["hometown"] === string) {
            console.log(el["name"])
        }
    }
    array.forEach(callback)
}

function driversByRevenue(array) {
    return array.slice().sort(function(a, b) {
        return a.revenue - b.revenue;
    })
}

function driversByName(array) {
    return array.slice().sort(function(a, b) {
        return a["name"].localeCompare(b["name"]);
    })
}

function totalRevenue(array) {
    let totalRevenue = 0;
 
    array.forEach(function (element) {
      totalRevenue += element.revenue;
    });
   
    return totalRevenue;
}

function averageRevenue(array) {
    return (totalRevenue(array)) / array.length;
}