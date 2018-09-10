function logDriverNames(drivers) {
    drivers.forEach(function (driver) {
    console.log (driver.name)
    })
}

function logDriversByHometown(drivers, location) {
    drivers.forEach(function (driver) {
        if (driver.hometown === location){
        console.log(driver.name)
        }
    })
}

function driversByRevenue(drivers) {
    return drivers.slice().sort(function(num1, num2) {
        return num1.revenue - num2.revenue 
    })
} 

function driversByName(drivers) {
    return drivers.slice().sort(function (num1, num2) {
      return num1.name.localeCompare(num2.name)
    })
}

function totalRevenue(drivers) {
    return drivers.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.revenue
    }, 0)
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length
}