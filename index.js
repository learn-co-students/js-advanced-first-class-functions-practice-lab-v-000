// Code your solution in this file!
function logDriverNames(drivers){
  for (const element of drivers) {
    console.log(element.name);
  }
}

function logDriversByHometown(drivers, location){
  for (const element of drivers) {
    if (element.hometown === location){
      console.log(element.name);
    }
  }
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
