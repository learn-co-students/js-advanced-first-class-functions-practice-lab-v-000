// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, hometown){
  return logDriverNames(drivers.filter(driver => driver.hometown === hometown));
}

function driversByRevenue(drivers){
 const newDrivers = drivers.slice();
  return newDrivers.sort(function(a,b){
    return a.revenue - b.revenue
  })
}

function driversByName(drivers){
  const newDrivers = drivers.slice();
  return newDrivers.sort(function(a,b){
    return (a.name).localeCompare(b.name)
  })
}

function totalRevenue(drivers){
 let i = 0;
 return drivers.reduce((a,c) => a + c.revenue, i);
}

function averageRevenue(drivers){
 return totalRevenue(drivers)/drivers.length;
}
