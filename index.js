// Code your solution in this file!
function logDriverNames(driver){
  driver.forEach(function(el){
    console.log(el.name);
  })
}

function logDriversByHometown(driver, hometown){
  driver.forEach(function(el){
    if(el.hometown === hometown){console.log(el.name);}
  })
}

function driversByRevenue(driver){
  const drivers = driver.slice(0) //Setting a new variable equal to .slice is an easy way to make a copy of a variable or array and operate on it nondestructively
  return drivers.sort(function(driver1, driver2){return driver1.revenue - driver2.revenue})
}

function driversByName(driver){
  const drivers = driver.slice(0) //Setting a new variable equal to .slice is an easy way to make a copy of a variable or array and operate on it nondestructively
  return drivers.sort(function(driver1, driver2){return driver1.name > driver2.name})
}

function totalRevenue(driver){
  return driver.reduce(function(total, currentDriver){
    return currentDriver.revenue + total;
  }, 0)
};

function averageRevenue(driver){
  return totalRevenue(driver) / driver.length
};
