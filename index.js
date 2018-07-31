// Receives an array of driver objects
// logs the name attribute of each driver to the console
// How do I iterate over the drivers list with forEach()
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

// Receives an array of drivers as the first argument
// Receives a location as the second argument
// Logs the name of the location to the console of each driver that matches the string passed in the hometown argument
function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if ( driver.hometown === location ) {
      console.log(driver.name);
    };
  });
};

// Receives an array of driver
// Returns a new array of driver objects sorted by their revenue attribute from lowest to highest
// How to do I write the comparison for the sort function to work
// I think I need to figure out a way to change the order of the sort. Does localeCompare() do this?
// localeCompare() isn't the way. I think I need to use num1 - num2 and I guess the return of a negative, postive number or 0 tells sort the order
// I need to make this non-destructive
function driversByRevenue(drivers) {
  driversByRevenueArray = [... drivers];
  driversByRevenueArray.sort(function(driver1, driver2) {
     return driver1.revenue - driver2.revenue;
  });
  return driversByRevenueArray;
};

// Receives an array of driver objects
// Returns a new array of driver objects sorted by their name attribute from A to Z
// Here I'll use the .localeCompare() attribute
// I got an Uncaught TypeError doing driver1.localeCompare(driver2);
// I needed to add .name to make it driver1.name.localeCompare(driver2.name);
function driversByName(drivers) {
  driversByNameArray = [... drivers];
  driversByNameArray.sort(function(driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  });
  return driversByNameArray;
};

// Receives an array of driver objects
// Returns the sum of the revenue earned by each driver
const totalRevenue = function(drivers) {
  let totalRevenue = 0;

  drivers.forEach(function (driver) {
    totalRevenue += driver.revenue;
  });

  return totalRevenue;
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers)/drivers.length;
};
