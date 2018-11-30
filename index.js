// Code your solution in this file!
const logDriverNames = function (drivers) {

  drivers.forEach(function (driver) {
  console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, location){
    drivers.forEach(function (driver) {
      if (location === driver.hometown){
        console.log(driver.name);
      }
    });
};

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue
  })
}

const driversByName = function(drivers) {
  return drivers.slice().sort(function(driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

const totalRevenue = function(drivers){
  let total = 0;
  drivers.forEach(function(driver){
    total += driver.revenue;
  });
  return total;
}


const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
};