// Code your solution in this file!
const logDriverNames = function(array) {
  array.forEach(function(item) {console.log(item.name)});
}

const logDriversByHometown = function(array, str) {
  array.forEach(function(item) {
    if (str === item.hometown) {
      console.log(item.name);
    }
  });
}

const driversByRevenue = function(array) {
  return array.slice(0).sort(function(a, b) {
   return a.revenue - b.revenue;
 })
}

const driversByName = function(array) {
  return array.slice(0).sort(function(a, b) {
    return a.name.localeCompare(b.name)
  })
}

const totalRevenue = function(array) {
  return array.reduce(function(total, obj) {
    return obj.revenue + total}, 0)
}

const averageRevenue = function(array) {
  return totalRevenue(array)/array.length
}
