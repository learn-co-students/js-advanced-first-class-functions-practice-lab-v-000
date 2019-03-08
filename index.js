// Code your solution in this file!
function logDriverNames(drivers) {
	return drivers.forEach(function(driver) {
		console.log(driver.name);
	})
}

// Receives an array of driver objects and logs the name attribute of each driver to the console.

function logDriversByHometown(drivers, hometown) {
	return drivers.forEach(function(driver) {
		if (driver.hometown == hometown) {
			console.log(driver.name)
		}
	})
}

// Receives an array of driver objects as the first argument and a location as the second argument. 
// The function logs to the console the name attribute of each driver whose hometown matches 
// the string passed in as the 'location' argument.

function driversByRevenue(drivers) {
  var newArray = [...drivers];
  return newArray.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

// Receives an array of driver objects and returns a new array of driver objects sorted by their 
// revenue attribute from lowest to highest.

function driversByName(drivers) {
  var newArray = [...drivers];
  return newArray.sort(function(driverA, driverB) {
  return driverA.name.localeCompare(driverB.name);});
}

// Receives an array of driver objects and returns a new array of driver objects sorted by their name 
// attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.

function totalRevenue(drivers) {
  return drivers.reduce(function(total, driver) {
    return driver.revenue + total}, 0);
}

// Receives an array of driver objects and returns the sum of the revenue earned by each driver.

function averageRevenue(drivers) { 
  return totalRevenue(drivers) / drivers.length;
}

// Receives an array of driver objects and returns the average revenue earned by each driver.