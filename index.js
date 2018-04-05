function logDriverNames(drivers){
  return drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location){
  return drivers.forEach(function(driver){
    driver.hometown === location ? console.log(driver.name) : null;
  });
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(driverA, driverB){
    return driverA.revenue > driverB.revenue;
  });
}

function driversByName(drivers){
  return drivers.slice().sort(function(driverA, driverB){
    return driverA.name > driverB.name;
  });
}

function totalRevenue(drivers){
  return drivers.reduce(
    function(total, driver){
      return total + driver.revenue;
    },0);
}

const averageRevenue = drivers => totalRevenue(drivers)/drivers.length;
