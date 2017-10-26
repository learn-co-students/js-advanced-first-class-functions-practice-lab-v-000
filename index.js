// Code your solution in this file!
const logDriverNames = function(drivers) {
  return drivers.forEach(function (driver) {
    console.log(driver.name)
  });
};

const logDriversByHometown = function(drivers, location){
  return drivers.forEach(function (driver){
    if(driver.hometown === location) {
      console.log(driver.name);
    };
  });
};

// .slice() can duplicate an array

/*
const array = ['before', 'next', 'over']
const newArray = array.slice()

console.log(newArray)
*/

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue
  });
};

const driversByName = function(drivers) {
  return drivers.slice().sort(function(driver1, driver2){
    return driver1.name.localeCompare(driver2.name);
  });
};

const totalRevenue = function(drivers) {
  let total = 0

  drivers.forEach(function(driver){
    total += driver.revenue
  });
  return total
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
};
