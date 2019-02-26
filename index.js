// Code your solution in this file!
// var array1 = ['a', 'b', 'c'];
//
// array1.forEach(function(element) {
//  console.log(element);
// });

const logDriverNames = function(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
};


// var months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]
// 
// var array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);

const driversByRevenue = function(drivers) {
  // const x = drivers.sort(function(a,b) {return a.revenue-b.revenue});
  // return x; // needs to return a new array, which the next line will do
  return drivers.slice().sort(function(a,b) {return a.revenue - b.revenue});
};

// guestList.sort(function (a, b) {
//  return a.localeCompare(b);
// });

const driversByName = function(drivers) {
  return drivers.slice().sort(function(a,b) {return a.name.localeCompare(b.name)});
};

// .reduce(function, initial value)
// it's possible to "reduce" to just an array of something like this
// .reduce(function, [])
// or if starting from 0
// .reduce(function, 0)
const totalRevenue = function(drivers) {
  return drivers.reduce(function(total, driver) {return driver.revenue + total}, 0);
};

const averageRevenue = function(drivers) {return totalRevenue(drivers)/drivers.length};

