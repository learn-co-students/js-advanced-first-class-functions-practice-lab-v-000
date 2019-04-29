// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(el, i, arr) {
    console.log(el.name)
  })
}
function logDriversByHometown(drivers, location) {
  drivers.forEach(function(el, i, arr) {
    if (el.hometown === location) {
      console.log(el.name)
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a,b){
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function (a,b) {
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(drivers) {
  let total = 0
  drivers.forEach(function (el, i, arr) {
    total += el.revenue
  })
  return total
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
