// Code your solution in this file!
const logDriverNames = (arr) => {
  arr.forEach(driver => console.log(driver.name));
};

const logDriversByHometown = (arr, location) => {
  arr.forEach(function(driver){
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = (arr) => {
  return arr.slice().sort(function(a, b){
    return a.revenue - b.revenue;
  });
};

const driversByName = (arr) => {
  return arr.slice().sort((a, b) => (a.name > b.name) ? 1 : -1);
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};