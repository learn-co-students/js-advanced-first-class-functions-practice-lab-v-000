// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(ele){
    console.log(ele.name);
  });
}

function logDriversByHometown(drivers, location){
  drivers.forEach(function(ele){
    if(ele.hometown === location){
      console.log(ele.name);
    }
  })
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function(a, b){
    return a.revenue - b.revenue;
  });
}

const driversByName = function(drivers) {
  return drivers.slice().sort(function (a, b){
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = function(drivers){
  return drivers.reduce(function(sum, driver){
    return sum + driver.revenue;
  },0);
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
