// Code your solution in this file!
const logDriverNames = function(drivers){
 drivers.forEach(function(driver, i, drivers ){
    console.log (driver.name);
  });
}

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function(driver, i, drivers){
    if (driver.hometown === location){
      console.log(driver.name);
    }
  })
}

const driversByRevenue = function(drivers){
  const sortedDriverArray = [...drivers];
  return sortedDriverArray.sort(function (driverA, driverB){
    return driverA.revenue - driverB.revenue;
  });
}

const driversByName = function(drivers){
  const sortedDriverName = [...drivers];
  return sortedDriverName.sort(function(driverA, driverB){
    return driverA.name.localeCompare(driverB.name);
  });
}


const totalRevenue = function(drivers){
  let earnedRevenue = 0;
  drivers.forEach(function(driver){
    earnedRevenue += driver.revenue;
  });
  return earnedRevenue;
}

const averageRevenue = function(drivers){
  return totalRevenue(drivers)/ drivers.length;
}
