// Code your solution in this file!
const logDriverNames = function (array) {
  array.forEach( function(element){
    console.log(element.name);
  });
}

const logDriversByHometown = function (array, hometown) {
  array.forEach( function(element){
    if (element.hometown === hometown) {
      console.log(element.name);
    }
  });
}

const driversByRevenue = function (array) {
  return [...array].sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

const driversByName = function (array) {
  return [...array].sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = function (array) {
  return array.reduce(function (total, driver) {
    return total + driver.revenue;
  }, 0);
}

const averageRevenue = function (array) {
  return totalRevenue(array) / array.length
}
