function logDriverNames(drivers){
  drivers.forEach(driver => console.log(driver.name))
};

 const logDriversByHometown = (drivers, location) => {
   drivers.forEach(driver => {
      if(driver.hometown === location){
        console.log(driver.name)
      }
    })
  }

const driversByRevenue = (drivers) => {
  return drivers.slice().sort(function(driverOne, driverTwo){
    return driverOne.revenue - driverTwo.revenue;
  })
}


function driversByName(drivers){
  return drivers.slice().sort(function(driverOne, driverTwo){
    return driverOne.name.localeCompare(driverTwo.name)
})
}

const totalRevenue = function (drivers){
  return drivers.reduce(function (total, currentDriver){
    return currentDriver.revenue + total;}, 0);
  };

const averageRevenue = function (drivers) {
  return totalRevenue(drivers)/ drivers.length;
};
