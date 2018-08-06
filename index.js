function logDriverNames(drivers) {
  drivers.forEach(d => console.log(d.name))
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(d) {
    if (d.hometown === hometown) { console.log(d.name) }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort( (a, b) => {return a.revenue - b.revenue} )
}

function driversByName(drivers) {
  return drivers.slice().sort( (a, b) => {return a.name.localeCompare(b.name)} )
}

function totalRevenue(drivers) {
  return drivers.reduce((total, driver) => {return total + driver.revenue}, 0)
}


function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}