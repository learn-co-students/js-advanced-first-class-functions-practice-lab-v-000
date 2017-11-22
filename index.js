// Code your solution in this file!

function logDriverNames(driverArr) {
    const driverFun = function (el, index, arr){
        console.log(el.name)
    }
    return driverArr.forEach(driverFun)
}

function logDriversByHometown(driverArr, location) {
    const driverCallback = function(el, index, arr){
        if (el.hometown === location){
            console.log(el.name)
        }
    }
    return driverArr.forEach(driverCallback)
}

function driversByRevenue(driversArr){
    const driverCallback = function(a, b) {
        return a.revenue - b.revenue
    }
    let newDrivers =  driversArr.slice()
    newDrivers.sort(driverCallback)
    return newDrivers
}

function driversByName(driversArr){
    const driverCallback = function (a, b) {
        return a.name.localeCompare(b.name)
    }
    let newDrivers = driversArr.slice()
    newDrivers.sort(driverCallback)
    return newDrivers
}

function totalRevenue(driverArrs){
    const driverCallback = function (agg, el, index, arr) {
        return agg + el.revenue
    }
    let total = driverArrs.reduce(driverCallback, 0)
    return total
}

function averageRevenue(driverArrs){
    let total = totalRevenue(driverArrs)
    return total / driverArrs.length
}