// Code your solution in this file!

// logDriverNames() — Receives an array of driver objects and logs the name attribute of each driver to the console.
// const logDriverNames = function (drivers) {
//   drivers.forEach(function (driver) {
//     console.log(driver.name);
//   });
// };
function logDriverNames(drivers) {
  drivers.forEach(function (element, i, arr) {
    console.log(element.name)
  });
};

// logDriversByHometown() — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.
// const logDriversByHometown = function (drivers, hometown) {
//   drivers.forEach(function (driver) {
//     if (driver.hometown === hometown) {
//       console.log(driver.name);
//     }
//   });
// };
function logDriversByHometown(drivers, location) {
  drivers.forEach(function (element, i, arr) {
    if (element.hometown === location) {
      console.log(element.name) }
  });
};

// driversByRevenue() — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.
// const driversByRevenue = function (drivers) {
//   return drivers.slice().sort(function (driverOne, driverTwo) {
//     return driverOne.revenue - driverTwo.revenue;
//   });
// };
function driversByRevenue(drivers) {
  const result = [...drivers].sort(function (num1, num2) {
    return num1.revenue - num2.revenue
  });

  return result;
};

// driversByName() — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.
// const driversByName = function (drivers) {
//   return drivers.slice().sort(function (driverOne, driverTwo) {
//     return driverOne.name.localeCompare(driverTwo.name);
//   });
// };
function driversByName(drivers) {
  const result = [...drivers].sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  return result;
};

// totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
// const totalRevenue = function (drivers) {
//   return drivers.reduce(function (total, currentDriver) {
//     return currentDriver.revenue + total;
//   }, 0);
// };
const totalRevenue = function (drivers) {
  let totalRevenue = 0;

  drivers.forEach(function (driver) {
    totalRevenue += driver.revenue;
  });

  return totalRevenue;
};

// averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.
const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
