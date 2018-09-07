// Code your solution in this file!
function logDriverNames(drivers) {

  for (const x of drivers) {
    console.log(x.name)
  }
}

function logDriversByHometown(drivers, location) {
  for (const driver of drivers.filter(function (x) {return x.hometown === location})) {
    console.log(driver.name)
  }
}

function driversByRevenue(drivers) {
  const array = []
  for (const x of drivers) {
    array.push(x)
  }
  array.sort(function sorter (x,y) {return x.revenue - y.revenue})
 return array
}

function driversByName(drivers) {
  const array = []
  for (const x of drivers) {
    array.push(x)
  }
  array.sort(function sorter (x,y) {return x.name.localeCompare(y.name)})
 return array
}

function totalRevenue(drivers) {
const reduced = function (agg, el) {return agg + el.revenue}
  return drivers.reduce(reduced,0)
}

function averageRevenue(drivers) {
  const reduced = function (agg, el, i, arr) {return agg + el.revenue}
    return drivers.reduce(reduced,0)/drivers.length
}
