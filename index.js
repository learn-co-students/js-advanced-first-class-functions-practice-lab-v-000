function logDriverNames(drivers) {
  drivers.forEach(function (element) {
    console.log(element.name)
  })
};
function logDriversByHometown(drivers, hometown) {
  drivers.filter(function(element) {
    return element.hometown === hometown
  }).forEach( function (element) {
    console.log(element.name)
  })
};
function driversByRevenue(drivers) {
  return drivers.slice(0).sort(function (a, b) {
    return a.revenue - b.revenue
  })
};
function driversByName(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
};
function totalRevenue(drivers) {
  return drivers.reduce(function (sum, el) {
    return sum + el.revenue
  }, 0)
};
function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
};
