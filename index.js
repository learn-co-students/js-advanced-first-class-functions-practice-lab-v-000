// Code your solution in this file!
function logDriverNames(drivers){
  function printName (el, i, arr) {console.log(el.name)}
  return drivers.forEach(printName)
}

function logDriversByHometown(drivers, location) {
  function printName (el, i, arr) {if (el.hometown === location) {console.log(el.name)}}
  return drivers.forEach(printName)
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a,b) {return a.revenue - b.revenue})
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a,b) {return a.name.localeCompare(b.name)})
}

function totalRevenue(drivers) {
  const getRevenue = function (agg, el, i, arr) {
    console.log(agg, el.revenue)
    return agg + el.revenue}
  return drivers.reduce(getRevenue, 0)
}
function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
