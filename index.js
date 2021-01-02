// Code your solution in this file!

// Receives an array of driver objects and logs the name attribute of each driver to the console.
const logDriverNames = function(drivers){
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

//Receives an array of driver objects as the first argument and a location as the second argument.
//The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.

const logDriversByHometown = function(drivers, hometown){
  drivers.forEach(function(driver){
    if (driver.hometown === hometown){
        console.log(driver.name);
    }
  });
};

//returns a new array of driver slice()
const driversByRevenue = function(drivers){
  return drivers.slice().sort(function(a, b){
   return a.revenue - b.revenue;
  });
};

//returns a new array of driver objects sorted by their name attribute from A to Z.
const driversByName = function(drivers){
  return drivers.slice().sort(function(a, b){
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function(drivers){
  return drivers.reduce( function(total, amount){
    return amount.revenue + total;
  }, 0);
};

// total / drivers.length; = averageRevenue
const averageRevenue = function(drivers){
  return totalRevenue(drivers) / drivers.length;
};
