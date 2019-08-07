const logDriverNames = function(driversArray){
  driversArray.map(function(driver){
    console.log(driver.name);
  })
}

const logDriversByHometown = function(driversArray, location){
  driversArray.filter(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
    }
  })
}

const driversByRevenue = function(driversArray){
  return driversArray.slice().sort(function(a,b){
    return a.revenue - b.revenue;
  })
}

const driversByName = function(driversArray){
  return driversArray.slice().sort(function(a,b){
    return a.name.localeCompare(b.name);
  })
}

const totalRevenue = function(driversArray){
  let revenue = 0;
  driversArray.forEach(function(driver){
    revenue += driver.revenue;
  })
  return revenue;
}

const averageRevenue = function(driversArray){
  let average = 0;
  driversArray.forEach(function(driver){
    average += driver.revenue;
  })
  return average / driversArray.length;
}
