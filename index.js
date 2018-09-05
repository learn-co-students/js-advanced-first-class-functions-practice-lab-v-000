// Code your solution in this file!

// Receives an array of driver objects and logs the name attribute of each driver to the console.
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

// // solution also passes
// Receives an array of driver objects and logs the name attribute of each driver to the console.
// const logDriverNames = function(drivers) {
//   drivers.forEach(function (driver) {
//     console.log(driver.name);
//   });
// };



// Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.
function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
}

// // solution also passes
// const logDriversByHometown = function(drivers, hometown) {
//   drivers.forEach(function (driver) {
//    if (driver.hometown === hometown) {
//      console.log(driver.name);
//    }
//  });
// };


// Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest
const driversByRevenue = function (drivers) {
  const orderRevenue = [...drivers];

  return orderRevenue.sort(function (a, b) {
    return a.revenue - b.revenue
  })
};
