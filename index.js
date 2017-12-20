// Code your solution in this file!

const logDriverNames = function(drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name);
  })
};

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function(drivers){
  return [...drivers].sort(function (a,b){
    if (a.revenue < b.revenue){
      return -1
    }
    if (a.revenue > b.revenue){
      return 1
    }
    return 0
  })
};

const driversByName = function(drivers){
  return[...drivers].sort(function(a,b){
    return a.name.localeCompare(b.name);
  })
}

const totalRevenue = function(drivers) {
  return drivers.map(function (driver){
    return array = driver.revenue
  }).reduce(function (a,b){
    return a+b
  }, 0);
};

const averageRevenue = function(drivers) {
  return totalRevenue(drivers)/drivers.length
};
