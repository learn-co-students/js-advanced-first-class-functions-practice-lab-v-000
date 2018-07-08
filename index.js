// Code your solution in this file!

 const logDriverNames = function (list) {
  return list.map(function(driver){
    console.log(driver.name);
  });
}

 const logDriversByHometown = function (list, hometown) {
  return logDriverNames( list.filter(function (driver){
    return driver.hometown === hometown;
    })
  );
}

 const driversByRevenue = function (list) {
   return list.slice().sort(function (driverOne, driverTwo){
     return driverOne.revenue - driverTwo.revenue;
   });
}

const driversByName = function (list) {
  return list.slice().sort(function (driverOne, driverTwo){
    return driverOne.name.localeCompare(driverTwo.name);
  });
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
