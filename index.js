// Code your solution in this file!
function logDriverNames(drivers) {
    return drivers.forEach( driver => {
        console.log(driver.name)
    })
}

function logDriversByHometown(drivers, string) {
    return drivers.filter( driver => {
        return driver.hometown === string
    }).forEach( d => { console.log(d.name) })
}

function driversByRevenue(drivers) {
    const copyDrivers = drivers.slice()
    return copyDrivers.sort( (a, b) => {
        return a.revenue > b.revenue
    })
}

function driversByName(drivers) {
    const copyDrivers = drivers.slice()
    return copyDrivers.sort((a,b) => {
        return a.name > b.name
    })
}

function totalRevenue(drivers) {
    return drivers.reduce((acc, driver) => { return  acc + driver.revenue}, 0 );
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length
}
