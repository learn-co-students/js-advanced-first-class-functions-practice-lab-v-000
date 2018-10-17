// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name))
};

function logDriversByHometown(drivers, town) {
  drivers.forEach( element => { if (element.hometown === town) { console.log(element.name) } } )
};

function driversByRevenue(drivers) {
  let driversCopy = Array.from(drivers);
  return driversCopy.sort(function (a, b) { return a.revenue - b.revenue; });
};

function driversByName(drivers) {
  let driversCopy = Array.from(drivers);
  return driversCopy.sort(function (a, b) { return a.name.localeCompare(b.name); })
};

function totalRevenue(drivers) {
  const reduceRevenue = function (agg, el) {
    return agg + el.revenue
  }
  return drivers.reduce(reduceRevenue, 0)
};

function averageRevenue(drivers) {
  const length = drivers.length
  return (totalRevenue(drivers) / length)
};
