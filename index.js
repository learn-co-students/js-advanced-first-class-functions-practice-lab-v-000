// Code your solution in this file!

const callback = function (el, i, arr) {
  console.log(el.name);
};
 
function logDriverNames(arr) {
  return arr.forEach(callback);
}

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function(drivers){
  return drivers.concat().sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue
  })
}

const driversByName = function(drivers){
  return drivers.concat().sort(function(driver1, driver2){
    return driver1.name.localeCompare(driver2.name)
  });
}

const totalRevenue = function(drivers){
  return drivers.reduce(function(agg, driver){
    return agg += driver.revenue
  }, 0)
}

const averageRevenue = function(drivers){
  return totalRevenue(drivers) / drivers.length
}