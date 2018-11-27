// Code your solution in this file!
const logDriverNames = function(arr) {
  arr.forEach( function(d) { console.log(d.name); });
};
const logDriversByHometown = function(arr, arg) {
  arr.forEach( function(d) { if (d.hometown === arg) console.log(d.name); });
};

const driversByRevenue = function(arr) {
  return arr.slice().sort( function(a, b) { return a.revenue - b.revenue; });
};

const driversByName = function(arr) {
  return arr.slice().sort( function(a, b) { return a.name.localeCompare(b.name); });
};

const totalRevenue = function(arr) {
  return arr.reduce( function(tot, d) { return d.revenue + tot; }, 0);
};

const averageRevenue = function(arr) {
  return totalRevenue(arr) / arr.length
};
