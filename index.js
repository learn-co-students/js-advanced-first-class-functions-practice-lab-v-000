// Code your solution in this file!
const logDriverNames = function (array) {
  array.forEach(function(el, i, arr) {
    console.log(el.name);
  });
}

const logDriversByHometown = function (array, hometown) {
  let new_array = array.filter(x => x.hometown == hometown);
  new_array.forEach(function(el, i, arr) {
    console.log(el.name);
  });
}

const driversByRevenue = function (array) {
  let new_array = [...array];
    return new_array.sort(function (num1, num2) {
    return num1.revenue - num2.revenue;
  });
}
