// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(callback)
}

const callback = function (e) {
  console.log(e.name)
}

function logDriversByHometown(drivers, city) {
  for (const element of drivers) {
    if (element.hometown === city) {
      console.log(element.name)
    }
  }
}

function driversByRevenue(drivers) {
  let newarray = [...drivers]
  newarray.sort(function(a, b){return a.revenue - b.revenue})
  return newarray
}

function driversByName(drivers) {
  let newarray = [...drivers]
  newarray.sort(function(a, b){return a.name.localeCompare(b.name)})
  return newarray
}

function addUpRevenues(total, num) {
  return total + num.revenue
}

function totalRevenue(drivers) {
  return drivers.reduce(addUpRevenues, 0)
}

function averageRevenue(drivers) {
  let total = totalRevenue(drivers)
  return total / drivers.length
}
