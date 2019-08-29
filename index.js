const logDriverNames = function (drivers) {
   return drivers.forEach(function (el) { return console.log(el.name); } );
};
function logDriversByHometown(drivers, hometown) {
  return logDriverNames(drivers.filter( function (n) {return n.hometown === hometown;} ));
}
const numberSorter = function (driver1, driver2) {
  return driver1.revenue - driver2.revenue;
};
const driversByRevenue = function (drivers) {
  return [...drivers].sort(numberSorter);
};
const driversByName = function (drivers) {
  return [...drivers].sort((a, b) => a.name.localeCompare(b.name));
};
function sumOfRevenue(agg, el, i, array) {
  return agg + el.revenue;
}
function totalRevenue(drivers) {
  return [...drivers].reduce(sumOfRevenue, 0);
};
function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
}
