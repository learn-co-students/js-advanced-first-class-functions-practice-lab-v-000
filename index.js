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
   const newArray = array.sort(function(a, b) {
    return a.revenue - b.revenue;
  })
  return newArray
}

const driversByName = function(array) {

}

const totalRevenue = function(array) {

}

const averageRevenue = function(array) {

}
