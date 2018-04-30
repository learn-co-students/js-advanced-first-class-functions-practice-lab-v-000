// Code your solution in this file!
function logDriverNames(drivers){
  const callback = function (el, i, arr) {console.log(el.name)}
  drivers.forEach(callback);
}

function logDriversByHometown(drivers, location){
  const callback = function (el, i, arr){
    if (el.hometown === location){ console.log(el.name) }}
  drivers.forEach(callback);
}

function driversByRevenue(drivers){
  const compare = function (a, b) {
    return a.revenue - b.revenue
  }
  return [...drivers].sort(compare)
}

function driversByName(drivers){
  const compare = function (a, b) {
    return a['name'].localeCompare(b['name']);
  }
  return [...drivers].sort(compare)
}

function totalRevenue(drivers){
  const reduceRevenue = function (agg, el, i, arr) {
    return agg + el.revenue;
  }
  return drivers.reduce(reduceRevenue, 0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/(drivers.length)
}
