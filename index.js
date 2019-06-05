// Code your solution in this file!

function logDriverNames(drivers){
  return drivers.forEach(function(driver){
    console.log(`${driver.name}`);
  });
}

function logDriversByHometown(drivers, location){
  return drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(`${driver.name}`);
    }
  });
}

const driversByRevenue = function (drivers){
  const copy = [...drivers]
  const sortIt = function (d1, d2){
    return d1.revenue - d2.revenue;
  };
  return copy.sort(sortIt);
}

function driversByName(drivers){
  const copy = [...drivers]
  const sortIt = function (d1, d2){
    return d1.name.localeCompare(d2.name);
  };
  return copy.sort(sortIt);
}

function totalRevenue(drivers){
  let total = 0;
  drivers.forEach(function(driver){
    total += driver.revenue;
  });
  return total;
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length;
}