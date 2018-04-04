// Code your solution in this file!

//1
// forEach operates on each element in the array
//forEach takes in a function --> log name of given driver
// function logDriverNames(drivers) {
//   drivers.forEach(function (driver) {
//     console.log(driver.name);
//   });
// };

//2
// function logDriverNames(drivers) {
//   drivers.forEach(driver => console.log(driver.name))
// };

const logDriverNames = (drivers => drivers.forEach(driver => console.log(driver.name)))
// could also try naming conventions like this:
// const logDriverNames = function (drivers) {
//   drivers.forEach(function (driver) {
//     console.log(driver.name);
//   });
// };
/////////////////

// logDriversByHometown() — Receives an array of driver objects as the first argument and a location as the second
// argument. The function logs to the console the name attribute of each driver whose hometown matches the string
// passed in as the 'location' argument.
function logDriversByHometown(drivers,location) {
	drivers.forEach(function (driver) {
    	if (driver.hometown === location) {
      		console.log(driver.name);
    }
  });
};

// Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute
// from lowest to highest.

// function driversByRevenue(drivers) {
//   return drivers.slice().sort(function (first, second) {
//     return first.revenue - second.revenue;
//   });
// };

const driversByRevenue = (drivers => drivers.slice().sort((first, second) => first.revenue - second.revenue))



// Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute
// from A to Z. Here, you may have to use the String.prototype.localeCompare() method.

const driversByName = (drivers => drivers.slice().sort((first, second) => first.name.localeCompare(second.name)))
//
// function driversByName(drivers) {
//   return drivers.slice().sort(function (first, second) {
//     return first.name.localeCompare(second.name);
//   });
// };

 //Receives an array of driver objects and returns the sum of the revenue earned by each driver.

function totalRevenue(drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total
    ;}, 0);
};



//Receives an array of driver objects and returns the average revenue earned by each driver.
// function averageRevenue(drivers) {
//   return totalRevenue(drivers) / drivers.length;
// };

const averageRevenue = (drivers => totalRevenue(drivers) / drivers.length)
